"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface NavigationProps {
	theme?: 'dark' | 'light'
}
export const Navigation = ({ theme = 'dark' }: NavigationProps) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
					}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						<Link
							href="/projects"
							className={`font-semibold duration-200 ${theme === 'light' ? 'text-zinc-950 hover:text-zinc-500' : 'text-zinc-400 hover:text-zinc-100'} `}
						>
							Projects
						</Link>
						<Link
							href="/blog"
							className={`font-semibold duration-200 ${theme === 'light' ? 'text-zinc-950 hover:text-zinc-500' : 'text-zinc-400 hover:text-zinc-100'} `}
						>
							Blog
						</Link>
						<Link
							href="/contact"
							className={`font-semibold duration-200 ${theme === 'light' ? 'text-zinc-950 hover:text-zinc-500' : 'text-zinc-400 hover:text-zinc-100'} `}
						>
							Contact
						</Link>
					</div>

					<Link
						href="/"
						className={`duration-200 ${theme === 'light' ? 'text-zinc-950 hover:text-zinc-500' : 'text-zinc-400 hover:text-zinc-100'} `}
					>
						<ArrowLeft className="w-6 h-6 " />
					</Link>
				</div>
			</div>
		</header>
	);
};
