import React from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const salesData = [
	{ year: "2020", vendas: 85000 },
	{ year: "2021", vendas: 93500 },
	{ year: "2022", vendas: 88700 },
	{ year: "2023", vendas: 97200 },
	{ year: "2024", vendas: 101500 },
	{ year: "2025", vendas: 107080 },
];

const currencyFormatter = (value: number) =>
	`R$ ${value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`;

const SalesEvolutionChart: React.FC = () => {
	return (
		<div className="bg-white p-4 rounded-lg shadow-md">
			<h3 className="text-lg font-bold mb-4 text-gray-800">
				Evolução de Vendas por Ano
			</h3>
			<ResponsiveContainer
				width="100%"
				height={300}>
				<BarChart
					data={salesData}
					margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="year" />
					<YAxis tickFormatter={(value) => `R$ ${value / 1000}k`} />
					<Tooltip formatter={(value) => currencyFormatter(Number(value))} />
					<Legend />
					<Bar
						dataKey="vendas"
						name="Vendas"
						fill="#4ade80"
						radius={[4, 4, 0, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default SalesEvolutionChart;
