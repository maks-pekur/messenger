import { SideNav } from './components/SideNav'

import './globals.css'

export default function RootLayout({ children }) {
	return (
		<html lang="en" class="light">
			<head />
			<body>
				<main>
					<SideNav />
					{children}
				</main>
			</body>
		</html>
	)
}
