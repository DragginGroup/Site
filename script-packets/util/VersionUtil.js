const VERSION = '0.2.8';
const DATE = '2024.9.1';

export function returnVersion(type = 'version') {
    var version_return = '';
    
    switch (type.toLowerCase()) {
        case 'date': version_return = DATE;
        case 'date-development' || 'date-dev' || 'date-develop': version_return = DATE + '-development';
        case 'development' || 'dev' || 'develop': version_return = 'v' + VERSION + '-development';
        default: version_return = 'v' + VERSION;
    }

    return version_return;
}