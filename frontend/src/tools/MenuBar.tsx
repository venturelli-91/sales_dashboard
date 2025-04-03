import React from "react";
import Image from "next/image";
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
		<Navbar
			fluid
			rounded>
			<NavbarBrand
				as={Link}
				href="https://flowbite-react.com">
				<Image
					src="/favicon.svg"
					width={36}
					height={36}
					className="mr-3 h-6 sm:h-9"
					alt="Flowbite React Logo"
				/>
				<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
					Flowbite React
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
	);
};

export default MenuBar;
