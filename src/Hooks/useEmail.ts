import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export const useEmail=()=>{
  const [email,setEmail]=useState("");
  const navigate=useNavigate();
  useEffect(()=>{
    const result=localStorage.getItem("user");
    if(!result){
       navigate('/');
    }
    else{
      setEmail(JSON.parse(result).email);
    }
  },[])


  return {email};
}