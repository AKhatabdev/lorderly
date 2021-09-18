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

function App() {

    return (
        <>
            <Router>
                <AuthProvider>
                    <Switch>
                        <PrivateRoute exact path="/" component={UserBoard}/>
                        <Route path="/landing-page" component={LandingPage}/>
                        <Container
                            className="d-flex align-items-center justify-content-center"
                            style={{minHeight: "100vh"}}>
                            <div className="App">
                                <PrivateRoute exact path="/update-profile" component={UpdateProfile}/>
                                <Route path="/signup" component={Signup}/>
                                <Route path="/login" component={Login}/>
                                <Route path="/forgot-password" component={ForgotPassword}/>
                            </div>
                        </Container>

                    </Switch>
                </AuthProvider>
            </Router>
        </>
        )
}

export default App;
