import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Tabs, Tab, Input, Button } from "react-materialize";
import { Redirect } from "react-router-dom";
import Nav from "../../../components/shared/Nav";
import axios from "axios";

class AboutUs extends Component {


render(){
    return(
        <div>
            <Row>
            <h3>About Us</h3>
            <p>Hey Cool</p>
            </Row>
            <Row>
            <h3>Project Goals</h3>
            <p>OKay, awesome</p>
            </Row>
            <Row>
            <h3>Technologies Used</h3>
            <p>Technology is cool</p>
            </Row>
        </div>
    )
}
}

export default AboutUs;