import React from "react";
import { PieChart } from "recharts";

const PieGraphics: React.FC = () => {
	return (
		<PieChart
			width={400}
			height={400}
			data={[
				{ name: "Categoria", value: 30000 },
				{ name: "Metas", value: 50000 },
				{ name: "Atingido", value: 15000 },
			]}
		/>
	);
};

export default PieGraphics;
