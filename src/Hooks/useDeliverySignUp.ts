import axios from "axios";
import { useEffect, useState } from "react";
import returnSignUp from "../Library/signUpReturn";
import { useNavigate } from "react-router";

const useDeliverySignUp = () => {
  const navigate=useNavigate();
  const [loading,isLoading]=useState(false);
  const [error,setError]=useState("");
  const [email,setEmail]=useState("");
  const user:string|null=localStorage.getItem("user");
  useEffect(()=>{
    if(user!==null){
      setEmail(JSON.parse(user).email);
    }
    else{
      navigate('/signup');
    }
  },[])

  const signup=async(phone_number:string,profile_picture:string):Promise<returnSignUp>=>{
    isLoading(true);
    const result=await axios.patch('http://localhost:8000/api/delivery/signup/'+email,{
      phone_number:phone_number,
      profile_picture:profile_picture
    }).then((res)=>{
      isLoading(false);
      setError("");
      console.log(res);
      return new returnSignUp(true,'delivery');
    }).catch((err)=>{
      setError(err.response.data.message);
      isLoading(false);
      console.log(err);
      return  new returnSignUp(false,'delivery');
    })
    return result;
  }

  return {loading,error,setError,signup};
}
 
export default useDeliverySignUp;