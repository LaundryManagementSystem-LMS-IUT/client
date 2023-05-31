import axios from "axios";
import { useEffect, useState } from "react";
import returnSignUp from "../Library/signUpReturn";
import { useNavigate } from "react-router";

const useCustomerSignUp = () => {
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


  const signup=async(phone_number:string,profile_picture:string,address:string,location:{lat:number,lng:number}):Promise<returnSignUp>=>{
    isLoading(true);
    const result=await axios.patch('http://localhost:8000/api/customer/signup/'+email,{
      phone_number:phone_number,
      address:address,
      location:location,
      profile_picture:profile_picture
    }).then((res)=>{
      isLoading(false);
      setError("");
      console.log(res);
      return new returnSignUp(true,'customer');
    }).catch((err)=>{
      setError(err.response.data.message);
      isLoading(false);
      console.log(err);
      return  new returnSignUp(false,'customer');
    })
    return result;
  }

  return {loading,error,setError,signup};
}
 
export default useCustomerSignUp;