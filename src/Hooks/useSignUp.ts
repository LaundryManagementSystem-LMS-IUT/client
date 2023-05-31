import axios from "axios";
import { useState } from "react";
import returnSignUp from "../Library/signUpReturn";

const useSignUp = () => {
  const [loading,isLoading]=useState(false);
  const [error,setError]=useState("");

  const signup=async(email:string,username:string,userType:string,password:string):Promise<returnSignUp>=>{
    isLoading(true);
    const result=await axios.post('http://localhost:8000/api/signup',{
      username:username,
      email:email,
      password:password,
      userType:userType
    }).then((res)=>{
      isLoading(false);
      setError("");
      console.log(res);
      localStorage.setItem('user',JSON.stringify({email:email,userType:userType}));
      return new returnSignUp(true,res.data.userType);
    }).catch((err)=>{
      setError(err.response.data.message);
      isLoading(false);
      console.log(err);
      return  new returnSignUp(false,"");
    })
    return result;
  }

  return {loading,error,setError,signup};
}
 
export default useSignUp;