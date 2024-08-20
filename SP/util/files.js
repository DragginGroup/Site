function returnPath(path, folder) {
  return '/Blog/Content/' + folder + path;
}

function returnComicPath(path) {
  return returnPath(path, 'comics/');
}

function returnSitePath(path) {
  return returnPath(path, 'Site/');
}

// HOW: how will I replace image source 
// with another one?
