import React from "react";
import GenericCard from "../tools/GenericCards";

const MediumTicket: React.FC = () => {
	return (
		<>
			<GenericCard
				title="Ticket médio"
				description="+8% em relação ao mês anterior"
				bgColor="#f97316"
				textColor="white"
				value="R$ 112,40"
				trend="up"
			/>
		</>
	);
};

export default MediumTicket;
