import Link from "./Link";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

const Navigation = () => {

    const router = useRouter();

    const links = [
        { name: 'About', href: '/' },
        { name: 'Work', href: '/work' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
    ];

    const socials = [
        { icon: faEnvelope, url: 'mailto:contact@cameronct.com' },
        { icon: faTwitter, url: 'https://twitter.com/GNiKgg' },
        { icon: faGithub, url: 'https://github.com/CameronCT' }
    ];

    return (
        <>
            <div className="sticky top-0 mt-8 lg:mt-0 lg:h-screen shadow-xl bg-white p-6"> 
                <div className="grid grid-cols-1 gap-y-6 text-center">
                    <img className="border-4 lg:border-8 border-orange-500 mx-auto rounded-full w-28 h-28 md:w-32 md:h-32 lg:w-48 lg:h-48" src="/work/picture.jpg" alt="avatar" />
                    <div className="my-auto">
                        <div className="h1-alt">Cameron Touchette</div>
                        <div className="font-semibold uppercase lg:text-lg opacity-80 mt-1">Full Stack Developer</div>

                        <div className="flex justify-center space-x-6 mt-4 lg:mt-8">
                            {socials.map((social, index) => (
                                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="block w-5 h-5 lg:w-6 lg:h-6 text-orange-500 hover:text-orange-700 transition ease-in-out duration-300">
                                    <FontAwesomeIcon icon={social.icon} />
                                </a>
                            ))} 
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="bg-white bg-opacity-10 rounded-lg overflow-hidden md:px-6">
                        <div className="grid grid-cols-2 lg:grid-cols-1 bg-gray-200 gap-0.5 p-0.5 lg:bg-white lg:gap-0 lg:p-0">
                            {links.map((link, index) => (
                                <Link key={index} to={link.href} className={`${(index !== links.length - 1) && 'border-0 lg:border-b border-gray-200'} font-medium py-3 ${router.route === link.href ? 'bg-gray-200' : 'bg-white hover:bg-gray-200'} text-center transition ease-in-out duration-300`}>
                                    {link.name}
                                </Link> 
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation;