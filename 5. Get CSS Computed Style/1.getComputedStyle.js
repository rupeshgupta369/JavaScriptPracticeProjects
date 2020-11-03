const red = document.querySelector(".red")
const green = document.querySelector(".green")
const blue = document.querySelector(".blue")
const yellow = document.querySelector(".yellow")
const orange = document.querySelector(".orange")

const center = document.querySelector(".center")

// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {

    return window.getComputedStyle(selectedElement).backgroundColor;
}

/* 
var redElementColor = getBGColor(red);

red.addEventListener("mouseover", () => {
    center.style.background = redElementColor;
}) */

const colorPop = (element, color) => {
    return element.addEventListener("mouseover", () => {
        center.style.background = color;
    })
}

colorPop(red, getBGColor(red))
colorPop(green, getBGColor(green))
colorPop(blue, getBGColor(blue))
colorPop(yellow, getBGColor(yellow))
colorPop(orange, getBGColor(orange))