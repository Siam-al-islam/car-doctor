import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Autoplay, Pagination } from 'swiper/modules';

import image1 from '../../../assets/images/banner/1.jpg'
import image2 from '../../../assets/images/banner/2.jpg'
import image3 from '../../../assets/images/banner/3.jpg'
import image5 from '../../../assets/images/banner/5.jpg'
import image6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className='rounded-md overflow-hidden'>
            <div className=''>
                <Swiper
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                >
                    <SwiperSlide>
                        <div className="relative">
                            <div className='h-full bg-gradient-to-r from-[#151515] to to-[#00000000] max-w-[620px] absolute top-1/2 -translate-y-1/2'>
                                <div className='pl-8 h-full flex flex-col justify-center'>
                                    <h1 className="md:text-6xl text-2xl font-bold text-white">Affordable Price For Car Servicing</h1>
                                    <p className="mt-5 text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                    <div className="mt-8 text-white font-semibold flex gap-5">
                                        <button className="uppercase bg-[#FF3811] md:px-6 px-4 md:py-4 py-2 rounded-xl">Discover More</button>
                                        <button className="uppercase border border-white bg-[#ff391100]  md:px-6 px-4 md:py-4 py-2 rounded-xl">Latest Project</button>
                                    </div>
                                </div>
                            </div>
                            <img src={image1} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <div className='h-full bg-gradient-to-r from-[#151515] to to-[#ffffff00] max-w-[620px] absolute top-1/2 -translate-y-1/2'>
                                <div className='pl-8 h-full flex flex-col justify-center'>
                                    <h1 className="md:text-6xl text-2xl font-bold text-white">Affordable Price For Car Servicing</h1>
                                    <p className="mt-5 text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                    <div className="mt-8 text-white font-semibold flex gap-5">
                                        <button className="uppercase bg-[#FF3811] md:px-6 px-4 md:py-4 py-2 rounded-xl">Discover More</button>
                                        <button className="uppercase border border-white bg-[#ff391100]  md:px-6 px-4 md:py-4 py-2 rounded-xl">Latest Project</button>
                                    </div>
                                </div>
                            </div>
                            <img src={image2} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <div className='h-full bg-gradient-to-r from-[#151515] to to-[#ffffff00] max-w-[620px] absolute top-1/2 -translate-y-1/2'>
                                <div className='pl-8 h-full flex flex-col justify-center'>
                                    <h1 className="md:text-6xl text-2xl font-bold text-white">Affordable Price For Car Servicing</h1>
                                    <p className="mt-5 text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                    <div className="mt-8 text-white font-semibold flex gap-5">
                                        <button className="uppercase bg-[#FF3811] md:px-6 px-4 md:py-4 py-2 rounded-xl">Discover More</button>
                                        <button className="uppercase border border-white bg-[#ff391100]  md:px-6 px-4 md:py-4 py-2 rounded-xl">Latest Project</button>
                                    </div>
                                </div>
                            </div>
                            <img src={image3} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <div className='h-full bg-gradient-to-r from-[#151515] to to-[#ffffff00] max-w-[620px] absolute top-1/2 -translate-y-1/2'>
                                <div className='pl-8 h-full flex flex-col justify-center'>
                                    <h1 className="md:text-6xl text-2xl font-bold text-white">Affordable Price For Car Servicing</h1>
                                    <p className="mt-5 text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                    <div className="mt-8 text-white font-semibold flex gap-5">
                                        <button className="uppercase bg-[#FF3811] md:px-6 px-4 md:py-4 py-2 rounded-xl">Discover More</button>
                                        <button className="uppercase border border-white bg-[#ff391100]  md:px-6 px-4 md:py-4 py-2 rounded-xl">Latest Project</button>
                                    </div>
                                </div>
                            </div>
                            <img src={image5} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <div className='h-full bg-gradient-to-r from-[#151515] to to-[#ffffff00] max-w-[620px] absolute top-1/2 -translate-y-1/2'>
                                <div className='pl-8 h-full flex flex-col justify-center'>
                                    <h1 className="md:text-6xl text-2xl font-bold text-white">Affordable Price For Car Servicing</h1>
                                    <p className="mt-5 text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                    <div className="mt-8 text-white font-semibold flex gap-5">
                                        <button className="uppercase bg-[#FF3811] md:px-6 px-4 md:py-4 py-2 rounded-xl">Discover More</button>
                                        <button className="uppercase border border-white bg-[#ff391100]  md:px-6 px-4 md:py-4 py-2 rounded-xl">Latest Project</button>
                                    </div>
                                </div>
                            </div>
                            <img src={image6} />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    );
};

export default Banner;