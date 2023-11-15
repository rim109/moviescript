import { useNavigate } from "react-router-dom";
import "./Loginpage.css";
import {
	CognitoUserPool,
	CognitoUserAttribute,
	CognitoUser,
    AuthenticationDetails,
} from "amazon-cognito-identity-js";

const Loginpage = () => {
    let poolData = {
        UserPoolId:process.env.REACT_APP_UserPoolId, // Your user pool id here
        ClientId:  process.env.REACT_APP_ClientId, // Your client id here
    };
    let userPool = new CognitoUserPool(poolData);
    const navigate =useNavigate();
    const onSubmit = (e) => {
        e.preventDefault()
        let authenticationData = {
            Username: e.target[0].value,
            Password: e.target[1].value,
        };
        let authenticationDetails = new AuthenticationDetails(
            authenticationData
        );
        let userData = {
            Username: e.target[0].value,
            Pool: userPool,
        };
        let cognitoUser = new CognitoUser(userData);
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function(result) {
                var accessToken = result.getAccessToken().getJwtToken();
                localStorage.setItem("accessToken",accessToken)
                navigate("/")
            },
            onFailure: function(err) {
                alert(err.message || JSON.stringify(err));
            },
        });
    }

    return (
    <div class="prompt">
            <h1>Sign in</h1>
            <form onSubmit={onSubmit}>
                <div> 
                    <label className="email-css" for="email">Email </label>
                    <input id="email" name="email" type="text" required />
                </div>
                <div>
                    <label className="password-css" for="password">Password</label>
                    <input id="password" name="password" type="password" required />
                </div>
            <div><button type="submit">Sign in</button></div> 
            </form>
            <br />
            <div>
            <p>아직 아이디가 없다면<a href="./Signuppage">Sign up</a></p>
            </div>
    </div>
    
    )
}
export default Loginpage