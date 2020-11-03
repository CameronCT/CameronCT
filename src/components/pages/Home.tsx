import React, { Component } from 'react';

interface SkillsData {
    color: string;
    name: string;
    type?: string;
}

class Home extends Component {

    skills : SkillsData[] = [
        {
            color: 'green',
            name: 'HTML5',
            type: 'frontend',
        },
        {
            color: 'blue',
            name: 'CSS',
            type: 'frontend',
        },
        {
            color: 'teal',
            name: 'React'
        },
        {
            color: 'red',
            name: 'PHP',
            type: 'backend',
        },
        {
            color: 'orange',
            name: 'Python',
        },
        {
            color: 'yellow',
            name: 'Node',
        },
        {
            color: 'gray',
            name: 'MySQL',
        },
        {
            color: 'indigo',
            name: 'MongoDB',
        }
    ];

    render() {
        return (
            <div className={"mx-1"}>
                <div className={"border border-gray-300 rounded p-8 mb-6"}>
                    <div className={"text-xs text-black font-mono"}><span aria-label="dog icon" role={"img"}>🐶</span> CameronCT / WELCOME.md</div>
                    <div className={"pt-4 text-sm text-black"}>
                        <div className={"text-lg font-semibold"}>Hi there, I am a:</div>
                        <ul className={"mt-2 list-disc pl-4 lg:pl-10"}>
                            <li className={"pb-1"}><span aria-label="computer icon" role={"img"}>💻</span> Website Developer</li>
                            <li className={"pb-1"}><span aria-label="gamepad icon" role={"img"}>🎮</span> Professional Esports Player</li>
                            <li className={"pb-1"}><span aria-label="screen icon" role={"img"}>📺</span> Twitch Partner</li>
                            <li className={"pb-1"}><span aria-label="keyboard icon" role={"img"}>⌨</span> Competitive Typist</li>
                            <ul className={"pb-1 list-disc pl-2 lg:pl-6"}>
                                <li className={"pb-1"}>Former World Record on TypeRacer</li>
                                <li className={"pb-1"}>Average 150 Words Per Minute</li>
                            </ul>
                            <li><span aria-label="bolt icon" role={"img"}>⚡</span> I'm also working on Keyma.sh!</li>
                        </ul>
                    </div>
                </div>

                <div className={"border border-gray-300 rounded p-8 mb-6"}>
                    <div className={"text-xs text-black font-mono"}><span aria-label="dog icon" role={"img"}>🐶</span> CameronCT / GOALS.md</div>
                    <div className={"pt-4 text-sm text-black"}>
                        <div className={"text-lg font-semibold"}>What I am trying to achieve</div>
                        <div className={"mt-2"}>
                            All of the knowledge that I have is completely self-taught using online resources such as StackOverflow, CodeAcademy and Google.
                            I am actively looking at new technologies coming out to keep myself on top of the tech world.
                        </div>
                    </div>
                </div>

                <div className={"border border-gray-300 rounded p-8 mb-6"}>
                    <div className={"text-xs text-black font-mono"}><span aria-label="dog icon" role={"img"}>🐶</span> CameronCT / SKILLS.md</div>
                    <div className={"pt-4 text-sm text-black"}>
                        <div className={"flex flex-wrap"}>
                            {this.skills.map((skill) => (
                                <div className={`m-2 px-3 py-1 text-sm font-semibold uppercase rounded bg-${skill.color}-200 bg-opacity-50 shadow text-${skill.color}-900 border-l-2 border-${skill.color}-500`}>
                                    {skill.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;