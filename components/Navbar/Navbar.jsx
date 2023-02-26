import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineViewList } from "react-icons/hi";

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
				<div className='hidden md:block flex justify-between items-center gap-8'>
					<Link className='m-2 mx-5 font-semibold' href={"/"}>
						Sign In
					</Link>
					<Link
						href={"/"}
						className='py-[10px] px-[24px] text-[#F53855] text-sm rounded-full font-semibold border border-[#F53855]'>
						Sign Up
					</Link>
				</div>
				<div>
					<HiOutlineViewList className='md:hidden block w-[40px] h-[40px]' />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
