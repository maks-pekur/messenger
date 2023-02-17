'use client'
import Image from 'next/image'
import { useState } from 'react'
import { navLinks } from '../utils/constants'

export const SideNav = () => {
	const [selectedTab, setSelectedTab] = useState(0)
	return (
		<nav className="h-screen w-20 bg-bgLight flex flex-col items-center justify-between shadow-lg dark:bg-bgDark">
			<div className="h-full">
				<div>
					<Image src={''} alt="logo" width={64} height={64} />
				</div>
				<div>
					{navLinks.map((item, idx) => (
						<div
							onClick={() => setSelectedTab(idx)}
							className={`p-4 rounded-lg flex items-center justify-center ${
								idx === selectedTab && 'bg-[#0162C4] text-[#fff]'
							}`}
							key={item.id}
						>
							{item.icon}
						</div>
					))}
				</div>
			</div>

			<div></div>
		</nav>
	)
}
