"""Prepare only approved public website files; originals are never deleted."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import shutil

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / '_site'
PAGES = ['index.html', 'portfolio/index.html', 'resume/index.html', 'cv/index.html']
FILES = PAGES + [
    'css/portfolio.css', 'css/resume.css', 'css/main.css', 'css/site.css',
    'js/portfolio.js', 'js/site.js', 'downloads/Ayaisha-Jahan-Sheikh-CV.pdf',
    'downloads/Ayaisha-Jahan-Sheikh-Lebenslauf.pdf',
]
FILES += [str(p.relative_to(ROOT)).replace('\\', '/') for p in sorted((ROOT / 'assets/portfolio').glob('*.webp'))]
FILES += [str(p.relative_to(ROOT)).replace('\\', '/') for p in sorted((ROOT / 'assets/cv').glob('*.webp'))]

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path, self.links, self.ids, self.images, self.nav = path, [], set(), [], []
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a:
            assert a['id'] not in self.ids, f'Duplicate ID in {self.path}'
            self.ids.add(a['id'])
        for key in ('href', 'src'):
            if a.get(key): self.links.append(a[key])
        if tag == 'img' and a.get('src'): self.images.append(a)
        if tag == 'a' and a.get('aria-current') == 'page': self.nav.append(a)

def main():
    expected = set(FILES) | {'.nojekyll'}
    OUT.mkdir(exist_ok=True)
    existing = {p.relative_to(OUT).as_posix() for p in OUT.rglob('*') if p.is_file()}
    assert not existing - expected, 'Unexpected files in _site; review before publishing.'
    for rel in FILES:
        source, target = ROOT / rel, OUT / rel
        assert source.is_file() and not source.is_symlink(), f'Missing or unsafe file: {rel}'
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(source, target)
    (OUT / '.nojekyll').write_text('', encoding='utf-8')
    pages = {}
    for rel in PAGES:
        p = Page(rel); p.feed((OUT / rel).read_text(encoding='utf-8'))
        pages[rel] = p
        assert len(p.nav) == 1, f'Current navigation missing: {rel}'
        for image in p.images:
            assert all(image.get(k) for k in ('alt', 'width', 'height')), f'Image accessibility/dimensions: {rel}'
    checked = 0
    for rel, page in pages.items():
        for href in page.links:
            u = urlsplit(href)
            if u.scheme or u.netloc: continue
            assert not u.path.startswith('/'), f'Root path breaks project Pages: {href}'
            dest = (OUT / rel).parent / unquote(u.path) if u.path else OUT / rel
            dest = dest.resolve()
            assert dest.is_relative_to(OUT.resolve()), f'Path leaves website: {href}'
            if dest.is_dir(): dest /= 'index.html'
            assert dest.is_file(), f'Broken link in {rel}: {href}'
            if u.fragment:
                key = dest.relative_to(OUT).as_posix()
                assert key in pages and unquote(u.fragment) in pages[key].ids, f'Broken section: {href}'
            checked += 1
    size = sum((OUT / rel).stat().st_size for rel in FILES)
    print(f'PASS: {len(PAGES)} routes, {checked} local links/assets, {len(FILES)+1} public files, {size/1024/1024:.2f} MB.')
    print('References, backups, unused originals, and local documents excluded. No originals deleted.')

if __name__ == '__main__': main()
