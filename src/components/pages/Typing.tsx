import React, { Component } from 'react';

class Typing extends Component {

    render() {
        return (
            <div>
                <div className={"border border-gray-300 rounded p-8 mb-6"}>
                    <div className={"text-xs text-black font-mono"}><span aria-label="dog icon" role={"img"}>🐶</span> CameronCT / TYPING.md</div>
                    <div className={"pt-4 text-sm text-black"}>
                        <div className={"text-lg font-semibold"}>Early years</div>
                        <div className={"mt-2"}>
                            Ever since I was in Elementary school, we learned typing all the way up until Highschool. While we were learning typing, a teacher told me that I was an incredibly fast typist
                            for someone who was then 8 years old. My average words per minute was measured around 50-60 at the age of 8, and then at the age of 13 I was typing 100 words per minute.
                        </div>
                        <div className={"mt-4 text-lg font-semibold"}>Present</div>
                        <div className={"mt-2"}>
                            As of now, I have had a world record for typing, multiple top 12-16 finishes in notable typing tournaments and can type an average of 150 words per minute.
                        </div>
                    </div>
                </div>
                <div className={"border border-gray-300 rounded p-8 mb-6"}>
                    <div className={"text-xs text-black font-mono"}><span aria-label="dog icon" role={"img"}>🐶</span> CameronCT / WORLD_RECORD.md</div>
                    <div className={"pt-4 text-sm text-black"}>
                        <div className={"text-lg font-semibold"}>Previous Record</div>
                        <div className={"mt-2"}>
                            On August 29th in 2011, Sean Wrona (labelled as the fastest typist in the world in 2010) recorded a video of a world record typing speed typing at <span className={"font-semibold"}>258 words per minute</span> on TypeRacer.
                        </div>
                        <div className={"mt-2"}>
                            In December 2016, this record was finally broken by typist Kathy Chiang. However, there was no video recording of this record being broken except the TypeRacer result page.
                        </div>

                        <div className={"mt-4 text-lg font-semibold"}>May 18, 2017</div>
                        <div className={"mt-2"}>
                            On this day, I <a className="text-red-700 hover:text-red-800" href={"https://www.youtube.com/watch?v=JCTgGGkcRFk&feature=youtu.be"}>recorded</a> a typing speed of <span className={"font-semibold"}>267 words per minute</span> on TypeRacer making myself the first person to have defeat Sean Wrona's record since the initial record in 2011.
                        </div>
                        <div className={"mt-2"}>
                            While I currently <span className={"font-semibold"}>no longer</span> hold the record anymore, this was still a huge accomplishment in my entire typing career as a typist.
                        </div>
                    </div>
                </div>

                <div className={"border border-gray-300 rounded p-8 mb-6"}>
                    <div className={"text-xs text-black font-mono"}><span aria-label="dog icon" role={"img"}>🐶</span> CameronCT / TOURNAMENTS.md</div>
                    <div className={"pt-4 text-sm text-black"}>
                        <div className={"text-lg font-semibold"}>Global Leaderboards</div>
                        <ul className={"mt-2 list-disc pl-10"}>
                            <li className={"pb-1"}><span className={"font-semibold"}>41st</span> TypeRacerData</li>
                            <li className={"pb-1"}><span className={"font-semibold"}>15th</span> TypingZone</li>
                        </ul>
                        <div className={"mt-4 text-lg font-semibold"}>Tournaments</div>
                        <ul className={"mt-2 list-disc pl-10"}>
                            <li className={"pb-1"}><span className={"font-semibold"}>19th</span> TypeRacerData Championship - January 2017</li>
                            <li className={"pb-1"}><span className={"font-semibold"}>9th</span> TypeRacerData Championship - February 2017</li>
                            <li className={"pb-1"}><span className={"font-semibold"}>13th</span> TypeRacerData Championship - March 2017</li>
                            <li className={"pb-1"}><span className={"font-semibold"}>16th</span> TypeRacerData Championship - April 2017</li>
                            <li className={"pb-1"}><span className={"font-semibold"}>6th</span> TypeRacerData Championship - May 2017</li>
                            <li className={"pb-1"}><span className={"font-semibold"}>4th</span> House of Typing Championship - May 2017</li>
                            <li className={"pb-1"}><span className={"font-semibold"}>4th</span> TypeRacerData Championship - June 2017</li>
                            <li className={"pb-1"}><span className={"font-semibold"}>8th</span> TypeRacerData Championship - July 2017</li>
                            <li className={"pb-1"}><span className={"font-semibold"}>9th</span> House of Typing Championship - August 2017</li>
                            <li className={"pb-1"}><span className={"font-semibold"}>17th</span> House of Typing Championship - September 2018</li>
                            <li className={"pb-1"}><span className={"font-semibold"}>9th</span> The Clicking Championship - February 2019</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

export default Typing;