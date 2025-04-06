import React from "react";
import GeneralSales from "./GeneralSales";
import AchievementPercentage from "./AchievementPercentage";
import MediumTicket from "./MediumTicket";
import SalesEvolutionChart from "../tools/SalesEvolutionChart";
import TicketChart from "../tools/TicketChart";
import Table from "./RankingTable";

const Dashboard: React.FC = () => {
	return (
		<div className="container mx-auto px-12 relative z-20 mt-[15vh]">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

			<div className="mt-8 mb-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<SalesEvolutionChart />
					<TicketChart />
				</div>
			</div>

			<div className="mt-8">
				<h3 className="text-xl font-bold mb-4 text-purple-900">
					Ranking de Vendedores
				</h3>
				<Table />
			</div>
		</div>
	);
};

export default Dashboard;
