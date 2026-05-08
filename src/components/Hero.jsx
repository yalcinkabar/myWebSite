import portfolioData from "../data/portfolioData";
import { useAppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

import {
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa";

import heroImage from "../assets/about_pic.png"

function Hero() {
    const { language } = useAppContext();

    const data = portfolioData[language];
    const handleHireMe = async () => {
        try {
            await axios.get("https://jsonplaceholder.typicode.com/posts/1");

            toast.success("LinkedIn veya mail üzerinden dilediğiniz an bana ulaşın!");
        } catch (error) {
            toast.error("Something went wrong!");
        }
    };

    return (
        <section
            id="hero"
            className="pt-12 md:pt-24 pb-16"
        >
            <div className="max-w-[1150px] mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-16 h-[2px] bg-[#4338CA]"></div>

                        <span className="text-[#4338CA] font-semibold">
                            {data.hero.name}
                        </span>
                    </div>

                    <h1 className="text-[48px] md:text-[64px] leading-[56px] md:leading-[70px] font-bold text-[#1F2937] dark:text-[#F5F5F5] max-w-[520px] mb-8">
                        {data.hero.title}
                    </h1>

                    <p className="text-[#6B7280] dark:text-[#C1B6FF] text-[20px] leading-[32px] max-w-[520px] mb-10">
                        {data.hero.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button onClick={handleHireMe} className="bg-[#4338CA] hover:bg-[#372aac] hover:scale-105 text-white px-8 py-4 rounded-md font-medium duration-300">
                            {data.hero.hireMe}
                        </button>

                        <a
                            href="https://github.com/yalcinkabar"
                            target="_blank"
                            className="border border-[#4338CA] px-6 py-4 rounded-md flex items-center gap-3 text-[#4338CA] dark:text-white"
                        >
                            <FaGithub />
                            Github
                        </a>

                        <a
                            href="https://www.linkedin.com/in/yal%C3%A7%C4%B1n-kabar-88b531250/"
                            target="_blank"
                            className="border border-[#4338CA] px-6 py-4 rounded-md flex items-center gap-3 text-[#4338CA] dark:text-white"
                        >
                            <FaLinkedinIn />
                            Linkedin
                        </a>
                    </div>
                </div>

                <div className="flex-1 flex justify-center">
                    <img
                        src={heroImage}
                        alt="hero"
                        className="w-full max-w-[450px] rounded-[24px]"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;