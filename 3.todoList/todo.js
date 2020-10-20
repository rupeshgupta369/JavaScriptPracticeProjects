console.log("TODO LIST");

const button = document.querySelector("#btn");

const list = document.querySelector("#list");

button.onclick = function () {
    let item = document.querySelector("#todo").value;
    // console.log(item, typeof (item));
    let text = document.createTextNode(item);
console.log(text);
    let listItem = document.createElement('li');

    listItem.appendChild(text);

    list.appendChild(listItem); // this returns a node value
    document.forms.myForm.reset();
}

// button.addEventListener('click', function () { })

//regex intro
const str = "hello how are you?";
const pattern = /how/;

console.log(pattern.test(str));