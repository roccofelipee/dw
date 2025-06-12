// main.js

// ===== NAVEGAÇÃO DO HEADER =====
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        navToggle.classList.toggle("active");
    });

    // Fechar o menu ao clicar em um link (apenas para mobile)
    navMenu.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) { // Considerando 768px como breakpoint mobile
                navMenu.classList.remove("active");
                navToggle.classList.remove("active");
            }
        });
    });
}

// ===== FUNCIONALIDADE DOS SLIDES =====
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const totalSlides = slides.length;
const progressFill = document.getElementById("progress-fill");
const currentSlideSpan = document.getElementById("current-slide");
const totalSlidesSpan = document.getElementById("total-slides");

// Atualiza o contador total de slides
if (totalSlidesSpan) {
    totalSlidesSpan.textContent = totalSlides;
}

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add("active");
            // Adiciona animação baseada na direção
            if (index > currentSlide) {
                slide.style.animation = "slideInRight 0.5s forwards";
            } else {
                slide.style.animation = "slideInLeft 0.5s forwards";
            }
        } else {
            slide.classList.remove("active");
            slide.style.animation = "none"; // Remove animação para slides inativos
        }
    });
    currentSlide = index;
    updateProgress();
}

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        // Validação específica para o slide do formulário (Slide 5)
        if (currentSlide === 4) { // Índice 4 corresponde ao Slide 5 (valor inicial)
            if (!validateInvestmentForm()) {
                return; // Impede o avanço se a validação falhar
            }
        }
        showSlide(currentSlide + 1);
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        showSlide(currentSlide - 1);
    }
}

function updateProgress() {
    const progress = ((currentSlide + 1) / totalSlides) * 100;
    if (progressFill) {
        progressFill.style.width = `${progress}%`;
    }
    if (currentSlideSpan) {
        currentSlideSpan.textContent = currentSlide + 1;
    }
}

// Inicializa o primeiro slide
showSlide(0);

// ===== VALIDAÇÃO DO FORMULÁRIO DE INVESTIMENTO (SLIDE 5) =====
const investmentForm = document.getElementById("investment-form");
const valorInicialInput = document.getElementById("valor-inicial");
const valorInicialError = document.getElementById("valor-inicial-error");

function validateInvestmentForm() {
    let isValid = true;

    // Validação do Valor Inicial
    if (valorInicialInput) {
        if (valorInicialInput.value.trim() === "") {
            displayError(valorInicialInput, valorInicialError, "O valor inicial é obrigatório.");
            isValid = false;
        } else if (parseFloat(valorInicialInput.value) < 100) {
            displayError(valorInicialInput, valorInicialError, "O valor inicial mínimo é R$ 100.");
            isValid = false;
        } else {
            removeError(valorInicialInput, valorInicialError);
        }
    }

    return isValid;
}

function displayError(inputElement, errorElement, message) {
    if (errorElement) {
        errorElement.textContent = message;
        inputElement.classList.add("invalid");
    }
}

function removeError(inputElement, errorElement) {
    if (errorElement) {
        errorElement.textContent = "";
        inputElement.classList.remove("invalid");
    }
}

// Adiciona validação em tempo real para o campo de valor inicial
if (valorInicialInput) {
    valorInicialInput.addEventListener("input", () => {
        validateInvestmentForm();
    });
}

