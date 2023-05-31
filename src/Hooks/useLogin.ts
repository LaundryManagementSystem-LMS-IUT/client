import axios from "axios"
import { useState } from "react";
import returnSignUp from "../Library/signUpReturn";

export const useLogin=()=>{
  const [loading,isLoading]=useState(false);
  const [error,setError]=useState("");
  const login=async(email:string,password:string):Promise<returnSignUp>=>{
    const result=await axios.post('http://localhost:8000/api/login',{
      email:email,
      password:password
    }).then((res)=>{
      isLoading(false);
      setError("");
      console.log(res);
      localStorage.setItem('user',JSON.stringify({email:email}));
      return new returnSignUp(res?.data?.success,res.data.userType);
    }).catch((err)=>{
      setError(err.response.data.message);
      isLoading(false);
      console.log(err);
      return  new returnSignUp(null,"");
    });
    return result;
  }

  return {loading,error,setError,login};
}