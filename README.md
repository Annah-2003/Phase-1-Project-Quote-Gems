# Phase-1-Project-Quote-Gems### 
### *By Irene Annah on 11/10/2023*


##  Description:
This is a straightforward website that displays a new inspiring or motivational quote every day when users visit the site. The website will fetch a daily quote from a public quote API and present it in a user-friendly manner.


##  API Used:
For this project, I have used a public quote API like the "They Said So Quotes" API, which provides a free API endpoint to fetch daily quotes.


##  Features
It provides a simple, functional, and user-friendly experience for visitors to the "Quote of the Day Website." Users can access daily inspirational quotes with the option to fetch a new one manually, and the website automatically updates the quote daily without requiring user intervention. 
Error Handling
The website implements basic error handling to notify users if there are issues with fetching a new quote or if the API request fails.

## Instructions
To access the Quote Gems Webbsite;
Open the folder on your VS Code and open the HTML file on your browser by clicking the go live button on the bottom right side of your screen.
Now you can clearly see the website and the quote of the day together with the features it comes with. If you'd like to get a new quote click on the Get New Quote Button and it will automatically generate a new quote for you.
## Click this link;https://github.com/Annah-2003/Phase-1-Project-Quote-Gems




## Code organization
HTML (index.html)
This file contains the structure of my website. It defines the layout, elements, and the overall user interface.
CSS (styles.css)
The CSS file is responsible for styling the webpage, making it visually appealing and responsive.
JavaScript (script.js):
The JavaScript file contains the functionality of my website.
I have organized my JavaScript code into functions that handle assigned tasks, such as fetching data from the API and updating the DOM.
It also implements event listeners for user interactions, such as clicking a button to get a new quote.
I have put in comments to provide explanations for each section of the code.

## Code Samples
 <title>Quote of the Day</title> is for HTML (index.html)
The JavaScript file contains the functionality of my website                                                                 function getQuote() {
    fetch("")
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

The CSS file is responsible for styling the webpage, making it visually appealing and responsive.
body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
    background-color: rgb(218, 39, 143);
    margin: 0;
    padding: 0;
}

## Demo Screenshots 

![Alt Text]





##  Credits





##  License
This project is licensed under the MIT License.


## Known Bugs
    No bugs detected. The programs runs perfectly.

##  Technologies Used- Javascript
- Terminal  -JSON SERVER
- HTML/CSS

## Support and contact details
    - Email :: gitauirene56@gmail.com
    - Phone :: +254717035023