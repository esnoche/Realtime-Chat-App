import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { getColor } from "@/lib/utils";
import { useAppStore } from "@/store"
import { HOST, LOGOUT_ROUTE } from "@/utils/constants";
import { FiEdit2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { IoLogOut } from "react-icons/io5"
import apiClient from "@/lib/api-client";

const ProfileInfoComponent = () => {

  const { userInfo, setUserInfo } = useAppStore();
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const res = await apiClient.post(LOGOUT_ROUTE, {}, { withCredentials: true })
      if (res.status == 200) {
        navigate("/auth")
        setUserInfo(null);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="absolute bottom-0 h-24 flex items-center px-8 w-full bg-gray-800">
      <div className="flex gap-3 items-center justify-center">
        <div className="w-12 h-12 relative">
          <Avatar className="h-12 w-12 rounded-full overflow-hidden shadow-md">
            {
              userInfo.image ? (
                <AvatarImage src={`${HOST}${userInfo.image}`} alt="profile" className="object-cover w-full h-full bg-black" />
              ) : (
                <div className={`uppercase h-12 w-12 text-lg border-2 flex items-center justify-center rounded-full ${getColor(userInfo.color)}`}>
                  {userInfo.firstName ? userInfo.firstName[0] : userInfo.email[0]}
                </div>
              )
            }
          </Avatar>
        </div>
        <div className="text-white text-base font-semibold">
          {userInfo.firstName && userInfo.lastName ? `${userInfo.firstName} ${userInfo.lastName}` : ""}
        </div>
        <div className="flex gap-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <FiEdit2 className="text-blue-400 text-xl cursor-pointer" 
                onClick={() => navigate("/profile")} />
              </TooltipTrigger>
              <TooltipContent className="bg-gray-900 border-none text-white font-medium">Edit Profile</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <IoLogOut className="text-red-500 text-2xl cursor-pointer hover:text-red-400 transition-all duration-300 ease-in-out" 
                onClick={logout} />
              </TooltipTrigger>
              <TooltipContent className="bg-gray-900 border-none text-white font-medium">Logout</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfoComponent
