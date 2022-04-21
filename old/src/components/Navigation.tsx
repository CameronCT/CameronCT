import React, { Component } from 'react';
import {Link} from "react-router-dom";

interface IProps {
    currentPage: string;
}

class Navigation extends Component<IProps> {

    navigation = [
        {
            url: '/',
            name: 'Home',
            icon: 'home'
        },
        {
            url: '/portfolio',
            name: 'Portfolio',
            icon: 'code'
        },
        {
            url: '/typing',
            name: 'Typing',
            icon: 'keyboard'
        },
        {
            url: '/esports',
            name: 'Esports',
            icon: 'gamepad'
        },
    ];

    render() {
        const { currentPage } = this.props;

        return (
            <div>
                <div className={"p-2"}>
                    <img className="w-64 mx-auto sm:w-full h-auto rounded-full border-8 border-gray-300" src={"/assets/picture.jpg"} alt={"profile"} />
                </div>
                <div className={"p-2 text-center"}>
                    <div className={"text-2xl text-gray-900 font-semibold"}>Cameron Touchette</div>
                </div>
                <div className={"p-2"}>
                    <div className={"flex justify-center"}>
                        <div className={"w-10 text-center"}>
                            <a href={"mailto:contact@cameronct.com"} className={"text-gray-700 hover:text-blue-700"}>
                                <i className={"text-lg fas fa-envelope"} />
                            </a>
                        </div>
                        <div className={"w-10 text-center"}>
                            <a href={"https://twitter.com/gnikgg"} className={"text-gray-700 hover:text-blue-600"}>
                                <i className={"text-lg fab fa-twitter"} />
                            </a>
                        </div>
                        <div className={"w-10 text-center"}>
                            <a href={"https://www.linkedin.com/in/cameron-touchette-12438711a/"} className={"text-gray-700 hover:text-blue-700"}>
                                <i className={"text-lg fab fa-linkedin"} />
                            </a>
                        </div>
                        <div className={"w-10 text-center"}>
                            <a href={"https://github.com/CameronCT"} className={"text-gray-700 hover:text-gray-900"}>
                                <i className={"text-lg fab fa-github"} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={"p-2 mt-6"}>
                    <div className={"flex"}>
                        <div className={"w-full"}>
                            {this.navigation.map((item) => (
                                <Link to={item.url} className={`block w-full mb-2 px-4 py-2 border-l-4 text-gray-700 font-medium ${currentPage === item.name ? 'border-red-400' : 'border-gray-400'} bg-gray-200 bg-opacity-50 hover:bg-opacity-100`}>
                                    <i className={`fas fa-${item.icon} mr-1`} /> {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={"p-2 mt-6 uppercase font-semibold text-gray-800"}>
                    <div className={"text-center text-base"}>
                        &copy; CameronCT 2020
                    </div>
                    <div className={"text-center text-xs mt-2"}>
                        Crafted with <i className={"text-red-500 fas fa-heart"} /> in Okanagan, BC.
                    </div>
                </div>
            </div>
        )
    }

}

export default Navigation;