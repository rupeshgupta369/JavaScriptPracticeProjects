const newQuoteButton = document.querySelector("#quote")

newQuoteButton.addEventListener("click", getQuote);

const apipoint = "http://quotes.stormconsultancy.co.uk/random.json";

async function getQuote() {
    try {
        const response = await fetch(apipoint)
        if (!response.ok) {
            throw Error(response.statusText)
        }
        let json = await response.json();
        displayQuote(json.quote);
    } catch (err) {
        console.log(err);
        alert("Failed to fetch new quote")
    }
}
function displayQuote(quote) {
    document.getElementById('p').innerHTML = " " + quote + " ";
}
