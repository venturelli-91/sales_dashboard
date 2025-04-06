import React from "react";
import GeneralSales from "./GeneralSales";
import AchievementPercentage from "./AchievementPercentage";
import MediumTicket from "./MediumTicket";
import SalesEvolutionChart from "../tools/SalesEvolutionChart";
import TicketChart from "../tools/TicketChart";

const Dashboard: React.FC = () => {
	return (
		<div className="container mx-auto px-4 relative z-20 mt-[20vh]">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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

			<div className="mt-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<SalesEvolutionChart />
					<TicketChart />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
