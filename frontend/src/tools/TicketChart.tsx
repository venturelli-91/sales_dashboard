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

const ticketData = [
	{ year: "2020", ticket: 89.3 },
	{ year: "2021", ticket: 92.5 },
	{ year: "2022", ticket: 97.8 },
	{ year: "2023", ticket: 101.2 },
	{ year: "2024", ticket: 105.6 },
	{ year: "2025", ticket: 112.4 },
];

const currencyFormatter = (value: number) =>
	`R$ ${value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`;

const TicketChart: React.FC = () => {
	return (
		<div className="bg-white p-4 rounded-lg shadow-md">
			<h3 className="text-lg font-bold mb-4 text-purple-900">
				Ticket Médio por Ano
			</h3>
			<ResponsiveContainer
				width="100%"
				height={300}>
				<BarChart
					data={ticketData}
					margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="year" />
					<YAxis tickFormatter={(value) => `R$ ${value}`} />
					<Tooltip formatter={(value) => currencyFormatter(Number(value))} />
					<Legend />
					<Bar
						dataKey="ticket"
						name="Ticket Médio"
						fill="#FA8072"
						radius={[4, 4, 0, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default TicketChart;
