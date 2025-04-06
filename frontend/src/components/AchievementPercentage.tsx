import React from "react";
import GenericCard from "../tools/GenericCards";

const AchievementPercentage: React.FC = () => {
	return (
		<>
			<GenericCard
				title="Alcance de meta"
				description="-5% em relação ao mês anterior"
				bgColor="#000080"
				textColor="white"
				value="82,5%"
				trend="down"
			/>
		</>
	);
};

export default AchievementPercentage;