// ===== GERAÇÃO DO RELATÓRIO (SLIDE 6) =====
function generateReport() {
    if (!validateInvestmentForm()) {
        return; // Não gera relatório se o formulário for inválido
    }

    const objetivo = document.querySelector("input[name=\"objetivo\"]:checked");
    const prazo = document.querySelector("input[name=\"prazo\"]:checked");
    const risco = document.querySelector("input[name=\"risco\"]:checked");
    const valorInicial = parseFloat(valorInicialInput.value);
    const aporteMensal = parseFloat(document.getElementById("aporte-mensal").value) || 0;

    const reportContainer = document.getElementById("report-container");
    if (!reportContainer) return;

    let reportHTML = `
        <div class="report-section">
            <h3>Seu Perfil de Investidor</h3>
            <p><strong>Objetivo:</strong> ${objetivo ? objetivo.value : "Não informado"}</p>
            <p><strong>Prazo:</strong> ${prazo ? prazo.value : "Não informado"}</p>
            <p><strong>Tolerância ao Risco:</strong> ${risco ? risco.value : "Não informado"}</p>
            <p><strong>Valor Inicial:</strong> R$ ${valorInicial.toLocaleString("pt-BR")}</p>
            <p><strong>Aporte Mensal:</strong> R$ ${aporteMensal.toLocaleString("pt-BR")}</p>
        </div>
        <div class="report-section">
            <h3>Recomendações de Investimento</h3>
            <div class="investment-recommendation">
    `;

    // Lógica de recomendação simplificada (pode ser expandida com base nas APIs)
    let recommendations = [];

    if (risco && risco.value === "conservador") {
        recommendations.push({ type: "Renda Fixa (CDB, Tesouro Direto)", percentage: "70%", description: "Segurança e previsibilidade." });
        recommendations.push({ type: "Fundos DI", percentage: "30%", description: "Baixo risco e liquidez diária." });
    } else if (risco && risco.value === "moderado") {
        recommendations.push({ type: "Renda Fixa (CDB, LCI/LCA)", percentage: "40%", description: "Equilíbrio entre segurança e rentabilidade." });
        recommendations.push({ type: "Fundos Multimercado", percentage: "30%", description: "Diversificação e potencial de retorno." });
        recommendations.push({ type: "Ações (Dividendos)", percentage: "30%", description: "Empresas sólidas com histórico de pagamentos." });
    } else if (risco && risco.value === "arrojado") {
        recommendations.push({ type: "Ações (Crescimento)", percentage: "50%", description: "Empresas com alto potencial de valorização." });
        recommendations.push({ type: "Fundos de Ações/ETFs", percentage: "30%", description: "Diversificação em mercados de risco." });
        recommendations.push({ type: "Criptomoedas", percentage: "20%", description: "Alto risco e alto potencial de retorno." });
    } else {
        recommendations.push({ type: "Nenhuma recomendação disponível", percentage: "--", description: "Por favor, preencha todas as informações." });
    }

    recommendations.forEach(rec => {
        reportHTML += `
            <div class="investment-item">
                <h4>${rec.type}</h4>
                <p class="investment-percentage">${rec.percentage}</p>
                <p>${rec.description}</p>
            </div>
        `;
    });

    reportHTML += `
            </div>
        </div>
        <div class="report-section">
            <h3>Gráfico de Projeção (Exemplo)</h3>
            <canvas id="projectionChart"></canvas>
            <p class="footer-text">*Este gráfico é uma simulação simplificada e não representa retornos reais de investimento.</p>
        </div>
    `;

    reportContainer.innerHTML = reportHTML;
    showSlide(totalSlides - 1); // Mostra o último slide (relatório)

    // Renderiza o gráfico (exemplo com Chart.js)
    renderProjectionChart(valorInicial, aporteMensal);
}

function renderProjectionChart(initialValue, monthlyContribution) {
    const ctx = document.getElementById("projectionChart");
    if (!ctx) return;
    
    // Dados de exemplo para o gráfico
    const labels = ["Ano 1", "Ano 2", "Ano 3", "Ano 4", "Ano 5"];
    let data = [];
    let currentValue = initialValue;
    const annualInterestRate = 0.08; // Exemplo: 8% ao ano

    for (let i = 0; i < 5; i++) {
        // Adiciona aportes mensais
        currentValue += monthlyContribution * 12;
        // Aplica juros anuais
        currentValue *= (1 + annualInterestRate);
        data.push(currentValue);
    }

    // Verifica se Chart.js está disponível
    if (typeof Chart !== 'undefined') {
        new Chart(ctx, {
            type: "line",
            data: {
                labels: labels,
                datasets: [{
                    label: "Valor Projetado (R$)",
                    data: data,
                    borderColor: "#2563eb",
                    backgroundColor: "rgba(37, 99, 235, 0.2)",
                    fill: true,
                    tension: 0.4
                }]
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
    } else {
        ctx.getContext('2d').fillText('Chart.js não carregado', 10, 50);
    }
}

// ===== REINICIAR QUESTIONÁRIO =====
function restartQuiz() {
    // Resetar campos do formulário
    if (investmentForm) {
        investmentForm.reset();
    }
    // Desmarcar radios
    document.querySelectorAll("input[type=\"radio\"]").forEach(radio => radio.checked = false);
    // Limpar mensagens de erro
    if (valorInicialInput && valorInicialError) {
        removeError(valorInicialInput, valorInicialError);
    }
    // Voltar para o primeiro slide
    showSlide(0);
}

// ===== CARREGAR BIBLIOTECA CHART.JS DINAMICAMENTE =====
// Isso é importante para que o Chart.js só seja carregado quando necessário (no slide do relatório)
function loadChartJs() {
    if (typeof Chart === "undefined") { // Verifica se Chart.js já foi carregado
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/chart.js";
        script.onload = () => {
            console.log("Chart.js carregado com sucesso!");
        };
        document.head.appendChild(script);
    }
}

// Carrega Chart.js quando o slide do relatório é exibido pela primeira vez
// Ou você pode carregar no início se preferir, mas dinamicamente é mais otimizado
// Por enquanto, vamos carregar no início para simplificar o exemplo
loadChartJs();


