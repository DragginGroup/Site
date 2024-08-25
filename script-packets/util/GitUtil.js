let link = ''; 

function initLink(myType) {
    switch (myType.toLowerCase()) {
        case 'development' || 'dev' || 'develop': link = 'IdealistCat/Blog';
        default: link = 'DragginGroup/Blog'; 
    }
}

export function returnCommitData(data = '') {
    initLink('dev');

    fetch('https://api.github.com/repos/'+link+'/commits?per_page=1')
    .then(res => res.json())
    .then(res => {
        var commit_data = res[0];

        var hash = commit_data.sha;
        var commit = commit_data.commit;
        
    
        return commit_data;
    });
}