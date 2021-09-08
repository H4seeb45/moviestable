
// class Auth {

//      useAuth(user,pass){
//         if (user==='hsb' && pass===123)
//         return true;
//         else
//         return false;
//     }
// }

// export default Auth;
import { useEffect,useState } from "react";
import { Redirect, Route } from "react-router-dom";
import history from "../common/history";

  
export default function Auth(user,pass) {
  user = user || null;
  pass = pass || null;

  var isAuthenticated = useState(false);  
      
    if(user === "haseeb" && pass === '123'){
      isAuthenticated=true;
      console.log("IsAuthenticated made true.")
    }
      useEffect(
        () => {
          if (!isAuthenticated) {
            history.push("/login");
          }
        },
        [isAuthenticated]
      );

      return isAuthenticated;
    
}
export function  PrivateRoute({ component: Component, ...rest }) {
  // useAuth is some custom hook to get the current user's auth state
  // const isAuth = useAuth();
  
  
  return (
    <Route
      {...rest}
      render={(props) =>
        true ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
