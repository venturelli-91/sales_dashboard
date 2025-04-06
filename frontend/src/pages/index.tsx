import React from "react";
import CompleteMenu from "../components/CompleteMenu";
import Dashboard from "../components/Dashboard";
import Footer from "../tools/Footer";

const Home: React.FC = () => {
	return (
		<>
			<CompleteMenu />
			<main className="min-h-screen bg-gray-50 pt-10">
				<Dashboard />
			</main>
			<Footer />
		</>
	);
};
export default Home;
