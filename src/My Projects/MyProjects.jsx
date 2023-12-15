

const MyProjects = () => {
    return (
        <div>
            <div>
                <h1 className="text-5xl font-bold mt-10 mb-5">My Projects</h1>
                <hr className="h-2 bg-yellow-500 w-64" />
                <hr className="h-2 bg-yellow-500 w-72 mt-2 mb-10" />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <div className="border p-3">
                    <img className="border-black border-4 h-96 w-full  " src="https://i.ibb.co/7btdk13/img1.png" alt="" />
                    <h1 className="text-4xl mt-2">Life Connact website</h1>
                    <p className="my-5"><span className="text-lg font-bold">Details :</span> an online platform where people can choose her
                        life partner</p>
                    <p><span className="text-lg font-bold">Tecnology :</span> using the MERN stack</p>
                </div>
                <div className="border p-3">
                    <img className="border-black border-4 h-96 w-full " src="https://i.ibb.co/HxGff0f/img2.png" alt="" />
                    <h1 className="text-4xl mt-1">SearPlateNetwork website</h1>
                    <p className="my-5"><span className="text-lg font-bold">Details :</span> Community Food Sharing and Surplus
                        Reduction Platform
                    </p>
                    <p><span className="text-lg font-bold">Tecnology :</span> using the MERN stack</p>
                </div>
                <div className="border p-3">
                    <img className="border-black border-4 h-96 w-full " src="https://i.ibb.co/7R7y5fN/img3.png" alt="" />
                    <h1 className="text-4xl">CarZone website</h1>
                    <p className="my-5"><span className="text-lg font-bold">Details :</span> Car Brand website where customer founded new brand and expansive car
                    </p>
                    <p><span className="text-lg font-bold">Tecnology :</span> using the MERN stack</p>
                </div>
                <div className="border p-3">
                    <img className="border-black border-4 h-96 w-full " src="https://i.ibb.co/jVmT8K9/img4.png" alt="" />
                    <h1 className="text-4xl">Edu Traning Event website</h1>
                    <p className="my-5"><span className="text-lg font-bold">Details :</span> Edu traning event management website where users find some event to telatead Enducation
                    </p>
                    <p><span className="text-lg font-bold">Tecnology :</span> using the MERN stack</p>
                </div>
            </div>

        </div>
    );
};

export default MyProjects;