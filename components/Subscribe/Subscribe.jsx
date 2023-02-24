import React from "react";

const Subscribe = () => {
	return (
		<div>
			<div className='w-4/5 m-auto mt-20 flex justify-between items-center p-8 bg-white shadow-lg shadow-[#E5E7EB]/50 relative top-[-10rem]  rounded-[8px]'>
				<div>
					<h2 className='text-4xl font-bold w-[60%] mb-4 leading-normal'>
						Subscribe Now to Get Special Features
					</h2>
					<p>Let's subscribe with us and find fun</p>
				</div>
				<div className='flex align-center justify-center'>
					<button className='bg-[#F53838] text-[#FFFFFF] shadow-lg shadow-[#F53838]/50 py-3 px-12 hover:bg-[#F85C54] rounded'>
						Subscribe
					</button>
				</div>
			</div>
		</div>
	);
};

export default Subscribe;
