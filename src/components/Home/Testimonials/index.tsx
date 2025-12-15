"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { Icon } from "@iconify/react";

const AboutUs = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const aboutData = [
        {
            title: "Who We Are",
            icon: "mdi:school-outline",
            description:
                "We are a forward-thinking tech learning platform committed to equipping students with practical and in-demand digital skills.",
        },
        {
            title: "Our Mission",
            icon: "mdi:rocket-launch-outline",
            description:
                "To empower the next generation of tech creators, problem-solvers, and innovators through hands-on learning and expert mentorship.",
        },
        {
            title: "Why Choose Us",
            icon: "mdi:star-outline",
            description:
                "We combine expert instructors, practical projects, mentorship, and career-focused learning paths to help students succeed in tech.",
        },
    ];

    return (
        <section id="about-us" className="py-20 bg-lightgray">
            <div className="container mx-auto lg:max-w-screen-xl px-4">

                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-darkbrown mb-4">
                        About Us
                    </h2>
                    <p className="text-gray-700 dark:text-white max-w-2xl mx-auto">
                        We make tech education practical, accessible, and impactful for learners of all backgrounds.
                    </p>
                </div>

                {/* Slider */}
                <Slider {...settings}>
                    {aboutData.map((item, index) => (
                        <div key={index}>
                            <div className="bg-white rounded-2xl p-8 m-4 shadow-lg hover:shadow-xl transition-all h-full">
                                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white mb-6 mx-auto">
                                    <Icon icon={item.icon} className="text-3xl" />
                                </div>
                                <h3 className="text-xl font-semibold text-center text-darkbrown mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-center leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default AboutUs;
