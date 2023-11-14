import { useNavigate } from 'react-router-dom';
import './Loginpage.css'
import {
	CognitoUserPool,
	CognitoUserAttribute,
	CognitoUser,
    AuthenticationDetails,
} from 'amazon-cognito-identity-js';

const Loginpage = () => {
    var poolData = {
        UserPoolId: 'ap-northeast-2_LhDmZb4mF', // Your user pool id here
        ClientId: '2dcbea0f3r8lnn2ql6uh6tkv97', // Your client id here
    };
    var userPool = new CognitoUserPool(poolData);
    const navigate =useNavigate();
    const onSubmit = (e) => {
        e.preventDefault()
        var authenticationData = {
            Username: e.target[0].value,
            Password: e.target[1].value,
        };
        var authenticationDetails = new AuthenticationDetails(
            authenticationData
        );
        var userData = {
            Username: e.target[0].value,
            Pool: userPool,
        };
        var cognitoUser = new CognitoUser(userData);
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function(result) {
                var accessToken = result.getAccessToken().getJwtToken();
                localStorage.setItem('accessToken',accessToken)
                navigate('/')
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
                    <label for="email">Email</label>
                    <input id="email" name="email" type="text" required />
                </div>
                <div>
                    <label for="password">Password</label>
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