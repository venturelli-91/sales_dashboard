import * as XLSX from "xlsx";
import { Button } from "flowbite-react";
import { FaFileExcel } from "react-icons/fa";

interface ExportExcelProps<T> {
	data: T[];
	fileName: string;
	buttonText?: string;
	className?: string;
}

export const RankingExportExcel = <T extends Record<string, string | number>>({
	data,
	fileName,
	buttonText = "Exportar Excel",
	className = "",
}: ExportExcelProps<T>) => {
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
			className={`flex items-center gap-2 ${className}`}>
			<FaFileExcel />
			{buttonText}
		</Button>
	);
};
