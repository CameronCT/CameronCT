import React, { Component } from 'react';
import Navigation from "./Navigation";
import Home from "./pages/Home";
import Typing from "./pages/Typing";
import Portfolio from "./pages/Portfolio";
import Esports from "./pages/Esports";

interface IProps {
    page?: string;
}

class Main extends Component<IProps> {

    render() {

        const { page } = this.props;
        let pageContent: JSX.Element;

        switch (page) {
            case 'Portfolio':
                pageContent = <Portfolio />;
                break;
            case 'Typing':
                pageContent = <Typing />;
                break;
            case 'Esports':
                pageContent = <Esports />;
                break;
            default:
                pageContent = <Home />;
                break;
        }

        return (
            <div>
                <div className={"flex flex-wrap"}>
                    <div className={"w-full sm:w-1/5"}>
                        <Navigation currentPage={page || 'Home'} />
                    </div>
                    <div className={"w-full sm:w-4/5 p-4 my-auto"}>
                        {pageContent}
                    </div>
                </div>
            </div>
        )
    }

}

export default Main;