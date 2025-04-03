import React from "react";
import Sidebar from "../tools/Sidebar";
import MenuBar from "../tools/MenuBar";
import Footer from "../tools/Footer";
const Home: React.FC = () => {
	return (
		<>
			<MenuBar />
			<Sidebar />
			<Footer />
		</>
	);
};
export default Home;
