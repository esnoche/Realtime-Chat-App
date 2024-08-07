import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import apiClient from "@/lib/api-client.js";
import { HOST, SEARCH_CONTACTS_ROUTES } from "@/utils/constants";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { getColor } from "@/lib/utils.js";
import { useAppStore } from "@/store";

const NewDM = () => {
  const {setSelectedChatType, setSelectedChatData} = useAppStore();
  const [openNewContactModel, setOpenNewContactModel] = useState(false);
  const [searchedContacts, setsearchedContacts] = useState([]);

  const seachContacts = async (searchT) => {
    try {
      if (searchT.length > 0) {
        const res = await apiClient.post(SEARCH_CONTACTS_ROUTES, { searchT }, { withCredentials: true });
        if (res.status == 200 && res.data.contacts) {
          console.log('Contacts:', res.data.contacts); // Debug log
          setsearchedContacts(res.data.contacts);
        }else {
          console.warn('Unexpected response format:', res.data);
          setsearchedContacts([]);
        }
      } else {
        setsearchedContacts([]);
      }
    } catch (err) {
      console.error('Error fetching contacts:', err);
    }
  };
  
  const selectNewContact = (contact)=>{
    setOpenNewContactModel(false)
    setSelectedChatType("contact")
    setSelectedChatData(contact)
    setsearchedContacts([])

  }

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <FaPlus
              className="text-neutral-400 font-light text-opacity-90 text-sm hover:text-neutral-100 cursor-pointer transition-all duration-300"
              onClick={() => setOpenNewContactModel(true)}
            />
          </TooltipTrigger>
          <TooltipContent className="bg-[#1c1b1e] border-none mb-2 p-3 text-white">
            Select new contact
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <Dialog
        open={openNewContactModel}
        onOpenChange={setOpenNewContactModel}
      >
        <DialogContent className="bg-[#181920] border-none text-white w-[400px] h-[400px] flex flex-col p-4">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              Please select the contact
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div >
            <Input
              placeholder="Search Contacts"
              className="rounded-lg p-4 bg-[#2c2e3b] border-none w-full"
              onChange={(e) => seachContacts(e.target.value)}
            />
          </div>
          <ScrollArea className="h-[250px]">
            <div className="flex flex-col gap-5">
              {searchedContacts.map((contact) => (
                <div key={contact._id} className="flex gap-3 items-center cursor-pointer"
                onClick={()=> selectNewContact(contact)}
                >
                  <Avatar className="h-12 w-12 rounded-full overflow-hidden shadow-md">
                    {contact.image ? (
                      <AvatarImage
                        src={`${HOST}${contact.image}`}
                        alt="profile"
                        className="object-cover w-full h-full bg-black"
                      />
                    ) : (
                      <div
                        className={`uppercase h-12 w-12 text-lg border-2 flex items-center justify-center rounded-full ${getColor(contact.color)}`}
                      >
                        {contact.firstName ? contact.firstName[0] : contact.email[0]}
                      </div>
                    )}
                  </Avatar>
                  <div className="flex flex-col">
                    <span>
                      {contact.firstName && contact.lastName
                        ? `${contact.firstName} ${contact.lastName}`
                        : contact.email}
                    </span>
                    <span className="text-xs">{contact.email}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {searchedContacts.length <= 0 && (
            <div className="flex-1 flex flex-col justify-center items-center transition-all duration-1000">
              <div className="flex flex-col items-center mt-5">
                <dotlottie-player
                  src="https://lottie.host/dee35623-1a68-4d84-be7f-ea3a62555340/3rBx8vFv0Y.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "125px", height: "125px" }}
                  loop
                  autoplay
                ></dotlottie-player>
                <div className="text-opacity-80 text-white flex items-center text-2xl transition-all duration-300 text-center ">
                  <dotlottie-player
                    src="https://lottie.host/6259886d-6202-4bf6-8a3d-27db902cdd4d/Ed2IWr9xtP.json"
                    background="transparent"
                    speed="1"
                    style={{ width: "110px", height: "100px" }}
                    loop
                    autoplay
                  ></dotlottie-player>
                  <div className="flex flex-col items-start ">
                    <h3 className="flex flex-row gap-1 font-medium">
                      <span>Search new</span>
                      <span className="bg-gradient-to-r from-[#2ECC71] to-[#F1C40F] bg-clip-text text-transparent text-2xl font-bold shadow-lg">
                        contact.
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NewDM;
