const EmptyChatContainer = () => {
    return (
        <div className="flex-1 md:bg-[#1c1d25] md:flex flex-col justify-center items-center hidden duration-1000 transition-all">
            <div className="flex flex-col items-center">
                <dotlottie-player
                    src="https://lottie.host/dee35623-1a68-4d84-be7f-ea3a62555340/3rBx8vFv0Y.json"
                    background="transparent"
                    speed="1"
                    style={{ width: '350px', height: '350px' }}
                    loop
                    autoplay
                ></dotlottie-player>
                <div className="text-opacity-80 text-white flex items-center lg:text-4xl text-3xl transition-all duration-300 text-center">
                    <dotlottie-player
                        src="https://lottie.host/6259886d-6202-4bf6-8a3d-27db902cdd4d/Ed2IWr9xtP.json"
                        background="transparent"
                        speed="1"
                        style={{ width: '200px', height: '200px' }}
                        loop
                        autoplay
                    ></dotlottie-player>
                    <div className="flex flex-col items-start">
                        <h3 className="flex flex-row gap-1 poppins-medium">
                            <span>Welcome to</span>
                            <span className="bg-gradient-to-r from-[#2ECC71] to-[#F1C40F] bg-clip-text text-transparent text-4xl font-bold shadow-lg">
                                SpeedenChat
                            </span>

                        </h3>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default EmptyChatContainer;
