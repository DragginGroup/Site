var text = document.createElement('p');

export function startConsole() {
    document.body.append(text);
}

export function log(data) {
    text.innerHTML += data+'<br>'; 
    console.log(data);
}