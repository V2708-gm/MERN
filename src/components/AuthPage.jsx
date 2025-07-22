import React from "react";
import { Container } from "react-bootstrap"
import {Row} from "react-bootstrap"
import {Col} from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BasicExample from "./BasicExample";
const AuthPage=()=>{
    return(
        <>
        Auth
        <Row>
            <Col/><BasicExample />
            <Col>Feature</Col>
        </Row>
        </>
    )
}
export default AuthPage