import * as XLSX from "xlsx";
import { Button } from "flowbite-react";
import { FaFileExcel } from "react-icons/fa";

interface Venda {
	data: string;
	valor: number;
	produto: string;
}

interface ExportExcelProps {
	data: Venda[];
	fileName: string;
}

export const ExportExcel = ({ data, fileName }: ExportExcelProps) => {
	const exportToExcel = () => {
		const ws = XLSX.utils.json_to_sheet(data);
		const wb = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, "Dados");
		XLSX.writeFile(wb, `${fileName}.xlsx`);
	};

	return (
		<Button
			color="success"
			onClick={exportToExcel}
			className="flex items-center gap-2 rounded-4xl bg-amber-700 text-white font-extrabold cursor-pointer">
			<FaFileExcel className="text-white" />
			Exportar .xlsx
		</Button>
	);
};
