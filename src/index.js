document.addEventListener("DOMContentLoaded", getQuote);

document.getElementById("get-quote").addEventListener("click", getQuote);

function getQuote() {
    fetch("https://quotes.rest/qod.json")
        .then((response) => response.json())
        .then((data) => {
            const quoteText = data.contents.quotes[0].quote;
            const quoteAuthor = data.contents.quotes[0].author;

            document.getElementById("quote-text").textContent = `"${quoteText}"`;
            document.getElementById("quote-author").textContent = `- ${quoteAuthor}`;
        })
        .catch((error) => {
            console.error("Error fetching quote:", error);
        });
}
function get_quote_of_the_day() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
	     // Access the result here
	     alert(this.responseText);
	 }
    };
    xhttp.open("GET", "https://quotes.rest/qod?category=inspire", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-Theysaidso-Api-Secret", "YOUR API HERE");
    xhttp.send();
}

get_quote_of_the_day()