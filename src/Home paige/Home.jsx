import { Link } from "react-router-dom";
import MyProjects from "../My Projects/MyProjects";
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

                        </div>
                        <div className="w-full ">
                            <div className="flex justify-center items-center text-end">
                                <img className="h-64 w-52 border-black border-4 rounded-tl-3xl rounded-br-3xl" src="https://i.ibb.co/hZ1HqGr/379503887-819969059609509-9030902362550849252-n.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-10 ml-20 mb-5">
                        <a href="../../public/Bio_data.pdf" download='../../public/Bio_data.pdf'>
                            <button className="btn btn-outline btn-info mt-5">Downlod CV</button>
                        </a>
                        <Link to={`/about`}>
                            <button className="btn btn-outline btn-info mt-5">About Me</button>
                        </Link>
                    </div>
                </div>
            </div>
            <MyProjects></MyProjects>
        </div>
    );
};

export default Home;