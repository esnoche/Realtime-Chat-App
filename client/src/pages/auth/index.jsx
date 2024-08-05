import Background from "@/assets/login3.png";
import Victory from "@/assets/victory.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useState } from "react";
import { toast } from "sonner";
import apiClient from "@/lib/api-client.js"
import { LOGIN_ROUTE, SIGNUP_ROUTE } from "@/utils/constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAppStore } from "@/store";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate()
  const { setUserInfo } = useAppStore()

  //validateSignup
  const validateSignup = () => {
    if(!email.length){
      toast.error("I need Email bruhh!")
      return false;
    }
    if(!password.length){
      toast.error("I also need the Password")
      return false;
    }
    if(confirmPassword != password){
      toast.error("Password and Confirm Password should be same.")
      return false;
    }
    return true;
  }

  //validateLogin
  const validateLogin = () => {
    if(!email.length){
      toast.error("I need Email bruhh!")
      return false;
    }
    if(!password.length){
      toast.error("I also need the Password")
      return false;
    }
    return true;
  }

  //handleLogin
  const handleLogin = async () => {
    if(validateLogin()) {
      const response = await apiClient.post(LOGIN_ROUTE, { email, password }, { withCredentials: true })
      if(response.data.user.id){
        setUserInfo(response.data.user)
        if(response.data.user.profileSetup){
          navigate("/chat")
        }else{
          navigate("/profile")
        }
      }
      console.log({ response })
    }
  };

  //handleSignin
  const handleSignup = async () => {
    if(validateSignup()){
      const response = await apiClient.post(SIGNUP_ROUTE, { email, password }, { withCredentials: true })
      if(response.status == 201){
        setUserInfo(response.data.user)
        navigate("/profile")
      }
      console.log({ response })
    }
  };

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center relative" style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-white opacity-30"></div>
      <div className="relative z-10 w-full h-full flex items-center justify-start pl-20 ml-20">
        <div className="bg-white bg-opacity-90 border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[60vw] lg:w-[40vw] xl:w-[30vw] rounded-3xl p-8 flex flex-col gap-10">
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center">
              <h1 className="text-5xl font-bold md:text-6xl">Welcome</h1>
              <img src={Victory} alt="Victory Emoji" className="h-[30px] md:h-[70px] ml-2" />
            </div>
            <div>
              <p className="font-medium text-center">What are you waiting for go ahead</p>
            </div>
            <div className="flex items-center justify-center w-full">
              <Tabs className="w-3/4" defaultValue="login">
                <TabsList className="bg-transparent rounded-none w-full flex justify-center">
                  <TabsTrigger value="login" className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]: font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300">Login</TabsTrigger>
                  <TabsTrigger value="signup" className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]: font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300">Signup</TabsTrigger>
                </TabsList>
                <TabsContent className="flex flex-col gap-5 mt-5" value="login">
                  <Input
                    placeholder="Email"
                    type="Email"
                    className="rounded-full p-6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    placeholder="Password"
                    type="Password"
                    className="rounded-full p-6"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button className="rounded-full p-6 bg-purple-500 hover:bg-purple-600 text-white" onClick={handleLogin}>Login</Button>
                </TabsContent>

                <TabsContent className="flex flex-col gap-5 mt-5" value="signup">
                  <Input
                    placeholder="Email"
                    type="Email"
                    className="rounded-full p-6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    placeholder="Password"
                    type="Password"
                    className="rounded-full p-6"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Input
                    placeholder="Confirm Password"
                    type="Password"
                    className="rounded-full p-6"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <Button className="rounded-full p-6 bg-purple-500 hover:bg-purple-600 text-white" onClick={handleSignup}>Signup</Button>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
        <div className="hidden xl:block w-1/3 h-full flex items-center justify-center ml-60">
          <dotlottie-player
            src="https://lottie.host/837c3a12-daee-4366-92a9-3e42d86a2d6d/LT3jThivBU.json"
            background="transparent"
            speed="1"
            style={{ width: '100%', height: '100%' }}
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
};

export default Auth;
