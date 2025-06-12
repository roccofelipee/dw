// economic-data.js

// Função para buscar dados de câmbio da Awesome API
async function fetchExchangeRates() {
    try {
        const response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro ao buscar taxas de câmbio:", error);
        return null;
    }
}

// Função para buscar dados de feriados nacionais da Brasil API
async function fetchNationalHolidays() {
    try {
        const currentYear = new Date().getFullYear();
        const response = await fetch(`https://brasilapi.com.br/api/feriados/v1/${currentYear}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro ao buscar feriados nacionais:", error);
        return null;
    }
}

// Função para renderizar os dados econômicos na página
async function renderEconomicData() {
    const container = document.getElementById("economic-data-container");
    if (!container) return;

    // Exibir estado de carregamento
    container.innerHTML = `
        <div class="loading-state">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Carregando dados econômicos...</p>
        </div>
    `;

    const exchangeRates = await fetchExchangeRates();
    const nationalHolidays = await fetchNationalHolidays();

    let contentHTML = "";

    if (exchangeRates) {
        contentHTML += `
            <div class="data-card">
                <h3>Cotações de Moedas</h3>
                <p><strong>Dólar Comercial:</strong> R$ ${parseFloat(exchangeRates.USDBRL.bid).toFixed(2)}</p>
                <p><strong>Euro:</strong> R$ ${parseFloat(exchangeRates.EURBRL.bid).toFixed(2)}</p>
                <p><strong>Bitcoin:</strong> R$ ${parseFloat(exchangeRates.BTCBRL.bid).toFixed(2)}</p>
                <span class="data-source">Fonte: Awesome API</span>
            </div>
        `;
    } else {
        contentHTML += `
            <div class="data-card error">
                <h3>Cotações de Moedas</h3>
                <p>Não foi possível carregar os dados de cotação.</p>
            </div>
        `;
    }

    if (nationalHolidays && nationalHolidays.length > 0) {
        contentHTML += `
            <div class="data-card">
                <h3>Próximos Feriados Nacionais ${new Date().getFullYear()}</h3>
                <ul>
        `;
        // Limita a exibição aos próximos 5 feriados
        const today = new Date();
        let count = 0;
        nationalHolidays.forEach(holiday => {
            const holidayDate = new Date(holiday.date + "T00:00:00"); // Adiciona T00:00:00 para evitar problemas de fuso horário
            if (holidayDate >= today && count < 5) {
                contentHTML += `<li>${holiday.name} (${new Date(holiday.date).toLocaleDateString("pt-BR")})</li>`;
                count++;
            }
        });
        if (count === 0) {
            contentHTML += `<li>Nenhum feriado futuro encontrado este ano.</li>`;
        }
        contentHTML += `
                </ul>
                <span class="data-source">Fonte: Brasil API</span>
            </div>
        `;
    } else {
        contentHTML += `
            <div class="data-card error">
                <h3>Feriados Nacionais</h3>
                <p>Não foi possível carregar os dados de feriados.</p>
            </div>
        `;
    }

    container.innerHTML = contentHTML;
}

// Renderiza os dados quando a página é carregada
document.addEventListener("DOMContentLoaded", renderEconomicData);


