import { useAppStore } from "@/store"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Chat = () => {
  
  const {userInfo} = useAppStore();
  const navigate = useNavigate();
  useEffect(() => {
    if(!userInfo.profileSetup){
      toast('umm i think you forgot to setup profile, do it to continue')
      navigate("/profile")
    }
  }, [userInfo, navigate])

  return (
    <div>
      Chat
    </div>
  )
}

export default Chat
