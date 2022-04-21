import { PortfolioData } from "@/types";
import WorkJSON from "@/Work";
import PortfolioItem from "./PortfolioItem";

interface IProps {
    filter: number;
}

const Portfolio = (props: IProps) => {

    const { filter } = props;

    return (
        <div className="portfolioSection">
            <div className="grid grid-cols-1 gap-6 -ml-10">
                {WorkJSON.map((work, index) => filter === work.category && <PortfolioItem {...work as PortfolioData} key={index} />)}
            </div>
        </div>
    )
};

export default Portfolio;