import "../styles/App.css";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Container} from "react-bootstrap";
import Signup from "./Signup";
import Login from "./Login";
import {AuthProvider} from "../contexts/AuthContext";
import {ForgotPassword} from "./ForgotPassword";
import {PrivateRoute} from "./PrivateRoute"
import UpdateProfile from "./UpdateProfile";
import LandingPage from "./LandingPage";
import UserBoard from "./UserBoard";
import NavBar from "./NavBar";

function App() {

    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{minHeight: "100vh"}}>
            <NavBar/>
            <div className="App">
                <div className="Header">
                    <img src="/images/title/title_Lorderly.png" alt="Title"/>
                </div>
                <Router>
                    <AuthProvider>
                        <Switch>
                            <PrivateRoute exact path="/" component={UserBoard}/>
                            <PrivateRoute exact path="/update-profile" component={UpdateProfile}/>
                            <Route path="/landing-page" component={LandingPage}/>
                                <Route path="/signup" component={Signup}/>
                                <Route path="/login" component={Login}/>
                                <Route path="/forgot-password" component={ForgotPassword}/>
                            </Switch>
                        </AuthProvider>
                    </Router>
                </div>
            </Container>
        )
}

export default App;
