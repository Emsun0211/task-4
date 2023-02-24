import React from "react";
import Link from "next/link";
import Image from "next/image";

const PlansCard = () => {
	const plans = [
		{
			image: "/Free.png",
			title: "Free",
			list: [
				"Unlimited Bandwith",
				"Unlimited Bandwith",
				"No Traffic Logs",
				"Works on All Devices",
			],
		},
		{
			image: "/Free.png",
			title: "Standard",
			list: [
				"Unlimited Bandwith",
				"Unlimited Bandwith",
				"No Traffic Logs",
				"Works on All Devices",
			],
		},
		{
			image: "/Free.png",
			title: "Premium",
			list: [
				"Unlimited Bandwith",
				"Unlimited Bandwith",
				"No Traffic Logs",
				"Works on All Devices",
			],
		},
	];
	return (
		<>
			{plans.map((plan) => {
				return (
					<div className=' hidden  sm:block border border-[#EOEOEO] pt-16 px-10 pb-10 gap-10 rounded h-[44rem] w-[25%] '>
						<div className='flex items-center flex-col gap-5 mb-10'>
							<Image src={`${plan.image}`} width={100} height={100} />
							<p className='font-semibold text-[20px]'>{plan.title} Plan</p>
						</div>
						{plan.list.forEach((list) => {
							console.log(list);
							return (
								<div className='h-[300px] text-[12px]'>
									<p className='flex gap-5 mb-5 text-[#4F5665]'>
										<Image src={"/Group1223.png"} width={24} height={12} />
										{list}
									</p>
									{/* <p className='flex gap-5 mb-5 text-[#4F5665]'>
								<Image src={"/Group1223.png"} width={24} height={12} />{" "}
								Encrypted Connection
							</p>
							<p className='flex gap-5 mb-5 text-[#4F5665]'>
								<Image src={"/Group1223.png"} width={24} height={12} /> No
								Traffic Logs
							</p>
							<p className='flex gap-5 mb-5 text-[#4F5665]'>
								<Image src={"/Group1223.png"} width={24} height={12} /> Works on
								All Devices
							</p> */}
								</div>
							);
						})}

						<div className='flex items-center justify-center flex-col'>
							<p className='font-semibold text-[20px] text-[24px] mb-5'>
								{plan.title}
							</p>
							<Link
								href={"/"}
								className='py-1 px-6 text-[#F53855] text-sm rounded-full border border-[#F53855]'>
								Select
							</Link>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default PlansCard;
