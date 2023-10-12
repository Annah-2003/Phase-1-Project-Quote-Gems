const apiKey = 'aJ3onTKlQ3uwSvVJJ4DygAdCZPxUQ9C9RztA4eEl';

document.addEventListener("DOMContentLoaded", getQuote);

document.getElementById("get-quote").addEventListener("click", getQuote);

function getQuote() {
    fetch('https://quotes.rest/qod.json', {
        headers: {
            'X-TheySaidSo-Api-Secret': apiKey
        }
    })
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
