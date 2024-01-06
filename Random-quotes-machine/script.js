window.onload = init;

const QUOTEBANK = [
    {
        quote: "Life is what we make it, always has been, always will be.", 
        author: "- Grandma Moses"
    },
    {
        quote: "It is never too late to be what you might have been.",
        author: "- George Eliot"
    },
    {
        quote: "Dream big and dare to fail"
        ,author: "- Norman Vaughan"
    },
    {
        quote: "Life is a journey, not a destination"
        ,author: "- Ralph Waldo Emerson"
    },
    {
        quote: "Do what is right, not what is easy nor what is popular"
        ,author: "- Roy T. Bennett"
    }
];

function init() {
    getQuote()
};

function getQuote() {
    const quoteLength = QUOTEBANK.length;
    const randomIndex = Math.floor(Math.random() * quoteLength)
    const randomQuote = QUOTEBANK[randomIndex];

    document.getElementById("text").innerText = randomQuote.quote
    document.getElementById("author").innerText = randomQuote.author
};