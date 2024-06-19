---
layout: default
title: Chi Sono
permalink: /docs/toolboh/chi-sono
parent: Toolboh
---

# Verifica Indirizzo IP Pubblico

<button onclick="fetchPublicIp()">Verifica IP</button>

Il tuo indirizzo IP pubblico è: <div id="result"></div>

Based on [ipify](https://api.ipify.org) | A Simple Public IP Address API.

<script>
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('fetchButton').addEventListener('click', fetchPublicIp);
    
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
});
</script>