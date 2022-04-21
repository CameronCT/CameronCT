import React, { Component } from 'react';

class Esports extends Component {

    render() {
        return (
            <div className={"mx-1"}>
                <div className={"border border-gray-300 rounded p-8 mb-6"}>
                    <div className={"text-xs text-black font-mono"}><span aria-label="dog icon" role={"img"}>🐶</span> CameronCT / ESPORTS.md</div>
                    <div className={"pt-4 text-sm text-black"}>
                        <div className={"text-lg font-semibold"}>History</div>
                        <div className={"mt-2"}>
                            Since I was five years old, I've been on a computer playing video games alongside my brothers. I was first introduced to the game "Quake III Arena" which was an Arena First Person Shooter and was one of the most popular
                            video games on the computer at that time. Over the years growing up I would continuously play other shooters including Combat Arms, Warrock, Call of Duty and later on Counter-Strike, however my passion would always end me back
                            up in Quake.
                        </div>
                        <div className={"mt-4 text-lg font-semibold"}>Quake Pro League</div>
                        <div className={"mt-2"}>
                            In November 2019, I qualified for the Quake Pro League finals in <span className={"font-semibold"}>Lucca, Italy</span> by playing 7 qualification tournaments. From playing all 7 qualification tournaments, I ended up qualifying with <span className={"font-semibold"}>1,253 points</span> which
                            was the highest points across all regions.
                        </div>
                        <div className={"mt-2"}>
                            After being flown out to Italy, I won my relegation match and became a professional video gamer. My tournaments, achievements and statistics can be found <a className="text-red-700 hover:text-red-800" href={"https://liquipedia.net/arenafps/Quake_Pro_League/Season_1/Challenger/North_America/Standings"}>here</a>.
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Esports;