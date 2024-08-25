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
            return json;
          });
        })
        .catch(error => {
          console.log(error);
        });
    
}

export function returnCommitHash(type = 'short', versionType = '') {
  var git = returnGithub(versionType);
  /**
   * var gitA = {
   * "sha" : "89yw8h9udg"
   * } 
  */
  var commit = git.sha;

  switch (type.toLowerCase()) {
    case 'short': commit = git.sha.slice(5, git.sha.length);
    default: commit = git.sha
  }

  return;
}