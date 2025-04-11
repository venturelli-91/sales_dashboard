# Sales Management Dashboard

Um dashboard moderno e interativo para gerenciamento de vendas, desenvolvido com Next.js, React e TypeScript.

## 📸 Preview

<div align="center">
  <img src="https://github.com/venturelli-91/sales_dashboard/raw/main/frontend/public/images/Dashboard%201.png" alt="Dashboard Preview 1" width="45%" />
  <img src="https://github.com/venturelli-91/sales_dashboard/raw/main/frontend/public/images/Dashboard%202.png" alt="Dashboard Preview 2" width="45%" />
  <img src="https://github.com/venturelli-91/sales_dashboard/raw/main/frontend/public/images/Dashboard%203.png" alt="Dashboard Preview 3" width="45%" />
  <img src="https://github.com/venturelli-91/sales_dashboard/raw/main/frontend/public/images/Dashboard%204.png" alt="Dashboard Preview 4" width="45%" />
</div>

## 🚀 Funcionalidades

- **Visão Geral de Vendas**

  - Cards informativos com métricas principais
  - Indicadores de tendência (alta/baixa)
  - Valores monetários formatados em R$

- **Gráficos Interativos**

  - Evolução de vendas por ano
  - Ticket médio histórico
  - Visualizações responsivas

- **Ranking de Vendedores**

  - Tabela ordenada por faturamento
  - Indicadores de meta percentual
  - Status visual por desempenho

- **Exportação de Dados**
  - Exportação para Excel dos dados dos gráficos
  - Exportação do ranking de vendedores
  - Múltiplas abas no arquivo Excel

## 🛠️ Tecnologias Utilizadas

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Flowbite-764ABC?style=for-the-badge&logo=flowbite&logoColor=white" alt="Flowbite" />
  <img src="https://img.shields.io/badge/Recharts-FF6384?style=for-the-badge&logo=recharts&logoColor=white" alt="Recharts" />
  <img src="https://img.shields.io/badge/XLSX-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white" alt="XLSX" />
  <img src="https://img.shields.io/badge/Zustand-764ABC?style=for-the-badge&logo=zustand&logoColor=white" alt="Zustand" />
</div>

## 📦 Instalação

1. Clone o repositório:

```bash
git clone [url-do-repositorio]
```

2. Instale as dependências:

```bash
cd frontend
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Acesse o projeto em:

```
http://localhost:3000
```

## 🎨 Estrutura do Projeto

```
frontend/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── tools/         # Utilitários e componentes específicos
│   ├── stores/        # Gerenciamento de estado
│   └── pages/         # Páginas da aplicação
├── public/            # Arquivos estáticos
└── package.json       # Dependências e scripts
```

## 🔧 Principais Componentes

- **Dashboard**: Página principal com todos os componentes
- **GeneralSales**: Card de visão geral de vendas
- **AchievementPercentage**: Card de alcance de meta
- **MediumTicket**: Card de ticket médio
- **SalesEvolutionChart**: Gráfico de evolução de vendas
- **TicketChart**: Gráfico de ticket médio
- **RankingTable**: Tabela de ranking de vendedores
- **ExportExcel**: Componentes de exportação para Excel

## 📊 Dados e Estado

O projeto utiliza Zustand para gerenciamento de estado, com foco em:

- Dados de vendedores
- Formatação de valores monetários
- Cálculo de indicadores de desempenho

## 🎯 Próximos Passos

- [ ] Implementar filtros por período
- [ ] Adicionar mais visualizações de dados
- [ ] Melhorar responsividade
- [ ] Adicionar testes automatizados

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Abrir issues
2. Sugerir melhorias
3. Enviar pull requests

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Aurélio Venturelli
