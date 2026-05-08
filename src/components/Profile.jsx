import portfolioData from "../data/portfolioData";
import { useAppContext } from "../context/AppContext";

function Profile() {
    const { language } = useAppContext();

    const data = portfolioData[language];

    return (
        <section
            id="profile"
            className="pt-20"
        >
            <div className="max-w-[1200px] mx-auto px-6">
                <h2 className="text-[48px] font-bold text-[#1F2937] dark:text-[#E5E5E5] mb-16">
                    {data.profile.title}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 border-b border-[#D9D9D9] dark:border-[#FFFFFF33] pb-20">

                    {/* LEFT SIDE */}
                    <div>
                        <h3 className="text-[32px] font-semibold text-[#4338CA] mb-10">
                            {data.profile.infoTitle}
                        </h3>

                        <div className="space-y-8">

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-10">
                                <span className="font-bold min-w-[180px] text-[#1F2937] dark:text-white">
                                    {data.profile.birthDate}
                                </span>

                                <span className="text-[#6B7280] dark:text-[#B7AAFF]">
                                    {data.profile.birthDateValue}
                                </span>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-10">
                                <span className="font-bold min-w-[180px] text-[#1F2937] dark:text-white">
                                    {data.profile.city}
                                </span>

                                <span className="text-[#6B7280] dark:text-[#FFFFFFB2]">
                                    {data.profile.cityValue}
                                </span>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-10">
                                <span className="font-bold min-w-[180px] text-[#1F2937] dark:text-white">
                                    {data.profile.education}
                                </span>

                                <span className="text-[#6B7280] dark:text-[#FFFFFFB2] max-w-[350px]">
                                    {data.profile.educationValue}
                                </span>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-10">
                                <span className="font-bold min-w-[180px] text-[#1F2937] dark:text-white">
                                    {data.profile.role}
                                </span>

                                <span className="text-[#6B7280] dark:text-[#FFFFFFB2]">
                                    {data.profile.roleValue}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div>
                        <h3 className="text-[32px] font-semibold text-[#4338CA] mb-10">
                            {data.profile.aboutTitle}
                        </h3>

                        <div className="space-y-8 max-w-[520px]">
                            {data.profile.about.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="text-[#6B7280] dark:text-[#FFFFFFB2] leading-[42px] text-[18px]"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;