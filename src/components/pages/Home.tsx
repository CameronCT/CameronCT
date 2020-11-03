import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
            <div>
                <div className={"border border-gray-300 rounded p-8 mb-6"}>
                    <div className={"text-xs text-black font-mono"}><span aria-label="dog icon" role={"img"}>🐶</span> CameronCT / WELCOME.md</div>
                    <div className={"pt-4 text-sm text-black"}>
                        <div className={"text-lg font-semibold"}>Hi there, I am a:</div>
                        <ul className={"mt-2 list-disc pl-10"}>
                            <li className={"pb-1"}><span aria-label="computer icon" role={"img"}>💻</span> Website Developer</li>
                            <li className={"pb-1"}><span aria-label="gamepad icon" role={"img"}>🎮</span> Professional Esports Player</li>
                            <li className={"pb-1"}><span aria-label="screen icon" role={"img"}>📺</span> Twitch Partner</li>
                            <li className={"pb-1"}><span aria-label="keyboard icon" role={"img"}>⌨</span> Competitive Typist</li>
                            <ul className={"pb-1 list-disc pl-10"}>
                                <li className={"pb-1"}>Former World Record on TypeRacer</li>
                                <li className={"pb-1"}>Average 150 Words Per Minute</li>
                            </ul>
                            <li><span aria-label="bolt icon" role={"img"}>⚡</span> I'm also working on Keyma.sh!</li>
                        </ul>
                    </div>
                </div>

                <div className={"border border-gray-300 rounded p-8 mb-6"}>
                    <div className={"text-xs text-black font-mono"}><span aria-label="dog icon" role={"img"}>🐶</span> CameronCT / MISSION.md</div>
                    <div className={"pt-4 text-sm text-black"}>
                        <div>
                            Add here
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;