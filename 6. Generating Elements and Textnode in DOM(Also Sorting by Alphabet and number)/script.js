const courses = [
    {
        name: "Complete React JS Courses",
        price: "5.3"
    },
    {
        name: "Complete Angular JS Courses",
        price: "3.3"
    },
    {
        name: "Complete MERN Courses",
        price: "10.3"
    },
    {
        name: "Complete JAVA Courses",
        price: "9.9"
    },

    {
        name: "Complete Python Courses",
        price: "2.99"
    },
]
/*
    //create element li
    < li ></li>

    //add class into it
    <li class="list-group-item"></li>

    ////create text node
    //append into the list
    <li class="list-group-item">Complete c++ course</li>

    //need span in the li element
    //create span
    //add text node
    <span>2.8</span>
    // append into the li
    <li class="list-group-item">Complete c++ course<span>2.8</span></li>

    //appending whole li into the ul

    */

function generateLIST() {

    const ul = document.querySelector(".list-group")
    /**** */
    ul.innerHTML = " "; //this is for reset HTML 
    courses.forEach(course => {

        //create element li
        const li = document.createElement("li")
        //add class into it
        li.classList.add("list-group-item")// addding class

        ////create text node
        const name = document.createTextNode(course.name)
        //append into the list
        li.appendChild(name)

        //need span in the li element
        //create span
        const span = document.createElement("span")
        //add class into span
        span.classList.add("float-right")

        //create text node
        // < span > 2.8</span >
        const price = document.createTextNode("$" + course.price)
        //append text node into span
        span.appendChild(price)

        // append SPAN into the li
        li.appendChild(span)

        //appending whole li into the ul
        ul.appendChild(li)

    });
}
// generateLIST(); 
//above and below line of code do the same thing

window.addEventListener("load", generateLIST())//we just part the reference and not the method and it automatically run by the event listener

//design a method for the button with class sort-btn

const button1 = document.querySelector(".button1")

button1.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price);
    generateLIST();
});

const button2 = document.querySelector(".button2")

button2.addEventListener("click", () => {
    courses.sort((a, b) => a.name.localeCompare(b.name))
    generateLIST();
});