import React from "react";
import { Select } from "flowbite-react";
import { FaFilter, FaUser } from "react-icons/fa";

const MenuBar: React.FC = () => {
	return (
		<div className="relative">
			<div
				className="absolute top-0 left-0 right-0 z-10 py-4"
				style={{
					backgroundColor: "rgb(76, 29, 149)",
					height: "clamp(250px, 30vh, 300px)",
					minHeight: "250px",
				}}>
				<div className="container mx-auto px-4 h-full">
					<div className="flex flex-col md:flex-row items-center justify-between mt-4 gap-4">
						<div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
							<span
								className="text-white font-bold"
								style={{
									fontSize: "clamp(1rem, 5vw, 1.5rem)",
									lineHeight: "1.2",
									display: "block",
								}}>
								Sales Management <br />
								<span className="hidden md:inline">
									Visão Geral de Vendas -{" "}
								</span>
								<span>Abril/2025</span>
							</span>
						</div>

						<div className="flex items-center justify-center gap-3 w-full md:w-auto">
							<div className="flex flex-col">
								<label
									htmlFor="year"
									className="text-white mb-1 text-sm">
									Ano
								</label>
								<Select
									id="year"
									className="w-24 sm:w-32"
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
									className="w-24 sm:w-32"
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

						<div className="w-full md:w-auto flex justify-center md:justify-end">
							<button className="bg-white p-2 rounded-full text-purple-900 hover:bg-gray-100">
								<FaUser size={20} />
							</button>
						</div>
					</div>
				</div>
			</div>

			<div
				className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden"
				style={{ height: "40px", transform: "translateY(85%)" }}>
				<svg
					viewBox="0 0 1440 100"
					preserveAspectRatio="none"
					fill="rgb(76, 29, 149)"
					xmlns="http://www.w3.org/2000/svg"
					className="w-full h-full">
					<path d="M0,0 C240,70 480,100 720,70 C960,40 1200,30 1440,90 L1440,100 L0,100 Z" />
				</svg>
			</div>

			<div
				style={{
					height: "clamp(250px, 30vh, 300px)",
					minHeight: "250px",
				}}></div>
		</div>
	);
};

export default MenuBar;
