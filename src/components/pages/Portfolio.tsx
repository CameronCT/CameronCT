import React, { Component } from 'react';
import PortfolioCard from "../modules/PortfolioCard";

export interface PortfolioData {
    img: string;
    url: string;
    name: string;
    type?: string;
    time: string;
    github?: string;
    about: string;
    releases?: any;
    statistics?: string[];
    technology?: string;
}


class Portfolio extends Component {

    professional : PortfolioData[] = [
        {
            'img': 'keyma.sh.png',
            'url': 'https://keyma.sh',
            'name': 'Keyma.sh',
            'type': 'Owner / Lead Developer',
            'time': 'May 2020 - Present',
            'github': '',
            'about': 'An online multiplayer typing website where players can go against each other from around the world.',

            'releases': {
                'Beta': 'November 22nd, 2020',
                'Full': 'Q1 2021'
            },
            'technology': 'Nginx, Git, Trello, React, Node, TypeScript & MariaDB'
        },
        {
            'img': 'qrindr.png',
            'url': 'https://qrindr.com',
            'name': 'Qrindr',
            'type': 'Personal',
            'time': 'July 2019 - Present',
            'github': 'https://github.com/CameronCT/Qrindr',
            'about': 'A web-app used to emulate Quake Pro League tournament matches in a Best of 3 or Best of 5 style.',
            'statistics': [
                '10,000+ matches',
                '40,000+ views'
            ],
            'technology': 'Nginx, Git, React, Tailwind, MariaDB & PHP'
        },
        {
            'img': 'metajolt.png',
            'url': 'https://metajolt.com',
            'name': 'MetaJolt',
            'type': 'Website Developer',
            'time': 'April 2016 - July 2016, Dec 2016 - Oct 2019',
            'github': '',
            'about': 'A multimedia aggregation platform that allows users to share media to family and friends.',
            'statistics': [
                '12,000+ videos',
                '1,200,000+ views'
            ],
            'technology': 'Nginx, Bootstrap, VueJS, jQuery, MariaDB, ezPHP, PHP & FFMPEG'
        }
    ];

    personal : PortfolioData[] = [
        {
            'img': 'speedinglive.png',
            'url': 'https://game.cameronct.com/',
            'name': 'Speeding Live',
            'time': 'February 2019, March 2020 - April 2020',
            'about': 'A text-based MMORPG inspired by Storm8\'s defunct title, Racing Live.',
            'technology': 'Nginx, Bootstrap, MariaDB, SmartyPHP & PHP'
        },
        {
            'img': 'houseoftyping.png',
            'url': 'https://github.com/CameronCT/HouseOfTyping',
            'name': 'House of Typing',
            'time': 'March 2017 - May 2017, August 2018 - September 2018',
            'about': 'An esports competition site showcasing the fastest touch typists from around the world!',
            'technology': 'Nginx, Bulma, AngularJS, MySQL & PHP'
        },
        {
            'img': 'typeracer.png',
            'url': 'https://userstyles.org/users/390462',
            'name': 'TypeRacer Themes',
            'time': 'January 2017 - June 2017',
            'about': 'Created themes for TypeRacer using Google Chrome Extension "Stylish" using CSS.',
            'technology': 'HTML & CSS'
        },
        {
            'img': 'ezphp.png',
            'url': 'https://github.com/CameronCT/ezPHP',
            'name': 'ezPHP',
            'time': 'December 2016',
            'about': 'A custom template engine heavily inspired by Smarty utilizing PHTML files.',
            'technology': 'PHP'
        },
    ];

    honorable : PortfolioData[] = [
        {
            'img': 'moddinglegacy.png',
            'url': 'https://moddinglegacy.com',
            'name': 'Modding Legacy',
            'type': '',
            'time': 'December 2018',
            'about': 'A small group of friends that does Minecraft modding as a hobby by reviving really old and abandoned mods.',
            'technology': 'MySQL'
        },
        {
            'img': 'clonehero.png',
            'url': 'https://clonehero.net',
            'name': 'Clone Hero',
            'type': 'Website Developer',
            'time': 'December 2017',
            'about': 'An indie music rhythym video game inspired by the Guitar Hero Franchise that provides near identitical gameplay.',
            'technology': 'Bootstrap, MariaDB & PHP'
        }
    ]

    render() {
        return (
            <div>
                <div className={"text-lg pl-1 text-gray-900"}>Professional</div>
                <div className={"flex flex-wrap"}>
                    {this.professional.map((item) => (
                        <div className={"w-full xl:w-1/2 p-1"}>
                            <PortfolioCard {...item} />
                        </div>
                    ))}
                </div>

                <div className={"mt-6 pl-1 text-lg text-gray-900"}>Personal</div>
                <div className={"flex flex-wrap"}>
                    {this.personal.map((item) => (
                        <div className={"w-full xl:w-1/2 p-1"}>
                            <PortfolioCard {...item} />
                        </div>
                    ))}
                </div>

                <div className={"mt-6 pl-1 text-lg text-gray-900"}>Honorable Mentions</div>
                <div className={"flex flex-wrap"}>
                    {this.honorable.map((item) => (
                        <div className={"w-full xl:w-1/2 p-1"}>
                            <PortfolioCard {...item} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }

}

export default Portfolio;