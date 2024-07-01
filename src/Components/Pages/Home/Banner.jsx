import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
const Banner = () => {
    const slidesData = [
        {
            image: "https://swiperjs.com/demos/images/nature-1.jpg",
        },
        {
            image: "https://swiperjs.com/demos/images/nature-2.jpg",
        },
        {
            image: "https://swiperjs.com/demos/images/nature-3.jpg",
        },
    ];
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
        >
            {slidesData.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="relative">
                        <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-auto rounded-lg" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Banner;