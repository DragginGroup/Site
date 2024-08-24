export function returnPath(path, folder) {
  return '/Blog/Content/' + folder + path;
}

export function returnComicPath(path) {
  return returnPath(path, 'comics/');
}

export function returnSitePath(path) {
  return returnPath(path, 'Site/');
}

// HOW: how will I replace image source 
// with another one?
