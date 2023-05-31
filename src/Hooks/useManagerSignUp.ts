import axios from "axios";
import { useEffect, useState } from "react";
import returnSignUp from "../Library/signUpReturn";
import { useNavigate } from "react-router";

const useManagerSignUp = () => {
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

  const format_time=(time:string)=>{
    const timeObj = new Date(`1970-01-01T${time}`);
    const hour = timeObj.getHours().toString().padStart(2, "0");
    const minute = timeObj.getMinutes().toString().padStart(2, "0");
    const formattedTime = `${hour}:${minute}:00`;
    return formattedTime;
  }

  const signup=async(laundry_name:string,phone_number:string,profile_picture:string,address:string,location:{lat:number,lng:number},opening_time:string,closing_time:string):Promise<returnSignUp>=>{
    isLoading(true);
    const result=await axios.patch('http://localhost:8000/api/manager/signup/'+email,{
      laundry_name:laundry_name,
      phone_number:phone_number,
      address:address,
      location:location,
      opening_time:format_time(opening_time),
      closing_time:format_time(closing_time),
      profile_picture:profile_picture
    }).then((res)=>{
      isLoading(false);
      setError("");
      console.log(res);
      return new returnSignUp(true,'manager');
    }).catch((err)=>{
      setError(err.response.data.message);
      isLoading(false);
      console.log(err);
      return  new returnSignUp(false,'manager');
    })
    return result;
  }

  return {loading,error,setError,signup};
}
 
export default useManagerSignUp;