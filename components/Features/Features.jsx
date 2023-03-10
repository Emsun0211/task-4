import Image from "next/image";
import React from "react";

const Features = () => {
	return (
		<div className='md:w-full sm:w-4/5  m-auto mt-30 flex-col md:flex-row  flex justify-between items-center gap-x-40 px-20'>
			<div className='w-[40%]'>
				<Image src={"/Illustration2.svg"} width={400} height={400} />
			</div>

			<div className='ml-5 sm:w-1/2 w-full sm:text-center lg:text-left '>
				<h3 className='font-bold text-xl md:text-4xl mt-5 mb-5 text-center sm:text-left '>
					We Provide Many Features You Can Use
				</h3>
				<p className='mb-5 text-[#4F5665] sm:text-[18px] text-[14px]'>
					You can explore the features that we provide with fun and have their
					own functions each feature.
				</p>
				<div className='flex sm:flex-col flex-row text-[12px] sm:text-[16px] gap-2'>
					<p className='mb-5 flex gap-x-5 items-center text-[#4F5665]'>
						<Image
							src={"/Group1.png"}
							width={24}
							height={12}
							className='hidden md:block'
						/>
						Powerfull online protection.
					</p>
					<p className='mb-5 flex gap-x-5 items-center text-[#4F5665]'>
						<Image
							src={"/Group1.png"}
							width={24}
							height={12}
							className='hidden md:block'
						/>
						Internet without borders.
					</p>
					<p className='mb-5 flex gap-x-5 items-center text-[#4F5665]'>
						<Image
							src={"/Group1.png"}
							width={24}
							height={12}
							className='hidden md:block'
						/>
						Supercharged VPN.
					</p>
					<p className='mb-5 flex gap-x-5 items-center text-[#4F5665]'>
						<Image
							src={"/Group1.png"}
							width={24}
							height={12}
							className='hidden md:block'
						/>
						No specific time limits.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Features;
