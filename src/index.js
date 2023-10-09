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
