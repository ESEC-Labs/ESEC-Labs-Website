"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Container ({children}: {children: React.ReactNode }){
	const router = useRouter();

	return(
		<div className="flex flex-col min-h-screen bg-white">

			<header className="w-full bg-black shadow-md py-4 px-6 fixed top-0 left-0 z-50 text-white">
			  <div className="flex items-center justify-between">
			    <h1 className="text-3xl font-bold whitespace-nowrap">
			     ESEC Labs 
			    </h1>
			  </div>
			</header>


			{/* Main */}
			<main className="flex-grow pt-24 px-6">
				{children}
			</main>
		
			{/* Footer */}
			<footer className="w-full bg-black text-center py-4 mt-8">
				<p className="text-sm">&copy; {new Date().getFullYear()} ESEC Labs. All rights reserved.</p>	
			</footer>
		</div>
	);
}
