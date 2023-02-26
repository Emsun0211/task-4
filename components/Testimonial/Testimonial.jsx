import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState, useRef, useEffect } from "react";

import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { reviews } from "./reviews";

SwiperCore.use([Virtual, Navigation, Pagination]);

function Testimonial() {
	const [swiperRef, setSwiperRef] = useState(null);
	// const window = useRef(window);
	// const [windowSize, setWindowSize] = useState([
	// 	window.innerWidth,
	// 	window.innerHeight,
	// ]);
	// useEffect(() => {
	// 	const handleWindowResize = () => {
	// 		setWindowSize([window.innerWidth, window.innerHeight]);
	// 	};
	// 	window.addEventListener("resize", handleWindowResize);

	// 	return () => {
	// 		window.removeEventListener("rezise", handleWindowResize);
	// 	};
	// });
	// sliderfront button function
	const slideFront = (index) => {
		swiperRef.slideTo(index + 1, 0);
		console.log(swiperRef.isEnd);
	};
	// sliderback button function
	const slideBack = (index) => {
		swiperRef.slideTo(index - 1, 0);
	};
	return (
		<div className='pt-24 flex flex-col space-y-14 items-center justify-center bg-white pb-32 flex-wrap '>
			<div className='flex flex-col items-center space-y-5 text-center'>
				<h1 className='text-4xl text-[#0B132A] max-w-[447.81px] leading-[50px] font-bold'>
					Trusted by Thousands of Happy Customer
				</h1>
				<p className='text-[#4F5665] font-normal text-base leading-[30px] max-w-[500px]'>
					These are the stories of our customers who have joined us with great
					pleasure when using this crazy feature.
				</p>
			</div>
			<div className='w-full h-full pl-[50px]'>
				<Swiper
					slidesPerView={"3"}
					// slidesPerView={"3"}
					onSwiper={setSwiperRef}
					breakpoints={{
						768: { slidesPerView: 2 },
						480: { slidesPerView: 1 },
					}}
					spaceBetween={10}
					loop={true}
					virtual
					pagination={{
						clickable: true,
					}}
					modules={[Navigation, Pagination]}>
					{reviews.map((review, idx) => {
						return (
							<SwiperSlide key={idx}>
								<TestimonialCard
									profile={review.profile}
									name={review.name}
									location={review.location}
									rating={review.rating}
									comment={review.comment}
								/>
							</SwiperSlide>
						);
					})}

					<div className='flex px-[150px] justify-between items-center w-full mt-[60px]'>
						<div></div>
						<div className='flex space-x-5 items-center'>
							<Image
								src={"/leftarrow.svg"}
								width={60}
								height={60}
								onClick={() => slideBack(swiperRef.activeIndex)}
							/>
							<Image
								src={"/leftarrow.svg"}
								className='rotate-180 '
								width={60}
								height={60}
								onClick={() => slideFront(swiperRef.activeIndex)}
							/>
						</div>
					</div>
				</Swiper>
			</div>

			{/* <div className='w-full h-full pl-[50px] sm:hidden block'>
				<Swiper
					slidesPerView={"1"}
					onSwiper={setSwiperRef}
					virtual
					pagination={{
						clickable: true,
					}}
					modules={[Navigation, Pagination]}>
					<SwiperSlide>
						<TestimonialCard
							profile='profile1.svg'
							name='Viezh Robert1'
							location='Warsaw, Poland'
							rating='4.5'
							comment='Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<TestimonialCard
							profile='profile2.svg'
							name='Yessica Christy'
							location='Shanxi, China'
							rating='4.5'
							comment='I like it because I like to travel far and still can connect with high speed.'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<TestimonialCard
							profile='profile3.svg'
							name='Kim Young Jou'
							location='Seoul, South Korea'
							rating='4.5'
							comment='This is very unusual for my business that currently requires a virtual private network that has high security.'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<TestimonialCard
							profile='profile2.svg'
							name='Yessica Christy'
							location='Shanxi, China'
							rating='4.5'
							comment='I like it because I like to travel far and still can connect with high speed.'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<TestimonialCard
							profile='profile3.svg'
							name='Kim Young Jou'
							location='Seoul, South Korea'
							rating='4.5'
							comment='This is very unusual for my business that currently requires a virtual private network that has high security.'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<TestimonialCard
							profile='profile1.svg'
							name='Viezh Robert1'
							location='Warsaw, Poland'
							rating='4.5'
							comment='Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<TestimonialCard
							profile='profile1.svg'
							name='Viezh Robert1'
							location='Warsaw, Poland'
							rating='4.5'
							comment='Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.'
						/>
					</SwiperSlide>

					<div className='flex px-[150px] justify-between items-center w-full mt-[60px]'>
						<div></div>
						<div className='flex space-x-5 items-center'>
							<Image
								src={"/leftarrow.svg"}
								width={60}
								height={60}
								onClick={() => slideBack(swiperRef.activeIndex)}
							/>
							<Image
								src={"/leftarrow.svg"}
								className='rotate-180 '
								width={60}
								height={60}
								onClick={() => slideFront(swiperRef.activeIndex)}
							/>
						</div>
					</div>
				</Swiper>
			</div> */}
		</div>
	);
}

export default Testimonial;
