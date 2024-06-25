document.getElementById('messageForm').addEventListener('submit', sendMessage);

function sendMessage(e) {
    e.preventDefault();

    const message = document.getElementById('messageInput').value;
    const telegramToken = '6850207415:AAHf8nMq0P85pHJaNETNBoAi4n0ZtJ81Z3M';
    const chatId = '1073410367';

    if (message) {
        const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;
        const data = {
            chat_id: chatId,
            text: message
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('Message sent successfully!');
                document.getElementById('messageForm').reset();
            } else {
                alert('Error sending message: ' + data.description);
            }
        })
        .catch(error => {
            console.error('Error sending message: ', error);
        });
    } else {
        alert('Please enter a message.');
    }
}