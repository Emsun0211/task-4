import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<div className='w-full bg-[#ffffff]'>
			<div className='flex justify-between items-center gap-20 w-4/5 m-auto pt-10'>
				<Link href={"/"} className='flex items-center'>
					<Image src={"/Logo.png"} width={149} height={36} />
				</Link>
				<div className=' hidden md:flex justify-between items-center gap-16'>
					<Link href={"#"}>
						<p className='text-[#4F5665]'>About</p>
					</Link>
					<Link href={"#"}>
						<p className='text-[#4F5665]'>Features</p>
					</Link>
					<Link href={"#"}>
						<p className='text-[#4F5665]'>Pricing</p>
					</Link>
					<Link href={"#"}>
						<p className='text-[#4F5665]'>Testimonial</p>
					</Link>
					<Link href={"#"}>
						<p className='text-[#4F5665]'>Help</p>
					</Link>
				</div>
				<div className='flex justify-between items-center gap-5'>
					<Link href={"/"}>Sign In</Link>
					<Link
						href={"/"}
						className='py-1 px-5 text-[#F53855] text-sm rounded-full border border-[#F53855]'>
						Sign Up
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
