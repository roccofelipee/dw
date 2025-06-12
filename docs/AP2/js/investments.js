// investments.js

// Dados de exemplo para tipos de investimentos (simulando uma API)
const investmentTypes = [
    {
        name: "Renda Fixa",
        description: "Investimentos com regras de rentabilidade definidas no momento da aplicação, como CDBs, Tesouro Direto e LCIs/LCAs.",
        icon: "fas fa-money-bill-wave"
    },
    {
        name: "Renda Variável",
        description: "Investimentos cuja rentabilidade não é previsível, variando conforme o mercado, como Ações, Fundos Imobiliários e Criptomoedas.",
        icon: "fas fa-chart-line"
    },
    {
        name: "Fundos de Investimento",
        description: "Aplicação coletiva onde o dinheiro de vários investidores é reunido e aplicado em diversos ativos por um gestor profissional.",
        icon: "fas fa-hand-holding-usd"
    },
    {
        name: "Previdência Privada",
        description: "Investimento de longo prazo focado em acumular recursos para a aposentadoria, com benefícios fiscais em alguns casos.",
        icon: "fas fa-umbrella-beach"
    },
    {
        name: "Criptomoedas",
        description: "Moedas digitais descentralizadas que utilizam criptografia para segurança, como Bitcoin e Ethereum.",
        icon: "fab fa-bitcoin"
    },
    {
        name: "Imóveis",
        description: "Investimento em propriedades físicas, seja para aluguel, venda ou valorização a longo prazo.",
        icon: "fas fa-home"
    }
];

// Função para renderizar os tipos de investimentos
function renderInvestmentTypes() {
    const container = document.getElementById("investment-types-container");
    if (!container) return;

    let contentHTML = "";
    investmentTypes.forEach(type => {
        contentHTML += `
            <div class="investment-type-card">
                <i class="${type.icon}"></i>
                <h3>${type.name}</h3>
                <p>${type.description}</p>
            </div>
        `;
    });
    container.innerHTML = contentHTML;
}

// ===== SIMULAÇÃO DE RENTABILIDADE COM GRÁFICO =====
const simulationForm = document.getElementById("simulation-form");
const initialAmountInput = document.getElementById("initial-amount");
const monthlyContributionSimInput = document.getElementById("monthly-contribution-sim");
const investmentPeriodInput = document.getElementById("investment-period");
const rentabilityChartCanvas = document.getElementById("rentabilityChart");
let rentabilityChartInstance = null; // Para armazenar a instância do Chart.js

// Função para calcular a rentabilidade simulada
function calculateRentability(initialAmount, monthlyContribution, periodInYears, annualRate) {
    let futureValue = initialAmount;
    let monthlyRate = annualRate / 12;
    let totalMonths = periodInYears * 12;
    let values = [initialAmount];

    for (let i = 1; i <= totalMonths; i++) {
        futureValue = (futureValue + monthlyContribution) * (1 + monthlyRate);
        if (i % 12 === 0) { // Armazena o valor ao final de cada ano
            values.push(futureValue);
        }
    }
    return values;
}

// Função para renderizar o gráfico de rentabilidade
function renderRentabilityChart(initialAmount, monthlyContribution, periodInYears) {
    const ctx = rentabilityChartCanvas.getContext("2d");

    // Taxas de rentabilidade anuais de exemplo (pode ser expandido com dados reais de API)
    const rates = {
        "Poupança (Exemplo)": 0.06, // 6% ao ano
        "Renda Fixa (Moderado)": 0.09, // 9% ao ano
        "Renda Variável (Arrojado)": 0.15 // 15% ao ano
    };

    const labels = Array.from({ length: periodInYears + 1 }, (_, i) => `Ano ${i}`);
    const datasets = [];

    for (const [type, rate] of Object.entries(rates)) {
        const data = calculateRentability(initialAmount, monthlyContribution, periodInYears, rate);
        datasets.push({
            label: type,
            data: data,
            borderColor: getRandomColor(), // Função para gerar cores aleatórias
            backgroundColor: "transparent",
            fill: false,
            tension: 0.4
        });
    }

    // Destruir a instância anterior do gráfico se existir
    if (rentabilityChartInstance) {
        rentabilityChartInstance.destroy();
    }

    rentabilityChartInstance = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: "top",
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || "";
                            if (label) {
                                label += ": ";
                            }
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(context.parsed.y);
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value, index, values) {
                            return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
                        }
                    }
                }
            }
        }
    });
}

// Função auxiliar para gerar cores aleatórias para os gráficos
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Event Listener para o formulário de simulação
if (simulationForm) {
    simulationForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const initialAmount = parseFloat(initialAmountInput.value);
        const monthlyContribution = parseFloat(monthlyContributionSimInput.value) || 0;
        const investmentPeriod = parseInt(investmentPeriodInput.value);

        if (isNaN(initialAmount) || initialAmount < 100) {
            alert("Por favor, insira um valor inicial válido (mínimo R$ 100).");
            return;
        }
        if (isNaN(investmentPeriod) || investmentPeriod < 1 || investmentPeriod > 30) {
            alert("Por favor, insira um período de investimento válido (entre 1 e 30 anos).");
            return;
        }

        renderRentabilityChart(initialAmount, monthlyContribution, investmentPeriod);
    });
}

// Inicializa a página
document.addEventListener("DOMContentLoaded", () => {
    renderInvestmentTypes();
    // Renderiza o gráfico inicial com valores padrão
    renderRentabilityChart(
        parseFloat(initialAmountInput.value),
        parseFloat(monthlyContributionSimInput.value) || 0,
        parseInt(investmentPeriodInput.value)
    );
});


