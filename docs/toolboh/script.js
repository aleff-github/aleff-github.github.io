async function fetchPublicIp() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = 'Caricamento...';

    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        resultElement.innerHTML = `
            <div><strong>${data.ip}</strong></div>
        `;
    } catch (error) {
        resultElement.textContent = 'Errore durante la richiesta.';
    }
}
