import React from "react";
import MenuBar from "../tools/MenuBar";
import Footer from "../tools/Footer";
import Dashboard from "../components/Dashboard";

const Home: React.FC = () => {
	return (
		<>
			<MenuBar />
			<main className="min-h-screen bg-gray-50">
				<Dashboard />
			</main>
			<Footer />
		</>
	);
};
export default Home;
