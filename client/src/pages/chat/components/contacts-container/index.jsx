import ProfileInfoComponent from "./components/profile-info";

const ContactsContainer = () => {
    return (
      <div className="relative md:w-[35vw] xl:w-[20vw] bg-[#1b1c24] border-r-2 border-[#2f303b] w-full ">
        <div className="flex items-center">
          <dotlottie-player
            src="https://lottie.host/399cb9c3-8fed-4ab7-88d3-aab401d29065/Q91gfmWOHY.json"
            background="transparent"
            speed="1"
            style={{ width: "100px", height: "100px" }}
            loop
            autoplay
          ></dotlottie-player>
            <div className="text-3xl font-bold text-[#00BFFF]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                SpeedenChat
            </div>
        </div>
        <div className="my5">
            <div className="flex items-center justify-center pr-10">
                <Title text="Direct messages"/>
            </div>
        </div>
        <div className="my5">
            <div className="flex items-center justify-center pr-20 mr-3">
                <Title text="Channels"/>
            </div>
        </div>
        <ProfileInfoComponent />
      </div>
    )
  }
  
  export default ContactsContainer;
  

  const Title = ({ text }) => {
    return (
      <h6 className="uppercase tracking-widest text-neutral-400 font-light text-opacity-90 text-sm text-left pt-3">
        {text}
      </h6>
    );
  };
  