import React from "react";
import GenericCard from "../tools/GenericCards";
import { IoTriangle } from "react-icons/io5";

const GeneralSales: React.FC = () => {
	return (
		<>
			<div className="flex items-center justify-between">
				<GenericCard
					title="Visão Geral de Vendas"
					description="Visão Geral de Vendas"
					bgColor="#4ade80"
					textColor="white"
					value="R$ 100.000,00"
				/>
				<IoTriangle className="text-white" />
			</div>
		</>
	);
};

export default GeneralSales;
