

import img01 from '../../../public/img-app-01.jpg';
import img02 from '../../../public/img-02.jpg';
import img04 from '../../../public/img-app-02.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import SellProperty from '../SellProperty/SellProperty';
import ComfortSection from '../ComfortSection/ComfortSection';
import AvailableType from '../AvailableType/AvailableType';


const Home = () => {
    return (
        <div>
            <div className="w-full h-screen relative">


                {/* Overlay Text */}
                <div className="absolute top-1/3 left-0 w-full text-center z-10">
                    <div className='max-w-[1000px] mx-auto'>
                        <h1 className="text-white text-8xl font-bold">Find Your Dream House By Us</h1>
                    </div>
                    <p className="text-white mt-4 text-4xl font-medium">Discover amazing content below</p>
                </div>

                {/* Swiper Slider */}
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{
                        prevEl: '.custom-prev',
                        nextEl: '.custom-next'
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000 }}
                    loop={true}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="h-full"
                >
                    <SwiperSlide className="relative w-full h-full">
                        <img
                            src={img01}
                            className="w-full h-full object-cover"
                            alt="Slide 1"
                        />
                    </SwiperSlide>

                    <SwiperSlide className="relative w-full h-full">
                        <img
                            src={img02}
                            className="w-full h-full object-cover"
                            alt="Slide 2"
                        />
                    </SwiperSlide>

                    <SwiperSlide className="relative w-full h-full">
                        <img
                            src={img04}
                            className="w-full h-full object-cover"
                            alt="Slide 3"
                        />
                    </SwiperSlide>

                    {/* Custom navigation buttons */}
                    <div className="custom-prev">Previous</div>
                    <div className="custom-next">Next</div>
                </Swiper>

            </div>
            
            <SellProperty></SellProperty>
            <ComfortSection></ComfortSection>
            <AvailableType></AvailableType>
            

        </div>
    );
};

export default Home;
