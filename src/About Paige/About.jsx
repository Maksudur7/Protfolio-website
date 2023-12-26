

import { Link } from 'react-router-dom';
import './Css file/Makup.css';

const About = () => {
    return (
        <div className='bg-gray-200 p-10'>
            <div className=" w-full h-full " >
                <div className="about-loren">
                    <h1 className='text-5xl font-bold mt-10 mb-5'>About Me</h1>
                    <hr className="h-2 bg-blue-400 w-64" />
                    <hr className="h-2 bg-blue-400 w-72 mt-2 mb-10" />
                    <p>Hi ! I am a Web developer . I worked some web language and some frameworks laik javaScript, react js, node js, mongodb, firebase etc. I do some projects to using the MERN stack.

                    </p>
                </div>
                <div className=" grid md:grid-cols-2 gap-20">
                    <div className="about-dittles-rank">
                        <table>
                            <tr className='grid md:grid-cols-2 gap-5'>
                                <td><strong>Email:</strong> maksudurr538@gmail.com</td>
                                <td><strong>Phone:</strong> 01315906086</td>
                            </tr>
                            <tr className='grid md:grid-cols-2 gap-5'>
                                <td><strong>Github:</strong> <a href="https://github.com/Maksudur7">https://github.com/Maksudur7</a></td>
                                <td><strong>Facebook:</strong> <a href="https://www.facebook.com/sm.maksudur.71">https://www.facebook.com/sm.maksudur.71</a></td>
                            </tr>
                            <tr className='grid md:grid-cols-2 gap-5'>
                                <td><strong>City:</strong> Barishal, Bangladesh</td>
                                <td><strong>Presentaddress:</strong> Barishal,Rupatoli</td>
                            </tr>
                        </table>
                        <div className="flex gap-10">
                            <a href="../../public/Bio_data.pdf" download='../../public/Bio_data.pdf'>
                                <button className="btn btn-outline btn-info mt-5">Downlod CV</button>
                            </a>
                            <Link to={`/contact`}><button className="btn btn-outline btn-info mt-5">Hire Me</button></Link>
                        </div>
                    </div>
                    <div>
                        <div className="position">
                            <p>Html</p>
                            <p>100%</p>
                        </div>
                        <div className="color w-[100%]" >
                            <div className="color2 w-[100%]">
                            </div>

                        </div>
                        <div className="position">
                            <p>Tailwind CSS</p>
                            <p>100%</p>
                        </div>
                        <div className="color">
                            <div className="color2 w-[100%]">
                            </div>

                        </div>
                        <div className="position">
                            <p>JavaScript</p>
                            <p>80%</p>
                        </div>
                        <div className="color">
                            <div className="color2 w-[80%]" >
                            </div>

                        </div>
                        <div className="position">
                            <p>Framworks</p>
                            <p>80%</p>
                        </div>
                        <div className="color">
                            <div className="color2 w-[80%]">
                            </div>

                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 ">

                </div>
                <div className="grid md:grid-cols-2 ">
                    <div>
                        <h1 className='mt-10'>Education</h1>
                        <div className="education">
                            <div className="education-line2 h-[500px] md:ml-10">
                                <div className="educaton-dot"></div>
                                <div className="educaton-dot"></div>
                            </div>
                            <div className="education-loren">
                                <div className="education-loren-dittles">
                                    <p>2021-2024</p>
                                    <h3>Diploma in Computer Science</h3>
                                    <p>Barishal Polytecnic Inistitute</p>
                                    <p>Barishal Sador, Barishal, Bangladesh</p>
                                </div>
                                <div className="education-loren-dittles">
                                    <p>2019-2020</p>
                                    <h3>SSC in science</h3>
                                    <p>Z.A.Bhuttro Secondary School</p>
                                    <p>jhalokati, Nalchity, Barishal, Bangladesh </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:mt-0 -mt-72'>
                        <h1 className='ml-20 mt-10'>Experience</h1>
                        <div className='exprience'>
                            <div className="education-line md:ml-10">
                                <div className="educaton-dot"></div>
                                <div className="educaton-dot"></div>
                                <div className="educaton-dot"></div>
                            </div>
                            <div className="w-96">
                                <div className=" md:w-full w-96 ml-5">
                                    <h3>Life Connact website</h3>
                                    <p className="my-5"><span className="text-lg font-bold">Details :</span> an online platform where people can choose her life partner and create a new life
                                    </p>
                                    <p><span className="text-lg font-bold">Tecnology :</span> using the MERN stack</p>
                                    <p><span className="text-lg font-bold">Live Link :</span> <a href="https://maragewebsit.web.app/">https://maragewebsit.web.app/</a></p>
                                </div>
                                <div className=" md:w-full w-96 ml-5 mt-16">
                                    <h3>SearPlateNetwork website</h3>
                                    <p className="my-5"><span className="text-lg font-bold">Details :</span> Community Food Sharing and Surplus
                                        Reduction Platform where people sear her wasted food some poor people
                                    </p>
                                    <p><span className="text-lg font-bold">Tecnology :</span> using the MERN stack</p>
                                    <p><span className="text-lg font-bold">Live Link :</span> <a href="https://assinment11-6b44f.web.app/">https://assinment11-6b44f.web.app/</a></p>
                                </div>
                                <div className=" md:w-full w-80 ml-5 mt-6">
                                    <h3>CarZone website</h3>
                                    <p className="my-5"><span className="text-lg font-bold">Details :</span>Car Brand website where customer founded new brand and expansive car.
                                    </p>
                                    <p><span className="text-lg font-bold">Tecnology :</span> using the MERN stack</p>
                                    <p><span className="text-lg font-bold">Live Link :</span><a href='https://condemned-discovery.surge.sh/'> https://condemned-discovery.surge.sh</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;