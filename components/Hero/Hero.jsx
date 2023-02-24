import Image from "next/image";
import React from "react";
import Features from "../Features/Features";

const Hero = () => {
	return (
		<div className='bg-[#FFFFFF] pt-10 pb-5'>
			<div className='w-4/5 m-auto mt-20 flex md:flex-row flex-col justify-between items-center '>
				<div className='md:w-2/4 w-full md:text-left text-center'>
					<h1 className='text-3xl md:text-6xl text=[#0B132A] font-semibold md:mb-5 mb-2'>
						Want anything to be easy with{" "}
						<span className='font-bold'>LaslesVPN</span>
					</h1>

					<p className='text-[#4F5665] mb-10 md:text-[14px]'>
						Provide a network for all your needs with ease and fun using
						LaslesVPN discover interesting features from us.
					</p>

					<button className='bg-[#F53838] text-[#FFFFFF] shadow-lg shadow-[#F53838]/50 py-3 px-10 hover:bg-[#F85C54] rounded'>
						Get Started
					</button>
				</div>

				<div>
					<Image
						src={"/Illustration1.svg"}
						width={500}
						height={500}
						className='hidden md:block '
					/>
				</div>
			</div>

			<div className='w-4/5 m-auto mt-20  mb-20 flex justify-between items-center bg-[#FFFFFF] px-6 md:px-16 py-14 shadow-lg shadow-[#E0E0E0]/50 '>
				<div className='flex  justify-between items-center gap-8 md:flex-row flex-col md:text-right text-center'>
					<div>
						<Image src={"/user.png"} width={48} height={24} />
					</div>
					<div className='gap-5'>
						<p className='font-bold text-xl'>90+</p>
						<span>Users</span>
					</div>
				</div>
				<div className='standig-div'></div>
				<div className='flex  justify-between items-center gap-8 md:flex-row flex-col md:text-right text-center'>
					<div>
						<Image src={"/location.png"} width={48} height={24} />
					</div>
					<div className='gap-5'>
						<p className='font-bold text-xl'>30+</p>
						<span>Locations</span>
					</div>
				</div>
				<div className='standig-div'></div>
				<div className='flex  justify-between items-center gap-8 md:flex-row flex-col md:text-right text-center'>
					<div>
						<Image src={"/Server.png"} width={48} height={24} />
					</div>
					<div className='gap-5'>
						<p className='font-bold text-xl'>50+</p>
						<span>Servers</span>
					</div>
				</div>
			</div>
			<Features />
		</div>
	);
};

export default Hero;
