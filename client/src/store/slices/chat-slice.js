
export const createChatSlice =(set, get) => ({
    selectedChatType:undefined,
    selectedChatData:undefined,
    selectedChatMessages:[],
    directMeassagesContacts:[],
    setSelectedChatType: (selectedChatType) => set({selectedChatType}),
    setSelectedChatData: (selectedChatData) => set({selectedChatData}),
    setSelectedChatMessages: (selectedChatMessages)=> set({selectedChatMessages}),
    setDirectMeassagesContacts: (directMeassagesContacts)=> set({directMeassagesContacts}),
    closeChat: () => set({selectedChatData:undefined,selectedChatType:undefined, selectedChatMessages:[]}),
    addMessage: (message) => {
        const selectedChatMessages = get().selectedChatMessages;
        const selectedChatType = get().selectedChatType;
      
        console.log("Adding message to state: ", message);
      
        set({
          selectedChatMessages: [
            ...selectedChatMessages,
            {
              ...message,
              recipient: selectedChatType === "channel" ? message.recipient : message.recipient._id,
              sender: selectedChatType === "channel" ? message.sender : message.sender._id,
            },
          ],
        });
      }
})