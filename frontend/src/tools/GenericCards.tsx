import React from "react";
import { Card } from "flowbite-react";

interface CardProps {
	title: string;
	description: string;
	value: string;
	bgColor?: string;
	textColor?: string;
}

const GenericCard: React.FC<CardProps> = ({
	title,
	description,
	value,
	bgColor = "white",
	textColor = "black",
}) => {
	return (
		<div className="w-full">
			<Card
				className="w-full hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500 hover:cursor-pointer"
				style={{ backgroundColor: bgColor }}>
				<h5
					className="text-2xl font-bold tracking-tight transition-all duration-300"
					style={{ color: textColor }}>
					{title}
				</h5>
				<p
					className="font-bold text-3xl transition-all duration-300"
					style={{ color: textColor }}>
					{value}
				</p>
				<p
					className="font-normal text-md transition-all duration-300"
					style={{ color: textColor }}>
					{description}
				</p>
			</Card>
		</div>
	);
};

export default GenericCard;
