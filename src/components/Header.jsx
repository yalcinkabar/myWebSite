import { useAppContext } from "../context/AppContext";
import portfolioData from "../data/portfolioData";

function Header() {
    const {
        language,
        toggleLanguage,
        toggleTheme,
        theme,
    } = useAppContext();

    const data = portfolioData[language];

    return (
        <header className="w-full pt-8">
            <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-end gap-6">

                {/* TOP */}
                <div className="flex items-center gap-6">

                    <button
                        onClick={toggleTheme}
                        className="flex items-center gap-3"
                    >
                        <div className="w-[55px] h-[28px] bg-[#4731D3] rounded-full flex items-center px-[4px] duration-300">

                            <div
                                className={`w-[20px] h-[20px] bg-white rounded-full duration-300 ${theme === "dark"
                                    ? "translate-x-[27px]"
                                    : "translate-x-0"
                                    }`}
                            ></div>

                        </div>

                        <span className="text-[15px] font-semibold text-[#777777] dark:text-[#EAEAEA]">
                            {data.themeText}
                        </span>
                    </button>

                    <div className="w-[1px] h-5 bg-gray-300"></div>

                    <button
                        onClick={toggleLanguage}
                        className="text-[15px] font-semibold text-[#4731D3]"
                    >
                        {data.languageButton}
                    </button>

                </div>

                {/* BOTTOM */}
                <div className="flex items-center gap-10">

                    <nav>
                        <ul className="flex items-center gap-8 text-[#6B7280] dark:text-[#E1DAFF] font-medium">

                            <li>
                                <a href="#skills">{data.navSkills}</a>
                            </li>

                            <li>
                                <a href="#projects">{data.navProjects}</a>
                            </li>

                        </ul>
                    </nav>

                    <a
                        href="#footer"
                        className="border border-[#4338CA] text-[#4338CA] px-8 py-3 rounded-lg font-medium hover:bg-[#4338CA] hover:text-white transition-all duration-300"
                    >
                        {data.hireMe}
                    </a>

                </div>

            </div>
        </header>
    );
}

export default Header;