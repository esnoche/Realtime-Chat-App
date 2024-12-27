import { useAppStore } from "@/store"
import { Avatar, AvatarImage } from "./ui/avatar";
import { HOST } from "@/utils/constants";
import { getColor } from "@/lib/utils";


const ContactList = ({contacts, isChannel = false}) => {


    const {setSelectedChatData, selectedChatData, selectedChatType, setSelectedChatType,setSelectedChatMessages } = useAppStore();

    const handleClick = (contact) => {
        if (isChannel) setSelectedChatType("channel");
        else setSelectedChatType("contact");

        if (selectedChatData && selectedChatData._id !== contact._id) {
            setSelectedChatData(contact);
            setSelectedChatMessages([]);
        } else if (!selectedChatData || selectedChatData._id !== contact._id) {
            setSelectedChatData(contact);
            setSelectedChatMessages([]);
        }
    }

  return (
    <div className="mt-2 flex flex-col gap-2">
      {
        contacts.map((contact)=> (
            <div key={contact._id} className={`pl-12 pr-4 py-2 transition-all duration-300 cursor-pointer 
                ${selectedChatData && selectedChatData._id === contact._id
                  ? "bg-[#2a2b36] text-[#00BFFF] font-semibold"
                  : "bg-[#1b1c24] text-[#e0e0e0]"} 
                hover:bg-[#2a2b36]`}
                onClick={() => handleClick(contact)}
                >
                    <div className="flex gap-5 items-center justify-center text-neutral-300">
                        {
                            !isChannel && <div className="flex gap-3 items-center flex-grow">
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
                            {isChannel && (
                                    <div className="bg-[#ffffff22] h-10 w-10 flex items-center justify-center rounded-full">
                                        #
                                    </div>
                                    )}

                                    {isChannel ? (
                                    <span>{contact.name}</span>
                                    ) : (
                                    <span>{`${contact.firstName} ${contact.lastName}`}</span>
                                    )}
                          </div>
                        }
                    </div>
                    </div>
        ))
      }
    </div>
  )
}

export default ContactList
