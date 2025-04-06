import React from "react";
import { Select } from "flowbite-react";
import { FaFilter, FaUser } from "react-icons/fa";

const MenuBar: React.FC = () => {
	return (
		<div
			className="absolute top-0 left-0 right-0 z-10 py-4"
			style={{
				backgroundColor: "rgb(76, 29, 149)",
				height: "30vh",
			}}>
			<div className="container mx-auto px-4 h-full flex flex-col">
				<div className="flex justify-between items-center mt-4">
					<div className="flex-1">
						<span
							className="text-white font-bold"
							style={{
								fontSize: "clamp(1rem, 5vw, 1.5rem)",
								lineHeight: "1.2",
								display: "block",
							}}>
							Sales Management <br />
							<span className="hidden md:inline">Visão Geral de Vendas - </span>
							<span>Abril/2025</span>
						</span>
					</div>

					<div className="flex-1 flex justify-center items-end space-x-4">
						<div className="flex flex-col">
							<label
								htmlFor="year"
								className="text-white mb-1 text-sm">
								Ano
							</label>
							<Select
								id="year"
								className="w-32"
								style={{
									backgroundColor: "white",
									color: "rgb(76, 29, 149)",
								}}>
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
								style={{
									backgroundColor: "white",
									color: "rgb(76, 29, 149)",
								}}>
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
						<button className="bg-white p-2 rounded-full text-purple-900 hover:bg-gray-100 h-10 self-end">
							<FaFilter size={20} />
						</button>
					</div>

					<div className="flex-1 flex justify-end space-x-4">
						<button className="bg-white p-2 rounded-full text-purple-900 hover:bg-gray-100">
							<FaUser size={20} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MenuBar;
