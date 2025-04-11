import * as XLSX from "xlsx";
import { Button } from "flowbite-react";
import { FaFileExcel } from "react-icons/fa";

const salesData = [
	{ year: "2020", vendas: 85000 },
	{ year: "2021", vendas: 93500 },
	{ year: "2022", vendas: 88700 },
	{ year: "2023", vendas: 97200 },
	{ year: "2024", vendas: 101500 },
	{ year: "2025", vendas: 107080 },
];

const ticketData = [
	{ year: "2020", ticket: 89.3 },
	{ year: "2021", ticket: 92.5 },
	{ year: "2022", ticket: 97.8 },
	{ year: "2023", ticket: 101.2 },
	{ year: "2024", ticket: 105.6 },
	{ year: "2025", ticket: 112.4 },
];

export const ChartsExportExcel = () => {
	const exportToExcel = () => {
		const wb = XLSX.utils.book_new();

		const wsVendas = XLSX.utils.json_to_sheet(salesData);
		XLSX.utils.book_append_sheet(wb, wsVendas, "Evolução de Vendas");

		const wsTicket = XLSX.utils.json_to_sheet(ticketData);
		XLSX.utils.book_append_sheet(wb, wsTicket, "Ticket Médio");

		XLSX.writeFile(wb, "dados_graficos.xlsx");
	};

	return (
		<Button
			color="success"
			onClick={exportToExcel}
			className="flex items-center gap-2 rounded-4xl bg-amber-700 text-white font-extrabold cursor-pointer">
			<FaFileExcel />
			Exportar Dados dos Gráficos
		</Button>
	);
};
