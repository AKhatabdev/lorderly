import "../styles/App.css";

import{BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Container} from "react-bootstrap";
import LandingPage from "./LandingPage";
import Signup from "./Signup";
import Login from "./Login";
import UserBoard from "./UserBoard";

import {AuthProvider} from "../contexts/AuthContext";
import {ForgotPassword} from "./ForgotPassword";

function App() {
        return (
            <Container
            className="d-flex align-items-center justify-content-center"
            style={{minHeight: "100vh"}}>
                <div className="App">
                    <div className="Header">
                        <img src="/images/title/title_Lorderly.png" alt="Title"/>
                    </div>
                    <Router>
                        <AuthProvider>
                            <Switch>
                                <Route exact path="/" component={Signup}/>
                                <Route path="/signup" component={Signup}/>
                                <Route path="/login" component={Login}/>
                                <Route path="/forgot-password" component={ForgotPassword} />
                                <Route path="/user-board" component={UserBoard} />
                            </Switch>
                        </AuthProvider>
                    </Router>
                </div>
            </Container>
        )
}

export default App;
