import { useNavigate } from "react-router-dom";
import "./Signuppage.css"
import {
	CognitoUserPool,
	CognitoUserAttribute,
	CognitoUser,
} from "amazon-cognito-identity-js";

const Signuppage = () => {
    let poolData = {
        UserPoolId: process.env.REACT_APP_UserPoolId, // Your user pool id here
        ClientId: process.env.REACT_APP_ClientId, // Your client id here
    };
    let userPool = new CognitoUserPool(poolData);
    const navigate = useNavigate();

    let attributeList = [];
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        let dataEmail = {
            Name: "email",
            Value: e.target[0].value,
        };
        
        let dataNickname = {
            Name: "nickname",
            Value: e.target[2].value,
        };
        let attributeEmail = new CognitoUserAttribute(dataEmail);
        let attributePhoneNumber = new CognitoUserAttribute(
            dataNickname
        );
        
        attributeList.push(attributeEmail);
        attributeList.push(attributePhoneNumber);
        userPool.signUp(e.target[0].value, e.target[1].value, attributeList, null, function(
            err,
            result
        ) {
            if (err) {
                alert(err.message || JSON.stringify(err));
                return;
            }
            let cognitoUser = result.user;
            console.log("user name is "+ cognitoUser.getUsername());
            window.alert("회원가입이 되었습니다")
            navigate(`/pages/VerificationCode/${e.target[0].value}`)
        });
    }

    return (
    <div class="prompt">
            <h1>Sign up</h1>
            <form onSubmit={onSubmit}>
                <div> 
                    <label className="email-css" for="email">Email </label>
                    <input id="email" name="email" type="text" required />
                </div>
                <div>
                    <label className="password-css" for="password">Password</label>
                    <input id="password" name="password" type="password" required />
                </div>
                <div>
                    <label className="password-css" for="password">Nickname</label>
                    <input id="password" name="nickname" type="text" required />
                </div>
            <div><button type="submit">Sign up</button></div> 
            </form>
            <br />
            <div>
            <p>만약 아이디가 있다면<a href="./Loginpage">Sign in</a></p>
            </div>
    </div>
    
    )
}
export default Signuppage