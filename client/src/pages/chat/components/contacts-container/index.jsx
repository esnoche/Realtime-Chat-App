import { useEffect } from "react";
import NewDM from "./components/new-dm";
import ProfileInfoComponent from "./components/profile-info";
import apiClient from "@/lib/api-client";
import { GET_DM_CONTACTS_ROUTES } from "@/utils/constants";
import { useAppStore } from "@/store";
import ContactList from "@/components/contact-list";

const ContactsContainer = () => {

  const {directMeassagesContacts, setDirectMeassagesContacts, } = useAppStore();

  useEffect(() => {
    const getContacts = async () => {
      try{
        const res = await apiClient.get(GET_DM_CONTACTS_ROUTES, {withCredentials:true})
    
    if(res.data.contacts){
      setDirectMeassagesContacts(res.data.contacts);
    } else{
      console.log("no contact found in res")
    }
      }catch(err){
        console.log(err);
      }
      
  }
  getContacts();
  },[setDirectMeassagesContacts])

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
        <div className="my-2">
            <div className="flex justify-between items-center px-8">
                <Title text="Direct messages"/>
                <NewDM />
            </div>
            <div className="max-h-[38vh] overflow-y-auto scrollbar-hidden">
              <ContactList contacts={directMeassagesContacts}/>
            </div>
        </div>
        <div className="my-2">
            <div className="flex items-center px-8">
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
      <h6 className="uppercase tracking-widest text-neutral-400 font-light text-opacity-90 text-sm text-left">
        {text}
      </h6>
    );
  };
  