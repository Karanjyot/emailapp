import axios from "axios";
import React, { useState, useEffect  } from "react";
// browser router looks at current url and changes components visible. Route sets up rules.
import { BrowserRouter, Route,} from "react-router-dom";

import Landing from "./Landing"
import Signup from "./Signup"
import Login from "./Login"
import Home from "./Home"


const App = () =>{

const [user, setUser] = useState([]);


    const fetchResource = async () =>{
        const response = await axios.get("/api/current_user")
 
             console.log(response.data)
             // this.setstate({ user: response.data})

             setUser(response.data)
 
 
      }
    useEffect(() =>{
        fetchResource()
    }, [])

        return (

            <div className="container">

        
                <BrowserRouter >
                    <div>
                        <Route exact path = "/" component = {Landing} />
                        <Route exact path = "/signup" component = {Signup} />
                        <Route exact path = "/login" component = {Login} />
                        <Route path ="/home" component ={Home} />
                    </div>
                </BrowserRouter>
            </div>
        )
  
};

export default App;


