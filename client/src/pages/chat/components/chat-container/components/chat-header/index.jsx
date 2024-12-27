import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { getColor } from "@/lib/utils";
import { useAppStore } from "@/store"
import { HOST } from "@/utils/constants";
import { RiCloseFill } from "react-icons/ri"
const ChatHeader = () => {
  const { closeChat, selectedChatData, selectedChatType } = useAppStore();

  return (
    <div className="h-[10vh] border-b-2 border-[#2f303b] flex items-center justify-between px-8">
      <div className="flex gap-5 items-center w-full">
        <div className="flex gap-3 items-center flex-grow">
          <Avatar className="h-12 w-12 rounded-full overflow-hidden shadow-md">
            {selectedChatData.image ? (
              <AvatarImage
                src={`${HOST}${selectedChatData.image}`}
                alt="profile"
                className="object-cover w-full h-full bg-black"
              />
            ) : (
              <div
                className={`uppercase h-12 w-12 text-lg border-2 flex items-center justify-center rounded-full ${getColor(selectedChatData.color)}`}
              >
                {selectedChatData.firstName ? selectedChatData.firstName[0] : selectedChatData.email[0]}
              </div>
            )}
          </Avatar>
          <div className="flex flex-col justify-center">
            {selectedChatType === "contact" && selectedChatData.firstName ?
            `${selectedChatData.firstName} ${selectedChatData.lastName}` : selectedChatData.email}
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button className="text-neutral-500 focus:border-none focus:outline-none focus:text-white duration-300 transition-all" onClick={closeChat}>
            <RiCloseFill className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;
