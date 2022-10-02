import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function toastify (message) {
   toast(message, {
     position: "top-center",
     autoClose: 5000,
     hideProgressBar: true,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
   }); 
 }

export function toastifySuccess (message) {
   toast.success(message, {
     position: "top-center",
     autoClose: 5000,
     hideProgressBar: true,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
   }); 
 }

