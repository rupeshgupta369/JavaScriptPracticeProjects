var counter = document.querySelector(".counter")
var followers = document.querySelector(".followers")

//setInterval

let count = 1;
// console.log(counter.innerText);

/* setInterval(() => {
    count++; //this will increase the count;
    counter.innerText = count;
}, 750) //seconds in ms

 */

setInterval(() => {
    if (count < 1000) {
        count++; //this will increase the count;
        counter.innerText = count;
    }
}, 1) //seconds in ms

setTimeout(() => {
    followers.innerText = "Followers on Instagram"
}, 5000)