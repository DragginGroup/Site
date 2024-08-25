export function returnGithub(versionType = '') {
    var link = '';

    switch (versionType.toLowerCase()) {
        case 'development' || 'dev' || 'develop': link = 'https://api.github.com/repos/IdealistCat/Blog/commits';
        default: link = 'https://api.github.com/repos/DragginGroup/Blog/commits';
    }

    fetch(link)
        .then(response => {
          response.json().then(json => {
            console.log(json);
          });
        })
        .catch(error => {
          console.log(error);
        });
    
}