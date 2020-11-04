function values() {
    let h = Number(document.getElementById("h").value)
    let m = Number(document.getElementById("m").value)
    let s = Number(document.getElementById("s").value)

    let t = h * 3600 + m * 60 + s;

    function timer() {
        document.getElementById("p").innerHTML = 'Time Left (Seconds) : ' + t;

        document.getElementById("p2").innerHTML = "Please reload the page to reset the timer.";

        if (t == 0) {
            document.getElementById("p").innerHTML = "<h2 style= 'color:red'>Timeout</h2>";
            alert(`Timeout...!${String.fromCodePoint(0x231B)} \n Please Reload the page`);
        }
        else if (t > 0) {
            t = t - 1;
        }
    }
    setInterval(timer, 1000)
}