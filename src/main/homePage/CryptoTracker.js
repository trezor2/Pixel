// CryptoTracker.js
const bitcoinUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';
const ethereumUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd';

// Function to fetch cryptocurrency price and display it
function fetchAndDisplayPrice(url, elementId, currencyName) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok for ${currencyName}`);
            }
            return response.json();
        })
        .then(data => {
            const priceElement = document.getElementById(elementId);
            const price = data[currencyName.toLowerCase()].usd;

            // Display cryptocurrency price on the webpage
            priceElement.innerHTML = `<h2>${currencyName} Price: $${price}</h2>`;
        })
        .catch(error => {
            console.error(`Error fetching ${currencyName} price:`, error);
        });
}

// Fetch and display Bitcoin price
fetchAndDisplayPrice(bitcoinUrl, 'bitcoin-price', 'Bitcoin');

// Fetch and display Ethereum price
fetchAndDisplayPrice(ethereumUrl, 'ethereum-price', 'Ethereum');
