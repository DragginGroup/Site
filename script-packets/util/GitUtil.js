export function getGit() {
    fetch('https://api.github.com/repos/DragginGroup/Blog/commits?per_page=1').then(res => res.json()).then(res => {
        var commit = res[0].commit;

        return commit;
    });
}