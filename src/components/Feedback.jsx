import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Feedback = () =>{
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch("/testimonials.json") // Adjust path if needed
            .then((response) => response.json())
            .then((data) => setTestimonials(data))
            .catch((error) => console.error("Error loading testimonials:", error));
    }, []);

    return (
        <div className="p-10">
            <h2 className="text-3xl text-center mb-8">What Our Customers Say</h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1} // Default to 1 for mobile
                breakpoints={{
                    640: { slidesPerView: 1 },  // Small screens
                    768: { slidesPerView: 2 },  // Medium screens
                    1024: { slidesPerView: 3 }, // Large screens
                    1280: { slidesPerView: 4 }  // Extra-large screens
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-scroll every 3 seconds
                navigation
                pagination={{ clickable: true }}
                loop={true}
                className="max-w-6xl mx-auto"
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
                            <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mb-4" />
                            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                            <p className="text-gray-600 mt-2">{testimonial.feedback}</p>
                            <div className="mt-3">
                                {"⭐".repeat(testimonial.rating)}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Feedback;