let link = ''; 

function initLink(myType) {
    switch (myType.toLowerCase()) {
        case 'development' || 'dev' || 'develop': link = 'IdealistCat/Blog';
        default: link = 'DragginGroup/Blog'; 
    }
}

function returnCommitData() {
    initLink('dev');

    fetch('https://api.github.com/repos/'+link+'/commits?per_page=1')
    .then(res => res.json())
    .then(res => {
        var commit_data = res[0];
        // var commit = commit_data.commit;

        return commit_data;
    });
}

var commit = returnCommitData();

export function commitHash() { return commit.sha.substring(0,5); }