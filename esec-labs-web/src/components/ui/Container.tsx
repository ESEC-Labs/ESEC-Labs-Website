"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Container ({children}: {children: React.ReactNode }){
	const router = useRouter();

	return(
		<div className="flex flex-col min-h-screen bg-white">
			{/* Header */}
				<header className="w-full bg-black shadow-md py-4 px-6 fixed top-0 left-0 z-50 text-white">
				  <div className="max-w-7xl mx-auto relative flex items-center justify-start">
				    {/* Logo on the left */}
				    <Link href="#home" className="text-3xl font-bold">
				      ESEC
				    </Link>

				    {/* Centered nav links */}
				    <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-x-6 font-bold">
				      <Link href="/">Home</Link>
				      <Link href="/blog">Blog</Link>
				    </nav>
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
