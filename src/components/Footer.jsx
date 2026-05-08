import portfolioData from "../data/portfolioData";
import { useAppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

function Footer() {
    const { language } = useAppContext();

    const data = portfolioData[language];
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                "https://reqres.in/api/workintech",
                {
                    email,
                }
            );

            toast.success("Message sent successfully!");

            setEmail("");
        } catch (error) {
            toast.error("Something went wrong!");
        }
    };

    return (
        <footer
            id="footer"
            className="pt-24 pb-24"
        >
            <div className="max-w-[1200px] mx-auto px-6">

                <div className="bg-white dark:bg-[#141217] rounded-[12px] px-6 md:px-10 py-14 md:py-20 flex flex-col lg:flex-row justify-between gap-16 duration-300">

                    {/* LEFT */}
                    <div>
                        <h2 className="text-[36px] md:text-[48px] leading-[48px] md:leading-[60px] font-bold text-[#1F2937] dark:text-[#E1DAFF] max-w-[450px] mb-12">
                            {data.footer.title}
                        </h2>

                        <a
                            href="mailto:yalcinkabar@gmail.com"
                            className="text-[#AF0C48] text-[22px] underline font-medium"
                        >
                            👉 yalcinkabar@gmail.com
                        </a>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col gap-8">

                        <div className="flex gap-6 flex-wrap">

                            <a
                                href="https://github.com/yalcinkabar"
                                target="_blank"
                                className="text-[#00AB6B] font-medium hover:opacity-70 transition-all"
                            >
                                Github
                            </a>

                            <a
                                href="https://www.linkedin.com/in/yal%C3%A7%C4%B1n-kabar-88b531250/"
                                target="_blank"
                                className="text-[#0077B5] font-medium hover:opacity-70 transition-all"
                            >
                                Linkedin
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;