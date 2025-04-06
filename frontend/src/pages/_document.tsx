import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body className="antialiased font-sans">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
