
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
    return (
        <Main meta={<Meta title="Welcome 👋"/>}>
            <div className="grid grid-cols-1 gap-12">
                <div className="border-b-2 border-opacity-10 border-black pb-12">
                    <div className="mb-8 -ml-2">
                        <h1>👋Welcome</h1>
                    </div>
                    <div className="bg-white rounded-xl p-8">
                        <p>
                            Hello! I am a <span className="font-semibold text-orange-500">Full Stack Developer</span>.
                            <br/><br/>
                            My main passion is web-game development, however I regularly make portfolio sites for friends, contribute to other projects including my own or just game out.
                            <br/><br/>
                            In 2017, I became a pro-level typist formerly having a <span className="font-semibold text-orange-500">world record</span> with 267 words per minute on TypeRacer. Though technically it was the <span className="font-semibold">second highest</span> speed at the time, <i>buuuuuuuut</i> I recorded it first so... {'>:)'}
                            <br/><br/>
                            Two years later in 2019 I also became a <span className="font-semibold text-orange-500">professional esports player</span> when I qualified for the Quake Pro League in Lucca, Italy. Though I later travelled to Katowice, Poland for IEM Katowice 2020 where I got relegated from the league just as fast!
                        </p>
                    </div>
                </div>

                <div>
                    <div className="mb-8 -ml-2">
                        <h2>🔥Goals</h2>
                    </div>
                    <div className="bg-white rounded-xl p-8">
                        Inside and outside of my work and projects I am always looking for new challenges and opportunities to grow and improve. 
                        Here's a list of things that I'm working on:
                        <ul>
                            <li>Learning Unreal Engine 5</li>
                            <li>Learning C++</li>
                            <li>Designing in Figma</li>
                            <li>Better UI/UX Practices</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="mb-8 -ml-2">
                        <h2>📙Knowledge</h2>
                    </div>
                    <div className="bg-white rounded-xl p-8">
                        Over the past 8 years I've had a lot of experience working with a variety of "tech". Below you will find a list of languages that I've had the opportunity to release a project with, or have contributed to another project with at some point or another:
                        <ul>
                            <li>HTML5 / CSS3</li>
                            <li>CSS Frameworks: Bootstrap v3/v4, Bulma and Tailwind (v1/v2/v3)</li>
                            <li>Javascript Frameworks: Vanilla, jQuery, React, Next, Node & TypeScript</li>
                            <li>PHP Frameworks: SmartyPHP, Twig and ezPHP</li>
                            <li>Database Management: MySQL, MariaDB, RethinkDB & MongoDB</li>
                            <li>Webservers: Nginx & Apache</li>
                            <li>Linux OS: Ubuntu and CentOS</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            
        </Main>
    );
};

export default Index;
