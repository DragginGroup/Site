ChangePage('project', 'Assets/pages');

function ChangePage(page, path) {
    window.location.href = `/${path}/${page}.html`;
}