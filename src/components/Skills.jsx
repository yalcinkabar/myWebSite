import portfolioData from "../data/portfolioData";
import { useAppContext } from "../context/AppContext";

function Skills() {
    const { language } = useAppContext();

    const data = portfolioData[language];

    return (
        <section
            id="skills"
            className="pt-24"
        >
            <div className="max-w-[1200px] mx-auto px-6">
                <h2 className="text-[48px] font-bold text-[#1F2937] dark:text-[#E5E5E5] mb-16">
                    {data.skillsSection.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-b border-[#D9D9D9] dark:border-[#FFFFFF33] pb-20">
                    {data.skillsSection.items.map((skill, index) => (
                        <div key={index}>
                            <h3 className="text-[30px] font-semibold text-[#4338CA] dark:text-[#B7AAFF] mb-6">
                                {skill.name}
                            </h3>

                            <p className="text-[#6B7280] dark:text-[#B7AAFF] leading-[30px]">
                                {skill.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;