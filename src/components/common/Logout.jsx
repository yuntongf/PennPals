import { Component } from 'react';
import auth from "../../services/AuthService"

class Logout extends Component {
   componentDidMount() {
      auth.logout();
      window.location = "/MessageBoard";
   }
   render() {
      return null;
   }
}

export default Logout;