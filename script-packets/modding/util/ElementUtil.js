export function createElement(id) {
    var newElement = document.createElement(id);

    return newElement;
}

export function createParentElementGRP(el, parCl) {
    var myElement = el;
    var parent = document.getElementsByClassName(parCl);

    return {
        "element" : myElement,
        "parent" : parent
    };
}

export function appendElement(element, parentClass) {
    var elParGRP = createParentElementGRP(element, parentClass);

    elParGRP.parent.append(elParGRP.element);
}

export function prependElement(element, parentClass) {
    var elParGRP = createParentElementGRP(element, parentClass);

    elParGRP.parent.prepend(elParGRP.myElement);
}