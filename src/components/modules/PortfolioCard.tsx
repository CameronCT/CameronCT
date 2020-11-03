import React, { Component } from 'react';
import {PortfolioData} from "../pages/Portfolio";

class PortfolioCard extends Component<PortfolioData> {
    render() {
        const { url, name, type, statistics, technology, about, releases, img, time } = this.props;
        
        return (
            <div className={"border border-gray-300 rounded p-6"}>
                <div className={"text-sm text-black"}>
                    <div className={"flex"}>
                        <div className={"w-full mr-auto pr-2"}>
                            <a href={url} className={"text-base font-semibold text-black hover:text-gray-800"}>{name}</a>
                            <div className={"text-xs text-gray-700"}>{type && `${type} | `}{time}</div>
                            <div className={"mt-3 text-xs text-gray-800"}>
                                {about}
                            </div>
                            {statistics && (
                                <div className={"mt-3 text-xs text-gray-800"}>
                                    <div className={"text-gray-900"}>Statistics</div>
                                    <ul className={"list-disc pl-6 text-gray-700"}>
                                        {statistics.map((stat) => (
                                            <li>
                                                {stat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {releases && (
                                <div className={"mt-3 text-xs text-gray-800"}>
                                    <div className={"text-gray-900"}>Release</div>
                                    <ul className={"list-disc pl-6 text-gray-700"}>
                                        <li>
                                            Beta: {releases.Beta}
                                        </li>
                                        <li>
                                            Full: {releases.Full}
                                        </li>
                                    </ul>
                                </div>
                            )}
                            <div className={"mt-3 text-xs font-medium text-gray-800"}>
                                {technology}
                            </div>
                        </div>
                        <div className={"w-24 my-auto"}>
                            <a href={url}>
                                <img className={"w-full h-auto rounded"} src={`assets/${img}`} alt={name} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioCard;