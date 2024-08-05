import React, { Children, useEffect, useState } from "react";
import { Button } from "./components/ui/button"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/auth";
import Chat from "./pages/chat";
import Profile from "./pages/profile";
import { useAppStore } from "./store";
import apiClient from "./lib/api-client";
import { GET_USER_INFO } from "./utils/constants";

const PrivateRoute = ({ children }) =>{
  const {userInfo} = useAppStore();
  const isAuthenticate = !!userInfo;
  return isAuthenticate ? children : <Navigate to="/auth" />
}

const AuthRoute = ({ children }) =>{
  const {userInfo} = useAppStore();
  const isAuthenticate = !!userInfo;
  return isAuthenticate ? <Navigate to="/chat" /> : children;
}

const App = () => {
  
  const {userInfo, setUserInfo} = useAppStore();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUserData = async () =>{
      try{
        const res = await apiClient.get(GET_USER_INFO, {withCredentials: true});
        if(res.status==200 && res.data.id){
          setUserInfo(res.data)
        }else{
          setUserInfo(undefined)
        }
        console.log({res})
      }catch(err){
        setUserInfo(undefined)
      }finally{
        setLoading(false)
      }
    }
    if(!userInfo){
      getUserData();
    }else{
      setLoading(false);
    }
  }, [userInfo,setUserInfo])

  if(loading){
    return <div>Loading...</div>
  }
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/auth" element={<AuthRoute>
      <Auth/>
      </AuthRoute>
    }>

    </Route>
    <Route path="/chat" element={<PrivateRoute>
      <Chat></Chat>
    </PrivateRoute>}>
    
    </Route>
    <Route path="/profile" element={<PrivateRoute>
      <Profile></Profile>
    </PrivateRoute>}>
    
    </Route>
    <Route path="*" element={<Navigate to={"/auth"}/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;