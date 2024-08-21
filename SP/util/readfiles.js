export function readText(file, ext="txt") {
  fetch(file+"."+ext)
  .then((res) => res.text())
  .then((text) => {
    return text;
   })
  .catch((e) => {
    return e;
  });
}

export function readJSON(file) {
  fetch(file+'.json')
  .then(response => response.json())
  .then(jsonResponse => {
    return jsonResponse;
  })
  .catch((e) => {
    return e;
  });
}
