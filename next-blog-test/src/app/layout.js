import "./globals.css"; // applies this font to ALL pages in the next application
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "create nextjs blog",
	description: "blog template following nextjs tutorials",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
