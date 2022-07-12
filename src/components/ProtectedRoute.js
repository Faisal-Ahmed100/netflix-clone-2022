import { UseAuth } from '../context/AuthContex';
import {Navigate} from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {user}=UseAuth();
  if(!user){
    return <Navigate to='/' />
  }else{
    return children;
  }
}

export default ProtectedRoute