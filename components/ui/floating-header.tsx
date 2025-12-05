'use client'
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';
import logo from '../../public/logo_brewhouse.png'


export function FloatingHeader() {
	const [open, setOpen] = React.useState(false);

	const links = [
		{
			label: 'Home',
			href: '#',
		},
		{
			label: 'Gallery',
			href: '#',
		},
		{
			label: 'Event Planning',
			href: '#',
		},
	];

	return (
		<header
			className={cn(
				'sticky top-5 z-50',
				'mx-auto w-full max-w-3xl rounded-lg border shadow',
				'bg-background/95 supports-[backdrop-filter]:bg-background/80 backdrop-blur-lg',
			)}
		>
			<nav className="mx-auto flex items-center justify-between p-1.5">
				<div className="hover:bg-accent flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 duration-100">
					<Image src={logo} alt="Braintree Brewhouse Logo" width={60} height={60} />
				</div>
				<div className="hidden items-center gap-1 lg:flex">
					{links.map((link, index) => (
						<Link
							key={index}
							className={buttonVariants({ variant: 'ghost', size: 'sm' })}
							href={link.href}
						>
							{link.label}
						</Link>
					))}
				</div>
				<div className="flex items-center gap-2">
					<div className='flex p-2'>
						<Link href="https://www.facebook.com/braintree.brewhouse/"><Facebook className="size-5 hover:opacity-70 cursor-pointer" /></Link>
						<Link href="https://www.instagram.com/braintreebrewhouse/?igsh=eDBhMXdiZTEzNnhu&utm_source=qr"><Instagram className="size-5 hover:opacity-70 cursor-pointer ml-2" /></Link>
					</div>
					
				</div>
			</nav>
		</header>
	);
}
