import { Link } from "react-router-dom";

const BackButton = () => {
   return (
      <btn>
         <Link to="/MessageBoard" class=" text-decoration-none p-2 btn btn-outline-dark" style={{width:85}}>
            <span> <i>&#x2190;</i> Home </span>
         </Link>
      </btn>
   );
}

export default BackButton;