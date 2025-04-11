# Sales Management Dashboard

Um dashboard moderno e interativo para gerenciamento de vendas, desenvolvido com Next.js, React e TypeScript.

![Dashboard Preview](preview.png)

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

- **Frontend**
  - Next.js 15
  - React 19
  - TypeScript
  - Tailwind CSS
  - Flowbite React
  - Recharts
  - XLSX

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

- [ ] Adicionar autenticação
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

[Seu Nome] - [Seu Email]

---

Desenvolvido com ❤️ para facilitar a gestão de vendas
