import React, { useEffect, useId, useRef, useState } from 'react';
import { useAppStore } from "@/store";
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { colors, getColor } from '@/lib/utils';
import { FaPlus, FaTrash } from "react-icons/fa";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Background from "@/assets/login4.png";
import { toast } from 'sonner';
import apiClient from '@/lib/api-client';
import { ADD_PROFILE_IMAGE_ROUTE, HOST, REMOVE_PROFILE_IMAGE_ROUTE, UPDATE_PROFILE_ROUTE } from '@/utils/constants';

const Profile = () => {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useAppStore();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);
  const fileInputRef = useRef(null);
  
  useEffect(() => {
    if(userInfo.profileSetup){
      setFirstName(userInfo.firstName);
      setLastName(userInfo.lastName);
      setSelectedColor(userInfo.color);
    }
    if(userInfo.image){
      const imageUrl = `${HOST}${userInfo.image}`;
      console.log('Image URL:', imageUrl);
      setImage(imageUrl);

    }
  }, [userInfo]);

  const validateProfile = () => {
    if(!firstName) {
      toast.error("First Name isrequired")
      return false;
    } 
    if(!lastName){
      toast.error("Last Name is Required")
      return false;
    }
    return true;
  }
    

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  const saveChanges = async () => {
    if(validateProfile()){
      try{
        const res = await apiClient.post(UPDATE_PROFILE_ROUTE, 
          {firstName, lastName, color:selectedColor},
          {withCredentials:true})
          if(res.status == 200 && res.data){
            setUserInfo({...res.data});
            toast.success("Hurrey Profile updated successfully")
            navigate("/chat");
          }
      }catch(err){
        console.log(err)
      }
    }
  };

  const handleNavigate = () => {
    if(userInfo.profileSetup){
      navigate("/chat")
    }else{
      toast.error("please setup the profile, buddy")
    }
  }

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  }

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
  
    if (file) {
      const formData = new FormData();
      formData.append("profile-image", file);
  
        const res = await apiClient.post(ADD_PROFILE_IMAGE_ROUTE, formData, { withCredentials: true });
  
        if (res.status == 200 && res.data.image) {
          setUserInfo({...userInfo, image: res.data.image})
          setImage(res.data.image);
          toast.success("Profile pic looks cool!");
        }
    }
  };
  

  const handleDeleteImage = async () => {
    try{
      const res = await apiClient.delete(REMOVE_PROFILE_IMAGE_ROUTE, {withCredentials: true});
      if(res.status==200){
        setUserInfo({...userInfo, image: null});
        toast.success("Image removed successfully")
        setImage(null)
      }
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className='h-screen flex items-center justify-center bg-cover bg-center' style={{ backgroundImage: `url(${Background})` }}>
      <div className='bg-gray-800/90 p-10 rounded-lg w-full max-w-4xl shadow-lg'>
        <div className='flex flex-col md:flex-row gap-10'>
          <div className='flex flex-col gap-10 w-full md:w-3/4'>
            <div className='flex items-center'>
              <IoArrowBack className='text-3xl text-gray-300 cursor-pointer' onClick={() => navigate(-1)} />
              <h2 className='ml-4 text-2xl font-semibold text-gray-300'>Profile</h2>
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <div className='relative flex items-center justify-center'
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              >
                <Avatar className="h-32 w-32 md:h-48 md:w-48 rounded-full overflow-hidden shadow-md">
                  {
                    image ? (
                      <AvatarImage src={image} alt="profile" className="object-cover w-full h-full bg-black" />
                    ) : (
                      <div className={`uppercase h-32 w-32 md:w-48 md:h-48 text-5xl border-2 flex items-center justify-center rounded-full ${getColor(selectedColor)}`}>
                        {firstName ? firstName[0] : userInfo.email[0]}
                      </div>
                    )
                  }
                </Avatar>
                {
                  hovered && (
                    <div className='absolute insert-0 flex items-center justify-center bg-black/50 rounded-full cursor-pointer'
                      style={{ width: '70%', height: '90%' }}
                      onClick={image ? handleDeleteImage: handleFileInputClick}>
                      {
                        image ? <FaTrash className='text-white' size={48} /> : <FaPlus className='text-white' size={48} />
                      }
                    </div>
                  )
                }
                <input type="file" ref={fileInputRef} className='hidden' onChange={handleImageChange} name='profile-image' accept='.png, .jpg, .jpeg, .svg, .webp' />
              </div>
              <div className='flex flex-col gap-5 text-gray-300'>
                <Input placeholder="Email" type="email" disabled value={userInfo.email} className="rounded-lg p-4 bg-gray-700 border-none text-gray-300" />
                <Input placeholder="First Name" type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} className="rounded-lg p-4 bg-gray-700 border-none text-gray-300" />
                <Input placeholder="Last Name" type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} className="rounded-lg p-4 bg-gray-700 border-none text-gray-300" />
                <div className='flex gap-5'>
                  {
                    colors.map((color, index) => (
                      <div className={`${color} h-8 w-8 rounded-full cursor-pointer transition-all duration-300 ${selectedColor === index ? "outline outline-white/50 outline-2" : ""}`}
                        key={index} onClick={() => setSelectedColor(index)}>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <Button className="h-12 w-full bg-blue-600 text-white rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700 transform hover:scale-105" onClick={saveChanges}>
              Save Changes
            </Button>
          </div>
          <div className='hidden md:flex items-center justify-center w-1/4'>
            <dotlottie-player src="https://lottie.host/485f050b-b27d-4f43-91ea-4d5c82ee1915/t1bAjfq2NZ.json" background="transparent" speed="1" style={{ width: 300, height: 300 }} loop autoplay></dotlottie-player>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
