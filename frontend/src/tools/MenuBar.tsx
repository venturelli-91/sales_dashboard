import React from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarCollapse,
	NavbarLink,
	NavbarToggle,
} from "flowbite-react";
import Link from "next/link";

const MenuBar: React.FC = () => {
	return (
		<>
			<Navbar
				fluid
				rounded
				style={{ backgroundColor: "rgb(76, 29, 149)" }}>
				<NavbarBrand>
					<span
						style={{
							backgroundColor: "rgb(76, 29, 149)",
							color: "white",
							padding: "10px",
							borderRadius: "5px",
							fontSize: "1.5rem",
							fontWeight: "bold",
						}}>
						Sales Management | Visão Geral de Vendas - Abril/2025
					</span>
				</NavbarBrand>
				<NavbarToggle />
				<NavbarCollapse>
					<NavbarLink
						href="#"
						active>
						Home
					</NavbarLink>
					<NavbarLink
						as={Link}
						href="#">
						About
					</NavbarLink>
					<NavbarLink href="#">Services</NavbarLink>
					<NavbarLink href="#">Pricing</NavbarLink>
					<NavbarLink href="#">Contact</NavbarLink>
				</NavbarCollapse>
			</Navbar>
		</>
	);
};

export default MenuBar;
