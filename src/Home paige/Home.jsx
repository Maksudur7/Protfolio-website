import { Link } from "react-router-dom";
import MyProjects from "../My Projects/MyProjects";
import { FaSquareFacebook, FaLinkedin, FaGithub } from 'react-icons/fa6';
const Home = () => {

    return (
        <div>
            <div className="hero min-h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/sgydhZx/business-man-computer-hand-close-260nw-2059017617-1.png)' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="w-full text-center text-neutral-content">
                    <div className="w-full grid md:grid-cols-2  gap-10 ">
                        <div className="w-full mx-auto  text-start md:pl-20 pl-10">
                            <h1 className="text-4xl">Hi</h1>
                            <h1 className="text-7xl font-bold">I`m Maksudur Rahaman</h1>
                            <h1 className="text-5xl font-bold">Web Devloper</h1>
                            <div className="flex gap-10 md:ml-0 ml-20 mb-5">
                                <a href="/MaksudurRahamanResume.pdf" download="/MaksudurRahamanResume.pdf">
                                    <button className="btn btn-outline btn-info mt-5">Downlod CV</button>
                                </a>
                                <Link to={`/about`}>
                                    <button className="btn btn-outline btn-info mt-5">About Me</button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full mt-5">
                            <div className="flex justify-center items-center text-end">
                                <img className="h-64 w-52 border-white border-4 rounded-tl-3xl rounded-br-3xl" src="https://i.ibb.co/FwJrLPy/IMG-1926-removebg-preview.png" alt="" />

                            </div>
                            <div className="mt-5 text-center flex items-center justify-center gap-5">
                                <a href="https://www.facebook.com/sm.maksudur.71"><FaSquareFacebook className="text-3xl" /></a>
                                <a href="https://www.linkedin.com/in/maksudur-rahaman-7591b8239/"><FaLinkedin className="text-3xl" /></a>
                                <a href="https://github.com/Maksudur7"><FaGithub className="text-3xl" /></a>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <MyProjects></MyProjects>
        </div>
    );
};

export default Home;