// JavaScript code to fetch cryptocurrency data from an API
const apiUrl = 'https://api.example.com/crypto-prices'; // Replace this with the actual API endpoint URL

// Fetch cryptocurrency data from the API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const cryptoListContainer = document.getElementById('crypto-list');

        // Iterate through the cryptocurrency data and create HTML elements for each crypto
        data.forEach(crypto => {
            const cryptoCard = document.createElement('div');
            cryptoCard.className = 'crypto-card';
            cryptoCard.innerHTML = `
                <h2>${crypto.name}</h2>
                <p>Symbol: ${crypto.symbol}</p>
                <p>Price: $${crypto.price}</p>
                <!-- Add more data properties as needed -->
            `;

            // Append the crypto card to the crypto list container
            cryptoListContainer.appendChild(cryptoCard);
        });
    })
    .catch(error => {
        console.error('Error fetching crypto data:', error);
    });