import { PortfolioData } from "@/types";

const PortfolioItem = (work: PortfolioData) => {
    return (
        <div className="flex md:space-x-6 group">
            <a href={work.url} target="_blank" rel="noopener noreferrer" className="hidden md:block w-24 h-20 bg-white rounded-2xl shadow-lg transform group-hover:scale-110 transition ease-in-out duration-300">
                <img className="w-full h-full p-4 object-contain object-center rounded-3xl" src={`/work/${work.img}`} alt={work.name} />
            </a>
            <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 md:p-8 w-full"> 
                <div className="flex flex-wrap justify-between">
                    <div className="w-full lg:w-auto">
                        <h2 className="h3">
                            <a href={work.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition ease-in-out duration-300">{work.name}</a>
                        </h2>
                    </div>
                    <div className="lg:my-auto text-gray-500 w-full lg:w-auto">
                        <div className="font-semibold mt-1 text-sm text-center lg:text-right">
                            {work.time.split(', ').map((time, index) => <div key={index}>{time}{(work.time.split(', ').length > 1 && index === 0) && ','}</div>)}
                        </div>
                    </div> 
                </div>
                <div className="font-semibold mt-1 text-orange-500">{work.type}</div>

                <div className="mt-2">
                    {work.about}
                </div>
                
                {work.statistics && (
                    <div className="mt-2">
                        <div className="font-semibold text-lg">Statistics</div> 
                        <ul className="-mt-3.5">
                            {work.statistics?.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>
                )}

                <div className="mt-2">
                    <div className="font-semibold text-lg">Technology</div> 
                    <span>{work.technology}</span>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;