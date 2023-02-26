import Image from "next/image";
import Link from "next/link";
import React from "react";
import Subscribe from "../Subscribe/Subscribe";
// import Testimonial from "../Testimonial/Testimonial";

const Footer = () => {
	return (
		<div className='mb-10 mt-[-20px] relative bg-[#f8f8f8]'>
			{/* <Subscribe /> */}
			<div className='flex justify-between gap-x-10  sm:gap-20 w-[90%] md:w-4/5 m-auto '>
				<div className='w-[25%] flex flex-col gap-5 text-[#4F5665]'>
					<Link href={"/"} className='flex items-center'>
						<Image src={"/Logo.png"} width={149} height={36} />
					</Link>
					<p>
						<span className='font-bold'>LaslesVPN</span> is a virtual network
						that has the unique and has high security
					</p>
					<div className='flex items-center mb-[-15px]'>
						<span>
							<Image src={"/Facebook.png"} width={50} height={50} />
						</span>
						<span>
							<Image src={"/Twitter.png"} width={50} height={50} />
						</span>
						<span>
							<Image src={"/Instagram.png"} width={50} height={50} />
						</span>
					</div>
					<p>&copy;2020LaslenVPN</p>
				</div>
				<div className='flex flex-col gap-5 '>
					<h3 className='font-bold'>Product</h3>
					<div className='flex flex-col gap-2 text-[#4F5665]'>
						<Link href={"#"}>Download</Link>
						<Link href={"#"}>Pricing</Link>
						<Link href={"#"}>Location</Link>
						<Link href={"#"}>Server</Link>
						<Link href={"#"}>Countries</Link>
						<Link href={"#"}>Blog</Link>
					</div>
				</div>
				<div className='flex flex-col gap-5 '>
					<h3 className='font-bold'>Engage</h3>
					<div className='flex flex-col gap-2 text-[#4F5665]'>
						<Link href={"#"}>LaslenVPN?</Link>
						<Link href={"#"}>FAQ</Link>
						<Link href={"#"}>Tutorials</Link>
						<Link href={"#"}>About Us</Link>
						<Link href={"#"}>Privacy Policy</Link>
						<Link href={"#"}>Terms of Service</Link>
					</div>
				</div>
				<div className='flex flex-col gap-5 hidden sm:block '>
					<h3 className='font-bold'>Earn Money</h3>
					<div className='flex flex-col gap-2 text-[#4F5665]'>
						<Link href={"#"}>Affliate</Link>
						<Link href={"#"}>Become a Partner</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
