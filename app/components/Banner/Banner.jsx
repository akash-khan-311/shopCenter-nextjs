import Container from "../Shared/Container";


const Banner = () => {
    return (
        <header className=" banner">
            <Container>
           <div className="h-[500px]  flex bg-center flex-col-reverse bg-cover w-full">
           <div className="mb-5 w-10/12  text-white mx-auto">
                <h1 className="text-2xl lg:text-3xl font-serif">Introducing LWS Shop Center</h1>
                <p>Your whole week at a glance</p>
                <button className="bg-[#ffd160] hover:bg-[#e4be60]  w-60 mt-2 py-3 rounded-full text-center text-black">
                    Get the Weekly Kit
                </button>
            </div>
           </div>
            </Container>
        </header>

    );
};

export default Banner;