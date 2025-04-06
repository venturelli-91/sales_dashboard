import React from "react";
import {
	Table as FlowbiteTable,
	Badge,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
} from "flowbite-react";
import { useTableStore } from "../stores/tableStore";

const Table: React.FC = () => {
	const { data, formatCurrency, getMetaStatusType } = useTableStore();

	const renderMetaStatus = (percentual: number) => {
		const statusType = getMetaStatusType(percentual);

		return (
			<Badge
				color={statusType}
				className="px-3 py-1">
				{percentual}%
			</Badge>
		);
	};

	return (
		<div className="overflow-x-auto shadow-md rounded-lg">
			<FlowbiteTable hoverable>
				<TableHead className="bg-purple-900 text-white">
					<tr className="bg-[rgb(76,29,149)]">
						<th className="px-6 py-3 text-sm font-medium text-white uppercase tracking-wider">
							Ranking
						</th>
						<th className="px-6 py-3 text-sm font-medium text-white uppercase tracking-wider">
							Vendedor
						</th>
						<th className="px-6 py-3 text-sm font-medium text-white uppercase tracking-wider">
							Faturamento
						</th>
						<th className="px-6 py-3 text-sm font-medium text-white uppercase tracking-wider">
							Qtd
						</th>
						<th className="px-6 py-3 text-sm font-medium text-white uppercase tracking-wider">
							Ticket Médio
						</th>
						<th className="px-6 py-3 text-sm font-medium text-white uppercase tracking-wider">
							Meta (%)
						</th>
					</tr>
				</TableHead>

				<TableBody className="divide-y">
					{data.map((row, index) => (
						<TableRow
							key={row.id}
							className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
							<TableCell className="px-6 py-4 font-medium">
								{index + 1}
							</TableCell>
							<TableCell className="px-6 py-4">{row.vendedor}</TableCell>
							<TableCell className="px-6 py-4">
								{formatCurrency(row.faturamento)}
							</TableCell>
							<TableCell className="px-6 py-4">{row.quantidade}</TableCell>
							<TableCell className="px-6 py-4">
								{formatCurrency(row.ticketMedio)}
							</TableCell>
							<TableCell className="px-6 py-4">
								{renderMetaStatus(row.metaPercentual)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</FlowbiteTable>
		</div>
	);
};

export default Table;
