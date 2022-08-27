import MessageBoard from "../large components/MessageBoard";
import MessagesContext from "../contexts/MessagesContext";
import { useContext } from "react";
import LoginForm from "../large components/LoginForm";

const LoginPage = () => {
   const arr = useContext(MessagesContext);
   return (<div>
      {/*<MessageBoard messages={messages} handleLike={arr[0]} handleReport={arr[1]} handleDelete={arr[2]} */}
      <LoginForm />
   </div>);
}

export default LoginPage;