import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";
import { useEffect } from "react";
import images from "@/config/images";
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const Testimonial = () => {
    const message = "SunnahNikah is a great platform for finding a suitable partner. I found my partner through this site and I am thankful to the team for creating this platform."

    const profiles = {
        name: "Maurice",
        profilePictureUrl: images.cat,
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="text-4xl text-secondary text-[#23263b] font-semibold mb-5">
                    What our members say
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        Array(5).fill().map((_, i) => (
                            <SwiperSlide key={i}>
                                <div className="select-none flex items-center justify-center flex-col gap-4  bg-[#f5f5f6] p-5 rounded-md">
                                    <div className="text-[#fb4a6e] flex gap-1">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                    <div className="font-medium text-secondary text-base">
                                        {message}
                                    </div>
                                    <div className="flex justify-center items-center gap-4">
                                        <div className="h-10 w-10">
                                            <img
                                                className="rounded-full"
                                                src={profiles.profilePictureUrl}
                                                alt="prifle"
                                            />
                                        </div>
                                        <p className="font-normal">
                                            {profiles.name}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>

    );
};

export default Testimonial;
