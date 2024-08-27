export function getGit(dev = false) {
    var main = 'DragginGroup/Blog';
    if (dev == true) main.replace('DragginGroup', 'IdealistCat');

    var link = `https://api.github.com/repos/${main}/commits?per_page=1`;

    fetch(link).then(res => res.json()).then(res => {
        var commit = res[0].commit;
        // var commit = ""

        return commit;
    });
}

export function getHash(dev = false) { return getGit(dev).tree.sha.slice(0,5); }