//block icon is a dedault behaviour of the HTML element, it wont you drag
//we will use inline functions
//will use functions allow drop in HTML

let id; //variable to store the id of the dradded element

function allowDrop(eve) {
    eve.preventDefault()
    //Now restricted item is gone and placeholder icon is available
}
//we have to collect the id of the drag an element and store into the desired location


function dragStart(eve) {
    id = eve.target.id;
    // alert(id);
    // console.log(id);
}

function drop(eve) {
    eve.target.append(document.getElementById(id));
}