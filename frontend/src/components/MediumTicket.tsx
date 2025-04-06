import React from "react";
import GenericCard from "../tools/GenericCards";

const MediumTicket: React.FC = () => {
	return (
		<>
			<GenericCard
				title="Ticket Médio"
				description="Ticket Médio"
				bgColor="#f97316"
				textColor="white"
				value="R$ 100,00"
			/>
		</>
	);
};

export default MediumTicket;
