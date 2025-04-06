import React from "react";
import GenericCard from "../tools/GenericCards";

const GeneralSales: React.FC = () => {
	return (
		<>
			<GenericCard
				title="Visão Geral de Vendas"
				description="+15% em relação ao mês anterior"
				bgColor="#4ade80"
				textColor="white"
				value="R$ 107.080,00"
				trend="up"
			/>
		</>
	);
};

export default GeneralSales;
