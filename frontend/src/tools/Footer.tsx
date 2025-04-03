import React from "react";
import {
	Footer as FlowbiteFooter,
	FooterCopyright,
	FooterLink,
	FooterLinkGroup,
} from "flowbite-react";
import { BsLinkedin, BsGithub, BsWhatsapp, BsInstagram } from "react-icons/bs";

const Footer = () => {
	const handleLinkedinClick = () => {
		window.open("https://www.linkedin.com/in/aurelioventurelli/", "_blank");
	};

	const handleGithubClick = () => {
		window.open("https://github.com/venturelli-91", "_blank");
	};

	const handleWhatsappClick = () => {
		window.open("https://wa.me/5500000000000", "_blank");
	};

	const handleInstagramClick = () => {
		window.open("https://www.instagram.com/pousadaencantoserra", "_blank");
	};

	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					minHeight: "0vh",
				}}>
				<FlowbiteFooter
					container
					style={{
						marginTop: "auto",
						backgroundColor: "purple",
						color: "yellow",
					}}>
					<FooterCopyright
						href="#"
						by="Pousada Encanto da Serra"
						year={2025}
						style={{ color: "white", fontWeight: "bold" }}
					/>
					<FooterLinkGroup>
						<FooterLink
							href="#"
							className="mr-4 mt-2 font-bold">
							Contato
						</FooterLink>
						<FooterLink
							href="#"
							className="mr-4 mt-2 font-bold">
							Localização
						</FooterLink>
						<FooterLink
							href="#"
							className="mr-4 mt-2 font-bold">
							Quartos
						</FooterLink>
						<div className="flex gap-4">
							<BsLinkedin
								size={30}
								onClick={handleLinkedinClick}
								className="cursor-pointer"
							/>
							<BsGithub
								size={30}
								onClick={handleGithubClick}
								className="cursor-pointer"
							/>
							<BsWhatsapp
								size={30}
								onClick={handleWhatsappClick}
								className="cursor-pointer"
							/>
							<BsInstagram
								size={30}
								onClick={handleInstagramClick}
								className="cursor-pointer"
							/>
						</div>
					</FooterLinkGroup>
				</FlowbiteFooter>
			</div>
		</>
	);
};

export default Footer;
