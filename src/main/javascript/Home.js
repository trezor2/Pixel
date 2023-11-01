// Fetch crypto data from an API
fetch('https://api.example.com/crypto-prices')
    .then(response => response.json())
    .then(data => {
        // Update the DOM with crypto price data
        const cryptoList = document.querySelector('.crypto-list');
        cryptoList.innerHTML = ''; // Clear previous data
        data.forEach(crypto => {
            const cryptoCard = document.createElement('div');
            cryptoCard.className = 'crypto-card';
            cryptoCard.innerHTML = `
                <h2>${crypto.name}</h2>
                <p>Price: $${crypto.price}</p>
                <!-- Add more data as needed -->
            `;
            cryptoList.appendChild(cryptoCard);
        });
    })
    .catch(error => {
        console.error('Error fetching crypto data:', error);
    });
