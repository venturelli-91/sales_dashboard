import React from "react";
import GeneralSales from "./GeneralSales";
import AchievementPercentage from "./AchievementPercentage";
import MediumTicket from "./MediumTicket";
import SalesEvolutionChart from "../tools/SalesEvolutionChart";
import TicketChart from "../tools/TicketChart";
import Table from "./RankingTable";
import { RankingExportExcel } from "../tools/RankingExportExcel";
import { ChartsExportExcel } from "../tools/ChartsExportExcel";
import { useTableStore } from "../stores/tableStore";

const Dashboard: React.FC = () => {
	const { data } = useTableStore();

	return (
		<div className="container mx-auto px-4 md:px-12">
			<div className="relative z-30 mt-10 sm:mt-0 md:-mt-20 lg:-mt-30">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
					<div className="w-full">
						<GeneralSales />
					</div>
					<div className="w-full">
						<AchievementPercentage />
					</div>
					<div className="w-full">
						<MediumTicket />
					</div>
				</div>
			</div>

			<div className="mt-8 mb-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<SalesEvolutionChart />
					<TicketChart />
				</div>
			</div>

			<div className="mt-8 mb-8 flex justify-end gap-4">
				<ChartsExportExcel />
			</div>

			<div className="mt-8 mb-12">
				<h3 className="text-xl font-bold mb-4 text-purple-900">
					Ranking de Vendedores
				</h3>
				<Table />
			</div>

			<div className="mt-8 mb-8 flex justify-end">
				<RankingExportExcel
					data={data}
					fileName="ranking_vendedores"
					buttonText="Exportar Ranking"
					className="rounded-4xl bg-amber-700 text-white font-extrabold cursor-pointer"
				/>
			</div>
		</div>
	);
};

export default Dashboard;
