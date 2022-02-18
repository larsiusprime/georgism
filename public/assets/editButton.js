(()=>{
  const baseUrl = 'https://github.com/larsiusprime/georgism/edit/main/public';

  const mainEl = document.querySelector('main');
  const h1El = document.querySelector('h1');
  if (mainEl && !(h1El && h1El.innerText.indexOf('404') >= 0)) {
    // On non-404 pages, add a link to the GitHub page
    const buttonEl = document.createElement('a');
    buttonEl.classList.add('editButton');
    buttonEl.innerText = '📝Edit';
    buttonEl.setAttribute('rel', 'noopener nofollow');
    buttonEl.setAttribute('target', '_blank');
    mainEl.prepend(buttonEl);

    const pathname = location.pathname;
    const href = (location.pathname === '/')
        ? '/_index.md'
        : location.pathname.split('/').map((p, n) => n === pathname.replace(/[^\/]/g, '').length ? '_' + p : p).join('/') + '.md';
    buttonEl.setAttribute('href', baseUrl + href);
  }
})();
