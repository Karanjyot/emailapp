import React, { Component } from "react";
// browser router looks at current url and changes components visible. Route sets up rules.
import { BrowserRouter, Route } from "react-router-dom";
// allows us to use action creators
import { connect } from "react-redux";
//import all action creators from actions directory
import * as actions from "../actions";

import Header from "./Header"
import Landing from "./Landing"
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>



class App extends Component{

    // once the component has been mounted to the screen fetch the current user/ figure out if user is signed in.
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
        return (

            <div className="container">
                <BrowserRouter >
                    <div>
                        <Header />
                        <Route exact path = "/" component = {Landing} />
                        <Route exact path = "/surveys" component = {Dashboard} />
                        <Route path ="/survey/new" component ={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        )
    };
};

export default connect(null, actions) (App);