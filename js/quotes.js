const quotes = [
    {
        quote:"It is hard to fail, but it is worse never to have tried to succeed.",
        author: "Theodore Roosevelt",
    },
    {
        quote:"Success is the ability to go from failure to failure without losing your enthusiasm.",
        author: "Winston Churchill",
    },
    {
        quote:"Take time to deliberate, but when the time for action has arrived, stop thinking and go in.",
        author: "Napoleone di Buonaparte",
    },
    {
        quote:"They say that time changes things, but you actually have to change them yourself.",
        author: "Andy Warhol",
    },
    {
        quote:"A man of words and not of deeds is like a garden full of weeds.",
        author: "Native American Proverb",
    },
    {
        quote:"The move the world, we must first move ourselves.",
        author: "Socrates",
    },
    {
        quote:"People do not lack strength, they lack will.",
        author: "Victor Hugo",
    },
    {
        quote:"Life isn't about finding yourself. Life is about creating yourself.",
        author: "George Bernard Shaw",
    },
    {
        quote:"The greatest pleasure in life is doing what people say you cannot do.",
        author: "Walter Bagehot",
    },
    {
        quote:"The one thing that separates the the winners from the losers is winners take action.",
        author: "Author Unknown",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;