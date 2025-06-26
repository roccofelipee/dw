// Dados dos investimentos
const investimentos = [
    {
        nome: "Tesouro Selic 2029",
        tipo: "renda-fixa",
        risco: "baixo",
        rentabilidade: 13.65,
        valorMinimo: 100,
        liquidez: "Diária"
    },
    {
        nome: "CDB Banco Inter",
        tipo: "renda-fixa",
        risco: "baixo",
        rentabilidade: 12.8,
        valorMinimo: 500,
        liquidez: "90 dias"
    },
    {
        nome: "LCI Santander",
        tipo: "renda-fixa",
        risco: "baixo",
        rentabilidade: 11.5,
        valorMinimo: 1000,
        liquidez: "180 dias"
    },
    {
        nome: "Ações Petrobras (PETR4)",
        tipo: "renda-variavel",
        risco: "alto",
        rentabilidade: 18.2,
        valorMinimo: 200,
        liquidez: "Diária"
    },
    {
        nome: "Ações Vale (VALE3)",
        tipo: "renda-variavel",
        risco: "alto",
        rentabilidade: 15.7,
        valorMinimo: 150,
        liquidez: "Diária"
    },
    {
        nome: "Ações Itaú (ITUB4)",
        tipo: "renda-variavel",
        risco: "medio",
        rentabilidade: 14.3,
        valorMinimo: 100,
        liquidez: "Diária"
    },
    {
        nome: "Fundo Multimercado XP",
        tipo: "fundos",
        risco: "medio",
        rentabilidade: 16.8,
        valorMinimo: 1000,
        liquidez: "30 dias"
    },
    {
        nome: "Fundo Imobiliário HGLG11",
        tipo: "fundos",
        risco: "medio",
        rentabilidade: 12.4,
        valorMinimo: 300,
        liquidez: "Diária"
    },
    {
        nome: "Fundo de Ações Bradesco",
        tipo: "fundos",
        risco: "alto",
        rentabilidade: 19.5,
        valorMinimo: 500,
        liquidez: "60 dias"
    },
    {
        nome: "Bitcoin (BTC)",
        tipo: "criptomoedas",
        risco: "alto",
        rentabilidade: 45.2,
        valorMinimo: 50,
        liquidez: "Diária"
    },
    {
        nome: "Ethereum (ETH)",
        tipo: "criptomoedas",
        risco: "alto",
        rentabilidade: 38.7,
        valorMinimo: 50,
        liquidez: "Diária"
    },
    {
        nome: "Cardano (ADA)",
        tipo: "criptomoedas",
        risco: "alto",
        rentabilidade: 25.3,
        valorMinimo: 25,
        liquidez: "Diária"
    },
    {
        nome: "Debênture Infraestrutura",
        tipo: "renda-fixa",
        risco: "medio",
        rentabilidade: 14.2,
        valorMinimo: 2000,
        liquidez: "360 dias"
    },
    {
        nome: "CRA Agronegócio",
        tipo: "renda-fixa",
        risco: "medio",
        rentabilidade: 13.1,
        valorMinimo: 1500,
        liquidez: "180 dias"
    },
    {
        nome: "Ações Magazine Luiza (MGLU3)",
        tipo: "renda-variavel",
        risco: "alto",
        rentabilidade: 22.8,
        valorMinimo: 80,
        liquidez: "Diária"
    }
];

// Elementos do DOM
const tipoSelect = document.getElementById('tipo-investimento');
const riscoSelect = document.getElementById('risco');
const rentabilidadeInput = document.getElementById('rentabilidade-min');
const valorInput = document.getElementById('valor-min');
const limparBtn = document.getElementById('limpar-filtros');
const tabelaBody = document.getElementById('tbody-investimentos');
const totalResultados = document.getElementById('total-resultados');
const semResultados = document.getElementById('sem-resultados');
const tabelaContainer = document.querySelector('.tabela-container');

// Função para formatar valor monetário
function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
}

// Função para criar badge de tipo
function criarBadgeTipo(tipo) {
    const badges = {
        'renda-fixa': 'Renda Fixa',
        'renda-variavel': 'Renda Variável',
        'fundos': 'Fundos',
        'criptomoedas': 'Criptomoedas'
    };
    
    return `<span class="badge badge-${tipo}">${badges[tipo]}</span>`;
}

// Função para criar badge de risco
function criarBadgeRisco(risco) {
    const badges = {
        'baixo': 'Baixo',
        'medio': 'Médio',
        'alto': 'Alto'
    };
    
    return `<span class="badge badge-risco-${risco}">${badges[risco]}</span>`;
}

// Função para renderizar a tabela
function renderizarTabela(dados) {
    // Limpar tabela
    tabelaBody.innerHTML = '';
    
    // Atualizar contador
    totalResultados.textContent = dados.length;
    
    // Verificar se há resultados
    if (dados.length === 0) {
        tabelaContainer.style.display = 'none';
        semResultados.style.display = 'block';
        return;
    }
    
    tabelaContainer.style.display = 'block';
    semResultados.style.display = 'none';
    
    // Criar linhas da tabela
    dados.forEach((investimento, index) => {
        const linha = document.createElement('tr');
        linha.style.animationDelay = `${index * 0.1}s`;
        
        linha.innerHTML = `
            <td><strong>${investimento.nome}</strong></td>
            <td>${criarBadgeTipo(investimento.tipo)}</td>
            <td>${criarBadgeRisco(investimento.risco)}</td>
            <td><span class="rentabilidade">${investimento.rentabilidade.toFixed(2)}%</span></td>
            <td><span class="valor-monetario">${formatarMoeda(investimento.valorMinimo)}</span></td>
            <td>${investimento.liquidez}</td>
        `;
        
        tabelaBody.appendChild(linha);
    });
}

// Função para filtrar investimentos
function filtrarInvestimentos() {
    const tipoSelecionado = tipoSelect.value;
    const riscoSelecionado = riscoSelect.value;
    const rentabilidadeMinima = parseFloat(rentabilidadeInput.value) || 0;
    const valorMinimo = parseFloat(valorInput.value) || 0;
    
    const investimentosFiltrados = investimentos.filter(investimento => {
        // Filtro por tipo
        if (tipoSelecionado && investimento.tipo !== tipoSelecionado) {
            return false;
        }
        
        // Filtro por risco
        if (riscoSelecionado && investimento.risco !== riscoSelecionado) {
            return false;
        }
        
        // Filtro por rentabilidade mínima
        if (rentabilidadeMinima > 0 && investimento.rentabilidade < rentabilidadeMinima) {
            return false;
        }
        
        // Filtro por valor mínimo
        if (valorMinimo > 0 && investimento.valorMinimo < valorMinimo) {
            return false;
        }
        
        return true;
    });
    
    renderizarTabela(investimentosFiltrados);
}

// Função para limpar filtros
function limparFiltros() {
    tipoSelect.value = '';
    riscoSelect.value = '';
    rentabilidadeInput.value = '';
    valorInput.value = '';
    
    renderizarTabela(investimentos);
}

// Event listeners
tipoSelect.addEventListener('change', filtrarInvestimentos);
riscoSelect.addEventListener('change', filtrarInvestimentos);
rentabilidadeInput.addEventListener('input', filtrarInvestimentos);
valorInput.addEventListener('input', filtrarInvestimentos);
limparBtn.addEventListener('click', limparFiltros);

// Inicializar a tabela com todos os investimentos
document.addEventListener('DOMContentLoaded', function() {
    renderizarTabela(investimentos);
});

// Adicionar efeito de loading inicial
window.addEventListener('load', function() {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
});

