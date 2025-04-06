import React from "react";
import GeneralSales from "./GeneralSales";
import AchievementPercentage from "./AchievementPercentage";
import MediumTicket from "./MediumTicket";

const Dashboard: React.FC = () => {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-6">Dashboard de Vendas</h1>

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

			{/* Espaço para futuros componentes */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{/* Adicione mais cards aqui no futuro */}
			</div>
		</div>
	);
};

export default Dashboard;
