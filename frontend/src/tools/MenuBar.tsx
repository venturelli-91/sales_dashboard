import React from "react";
import { Select } from "flowbite-react";

const MenuBar: React.FC = () => {
	return (
		<div
			className="fixed top-0 left-0 right-0 z-10 py-4"
			style={{
				backgroundColor: "rgb(76, 29, 149)",
				height: "40vh",
			}}>
			<div className="container mx-auto px-4">
				<div className="w-full flex flex-col md:flex-row justify-between items-center mb-6">
					<div>
						<span
							style={{
								color: "white",
								padding: "10px",
								fontSize: "1.5rem",
								fontWeight: "bold",
								marginTop: "30px",
							}}>
							Sales Management | Visão Geral de Vendas - Abril/2025
						</span>
					</div>

					<div className="flex space-x-4 mt-4 md:mt-0">
						<div className="flex flex-col">
							<label
								htmlFor="year"
								className="text-white mb-1 text-sm">
								Ano
							</label>
							<Select
								id="year"
								className="w-32"
								style={{ backgroundColor: "white", color: "rgb(76, 29, 149)" }}>
								<option value="2025">2025</option>
								<option value="2024">2024</option>
								<option value="2023">2023</option>
								<option value="2022">2022</option>
							</Select>
						</div>
						<div className="flex flex-col">
							<label
								htmlFor="month"
								className="text-white mb-1 text-sm">
								Mês
							</label>
							<Select
								id="month"
								className="w-32"
								style={{ backgroundColor: "white", color: "rgb(76, 29, 149)" }}>
								<option value="4">Abril</option>
								<option value="3">Março</option>
								<option value="2">Fevereiro</option>
								<option value="1">Janeiro</option>
								<option value="12">Dezembro</option>
								<option value="11">Novembro</option>
								<option value="10">Outubro</option>
								<option value="9">Setembro</option>
								<option value="8">Agosto</option>
								<option value="7">Julho</option>
								<option value="6">Junho</option>
								<option value="5">Maio</option>
							</Select>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MenuBar;
