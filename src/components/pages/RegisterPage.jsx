import MessageBoard from "../large components/MessageBoard";
import MessagesContext from "../contexts/MessagesContext";
import { useContext } from "react";
import RegisterForm from "../large components/RegisterForm";

const RegisterPage = ({ messages }) => {
   const arr = useContext(MessagesContext);
   return (<div>
      {/*<MessageBoard messages={messages} handleLike={arr[0]} handleReport={arr[1]} handleDelete={arr[2]} />*/}
      <RegisterForm />
   </div>);
}

export default RegisterPage;