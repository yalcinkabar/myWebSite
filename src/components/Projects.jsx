import portfolioData from "../data/portfolioData";
import { useAppContext } from "../context/AppContext";
import pizzaChallenge from "../assets/pizza-cha.png";
import pizzaDog from "../assets/pizza-dog.png";
import bankApp from "../assets/BankApp.png";

function Projects() {
    const { language } = useAppContext();

    const data = portfolioData[language];

    return (
        <section
            id="projects"
            className="pt-20"
        >
            <div className="max-w-[1200px] mx-auto px-6">
                <h2 className="text-[48px] font-bold text-[#1F2937] dark:text-[#E5E5E5] mb-16">
                    {data.projects.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {data.projects.items.map((project, index) => (
                        <div
                            key={index}
                            className="flex flex-col h-full bg-white dark:bg-[#2B2530] rounded-2xl p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >

                            <img
                                src={
                                    index === 0
                                        ? pizzaChallenge
                                        : index === 1
                                            ? pizzaDog
                                            : bankApp
                                }
                                alt={project.title}
                                className="w-full h-[240px] md:h-[220px] object-contain bg-white rounded-xl mb-6 p-2 transition-all duration-300 hover:scale-[1.02]"
                            />

                            <h3 className="text-[26px] md:text-[30px] font-semibold text-[#4338CA] dark:text-[#B7AAFF] mb-4">
                                {project.title}
                            </h3>

                            <p className="text-[#6B7280] dark:text-[#FFFFFFB2] leading-[30px] mb-6">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-3 mb-6">
                                {project.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 border border-[#4338CA] rounded-full text-[#4338CA] text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between mt-auto">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="text-[#4338CA] font-medium underline"
                                >
                                    Github
                                </a>

                                <a
                                    href={project.website}
                                    target="_blank"
                                    className="text-[#4338CA] font-medium underline"
                                >
                                    View Site
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;