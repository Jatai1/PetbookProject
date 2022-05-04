import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import BrowsePet from "./BrowsePet";
import Form from "./components/Form";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import React, { useState, useEffect } from "react";
import { getUser, getToken, setUserSession, resetUserSession } from "./service/AuthService";
import axios from "axios";
import Navbar from './components/Navbar';

const verifyTokenAPIURL = 'https://sulvxenm35.execute-api.us-east-1.amazonaws.com/prod/verify';

function App() {

  const [isAuthenicating, setAuthenicating] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (token === 'undefined' || token === undefined || token === null || !token) {
      return;
    }

    const requestConfig = {
      headers: {
        'x-api-key': 'vi1NR9HaKJZKkcyZGw8Dg1VkCqO5ka2k2tyvTO80'
      }
    }
    const requestBody = {
      user: getUser(),
      token: token
    }

    axios.post(verifyTokenAPIURL, requestBody, requestConfig).then(response => {
      setUserSession(response.data.user, response.data.token);
      setAuthenicating(false);
    }).catch(() => {
      resetUserSession();
      setAuthenicating(false);
    })
  }, []);

  const token = getToken();
  if (isAuthenicating && token) {
    return <div className="content">Authenicating...</div>
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          
        </Switch>

      <div className="content">
        <Switch>
 
          <PublicRoute path="/register" component={Register}/>
          <PublicRoute path="/login" component={Login}/>
          <PrivateRoute path="/form" component={Form}/>
          <PrivateRoute path="/Browse-Pet" component={BrowsePet}/>
          
        </Switch>
      </div>
      </BrowserRouter>
    </>
  );

}

export default App;