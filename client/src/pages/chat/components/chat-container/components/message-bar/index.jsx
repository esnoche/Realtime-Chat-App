import { useSocket } from "@/context/SocketContext";
import { useAppStore } from "@/store";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";
import { GrAttachment } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
import { RiEmojiStickerLine } from "react-icons/ri";

const MessageBar = () => {
    const emojiRef = useRef();
    const socket = useSocket();
    const { selectedChatType, selectedChatData, userInfo } = useAppStore();

    const [message, setMessage] = useState("");
    const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);

    useEffect(() => {
        function handleClickOutside(event) {
            if (emojiRef.current && !emojiRef.current.contains(event.target)) {
                setEmojiPickerOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [emojiRef]);

    const handleAddEmoji = (emoji) => {
        setMessage((msg) => msg + emoji.emoji);
    };

const handleSendMsg = async () => {
    if (message.trim() === "") return; // Prevent sending empty messages
    if (selectedChatType === "contact") {
        if (socket) { // Ensure socket is not null
            socket.emit("sendMessage", {
                sender: userInfo.id,
                content: message,
                recipient: selectedChatData._id,
                messageType: "text",
                fileUrl: undefined,
            });
            setMessage(""); // Clear the message input after sending
        } else {
            console.error("Socket is not initialized");
        }
    }
};


    return (
        <div className="h-[5vw] bg-[#1c1d25] flex justify-center items-center px-8 gap-6">
            <div className="flex-1 flex bg-[#2a2b33] rounded-xl items-center gap-5 pr-5">
                <input
                    type="text"
                    className="flex-1 p-5 bg-transparent rounded-xl focus:border-none focus:outline-none"
                    placeholder="Enter Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className="text-neutral-500 focus:border-none focus:outline-none focus:text-white duration-300 transition-all">
                    <GrAttachment className="text-2xl" />
                </button>
                <div className="relative">
                    <button
                        className="text-neutral-500 focus:border-none focus:outline-none focus:text-white duration-300 transition-all"
                        onClick={() => setEmojiPickerOpen(true)}
                        ref={emojiRef}
                    >
                        <RiEmojiStickerLine className="text-2xl" />
                    </button>
                    {emojiPickerOpen && (
                        <div className="absolute bottom-16 right-0">
                            <EmojiPicker
                                pickerStyle={{ width: '100%' }}
                                onEmojiClick={handleAddEmoji}
                                disableAutoFocus={true}
                            />
                        </div>
                    )}
                </div>
            </div>
            <button
                className="bg-[#8417ff] rounded-full flex items-center justify-center p-5 focus:border-none hover:bg-[#741bda] focus:bg-[#741bda] focus:outline-none focus:text-white duration-300 transition-all"
                onClick={handleSendMsg}
            >
                <IoSend className="text-2xl" />
            </button>
        </div>
    );
};

export default MessageBar;
