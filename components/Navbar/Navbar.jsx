import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineViewList } from "react-icons/hi";

const Navbar = () => {
	return (
		<div className='w-full bg-[#ffffff] w-4/5 '>
			<div className='flex justify-between items-center gap-10 md:gap-20 w-[80%] m-auto pt-10'>
				<Link href={"/"}>
					<Image src={"/Logo.png"} width={120} height={36} className=' z-40' />
				</Link>
				{/* <Image src={"/Logo.png"} width={149} height={36} className=' z-40' /> */}

				<div className=' hidden md:flex justify-between items-center md:gap-8 gap-16'>
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
				<div className=' flex justify-between items-center gap-4 md:gap-8'>
					<div className='hidden lg:flex text-[0.6rem] md:text-[16px] flex items-center'>
						<Link className='m-2 mx-5  font-semibold' href={"/"}>
							Sign In
						</Link>
						<Link
							href={"/"}
							className='py-[10px] px-[24px] text-[#F53855]  rounded-full font-semibold border border-[#F53855]'>
							Sign Up
						</Link>
					</div>
					<div>
						<HiOutlineViewList className='lg:hidden block w-[40px] h-[40px]' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
