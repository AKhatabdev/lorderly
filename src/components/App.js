import "../styles/App.css";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Container} from "react-bootstrap";
import Signup from "./Signup";
import Login from "./Login";
import UserBoard from "./UserBoard";
import {AuthProvider} from "../contexts/AuthContext";
import {ForgotPassword} from "./ForgotPassword";
import {PrivateRoute} from "./PrivateRoute"
import UpdateProfile from "./UpdateProfile";

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
                                <PrivateRoute exact path="/" component={UserBoard}/>
                                <PrivateRoute exact path="/update-profile" component={UpdateProfile}/>
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
