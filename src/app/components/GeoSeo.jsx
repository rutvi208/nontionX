
import Image from "next/image";
import tsv1 from "./../../assets/GEO-SEO/SEO-visual1.webp";
import tsv2 from "./../../assets/GEO-SEO/SEO-visual2.webp"; 
import tsv3 from "./../../assets/GEO-SEO/SEO-visual3.webp";
import tsv4 from "./../../assets/GEO-SEO/SEO-visual4.webp"; 
import geo1 from "./../../assets/GEO-SEO/GEO-visual1.webp";
import geo2 from "./../../assets/GEO-SEO/GEO-visual2.webp"; 
import geo3 from "./../../assets/GEO-SEO/GEO-visual3.webp";
import geo4 from "./../../assets/GEO-SEO/GEO-visual4.webp";

const GeoSeo = () => {
    return (
        <div className="bg-[var(--pastelbrown)] ">
            <div className="mx-auto container py-16 sm:py-20 lg:py-28 px-5 lg:px-8 2xl:px-0"> {/* px-12 2xl:px-20 */}
                <div>
                    <h1 className="heading-font font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.06rem]">GEO vs SEO: What Changed</h1>
                    <p className="text-lg lg:text-xl content-font mt-3">The AI search revolution requires a completely different approach to getting found online</p>
                </div>

                {/* mobile content */}

                {/* content */}
                <div className="space-y-12 lg:space-y-14 mt-12 sm:mt-20 lg:mt-[6.25rem]">
                    <div className="bg-white rounded-xl lg:rounded-[1.25rem] p-4 sm:p-7 lg:p-10 ">
                        <h1 className="content-font font-semibold text-[#5D3E35] mb-6 sm:mb-8 lg:mb-10 text-2xl sm:text-4xl lg:text-[2.5rem] tracking-[-0.05rem]">Traditional SEO</h1>
                        <div className="grid gap-4 sm:gap-2 2xl:gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                            <div>
                                <Image
                                    src={tsv1}
                                    alt="Traditional SEO Visual 1"
                                    className="w-fit h-fit"
                                />
                                <p className="content-font text-lg lg:text-xl text-[#5D3E35] ms-3.5 mt-4 2xl:w-full">Requires users to click through to your site.</p>
                            </div>
                            <div>
                                <Image
                                    src={tsv2}
                                    alt="Traditional SEO Visual 2"
                                    className="w-fit h-fit"
                                />
                                <p className="content-font text-lg lg:text-xl text-[#5D3E35] ms-3.5 mt-4">Competes with 9 other results on page one.</p>
                            </div>
                            <div>
                                <Image
                                    src={tsv3}
                                    alt="Traditional SEO Visual 3"
                                    className="w-fit h-fit"
                                />
                                <p className="content-font text-lg lg:text-xl text-[#5D3E35] ms-3.5 mt-4">Focuses on driving traffic to your website.</p>
                            </div>
                            <div>
                                <Image
                                    src={tsv4}
                                    alt="Traditional SEO Visual 4"
                                    className="w-fit h-fit"
                                />
                                <p className="content-font text-lg lg:text-xl text-[#5D3E35] ms-3.5 mt-4">Takes 6-12 months for significant results.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="content-font font-semibold italic text-xl lg:text-2xl text-center">How GEO delivers results traditional SEO can't.</p>
                    </div>

                    <div className="bg-white rounded-xl lg:rounded-[1.25rem] p-4 sm:p-7 lg:p-10 ">
                        <h1 className="content-font font-semibold text-[#5D3E35] mb-6 sm:mb-8 lg:mb-10 text-2xl sm:text-4xl lg:text-[2.5rem] tracking-[-0.05rem]">Generative Engine Optimization</h1>
                        <div className="grid gap-4 sm:gap-2 2xl:gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                            <div>
                                <Image
                                    src={geo1}
                                    alt="GEO Visual 1"
                                    className="w-fit h-fit"
                                />
                                <p className="content-font text-lg lg:text-xl text-[#5D3E35] ms-1 mt-4">Optimizes for direct mentions in AI answers.</p>
                            </div>
                            <div>
                                <Image
                                    src={geo2}
                                    alt="GEO Visual 2"
                                    className="w-fit h-fit"
                                />
                                <p className="content-font text-lg lg:text-xl text-[#5D3E35] ms-1 mt-4">Positions you as THE definitive answer, not an option.</p>
                            </div>
                            <div>
                                <Image
                                    src={geo3}
                                    alt="GEO Visual 3"
                                    className="w-fit h-fit"
                                />
                                <p className="content-font text-lg lg:text-xl text-[#5D3E35] ms-1 mt-4">Focuses on direct recommendations & citations.</p>
                            </div>
                            <div>
                                <Image
                                    src={geo4}
                                    alt="GEO Visual 4"
                                    className="w-fit h-fit"
                                />
                                <p className="content-font text-lg lg:text-xl text-[#5D3E35] ms-1 mt-4">Can deliver results in as little as 30-60 days.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeoSeo;