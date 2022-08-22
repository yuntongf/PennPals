import { Link } from "react-router-dom";

const BackButton = () => {
   return (
      <btn>
         <a href="/MessageBoard" className=" text-decoration-none p-2 btn btn-sm btn-outline-dark" style={{ width: 50 }}>
            <span> <i>&#x2190;</i> </span>
         </a>
      </btn>
   );
}

export default BackButton;