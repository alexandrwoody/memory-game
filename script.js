const body = document.body;

function createElement(options) {

    const { tag = "div", text = "", parent, classes = [] } = options;

    const element = document.createElement(tag);
    element.textContent = text;


    if (classes.length > 0) {
        element.classList.add(...classes);
    }


    if (parent != null) {
        parent.appendChild(element);
    }

    return element;
}
const containerElement = createElement({
    tag: "div",
    text: "",
    classes: ["container"],
});
body.append(containerElement);
const title = createElement({
    tag: "h1",
    text: "Memory game",
    parent: containerElement,
    classes: ["title"],
});
containerElement.append(title);
const gameBoard = createElement({
    tag: "div",
    text: "",
    parent: containerElement,
    classes: ["game-board"],
});
const cards = createElement({
    tag: "div",
    text: "",
    parent: containerElement,
    classes: ["cards"],
});
gameBoard.append(cards);
const card = createElement({
    tag: "div",
    text: "",
    classes: ["card"],
});
for (let i = 0; i < 16; i++) {
    const card = createElement({
    tag: "div",
    text: "",
    parent: cards,
    classes: ["card"],
});
cards.appendChild(card);
}
