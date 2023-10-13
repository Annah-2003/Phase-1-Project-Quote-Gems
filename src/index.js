// Wait for the DOM (document) to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", getQuote);

// Attach a click event listener to the "Get Quote" button
document.getElementById("get-quote").addEventListener("click", getQuote);

// Function to fetch a random quote and update the page
function getQuote() {
    // Sends a GET request to the "https://api.quotable.io/random" API
    fetch('https://api.quotable.io/random')
        .then((response) => response.json()) // Parse the response as JSON
        .then((data) => {
            // Extract the quote text and author from the response data
            const quoteText = data.content;
            const quoteAuthor = data.author;

            // Update the HTML elements with the retrieved quote
            document.getElementById("quote-text").textContent = `"${quoteText}"`;
            document.getElementById("quote-author").textContent = `- ${quoteAuthor}`;
        })
        .catch((error) => {
            // Handle errors, if any, and log them to the console
            console.error("Error fetching quote:", error);
        });
}
