import WebHeader from './WebHeader';
import MobileHeader from './MobileHeader'
import {useState,useEffect,useContext} from 'react';
import { AuthContext } from '../../Context';

const Header = () => {
    const [width,setWidth]=useState(window.innerWidth>950);
    const { isAuthenticated, logout } = useContext(AuthContext);

    useEffect(()=>{},[width])
    return ( 
        width
        ?<WebHeader isAuthenticated={isAuthenticated} logout={logout}/>
        :<MobileHeader isAuthenticated={isAuthenticated} logout={logout}/>
     );
}
 
export default Header;