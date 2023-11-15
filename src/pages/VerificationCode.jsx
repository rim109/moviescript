import {
    CognitoUserPool,
    CognitoUserAttribute,
    CognitoUser,
} from "amazon-cognito-identity-js";
import { useNavigate, useParams } from "react-router-dom";
import "./VerificationCode.css";

const VerificationCode = () => {
    let poolData = {
        UserPoolId: process.env.REACT_APP_UserPoolId, // Your user pool id here
        ClientId: process.env.REACT_APP_ClientId, // Your client id here
    };
    let userPool = new CognitoUserPool(poolData);
    const param = useParams();
    const navigate =useNavigate()


    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        let userData = {
            Username: param.username,
            Pool: userPool,
        };
        let cognitoUser = new CognitoUser(userData);
        cognitoUser.confirmRegistration(e.target[0].value, true, function (err, result) {
            if (err) {
                alert(err.message || JSON.stringify(err));
                return;
            }
            console.log("call result: " + result);
            window.alert("알맞은 코드입니다.")
            navigate("/pages/Loginpage")
        });


    }

    return (
        <div class="prompt">
            <h1>VerificationCode</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label className="code-css" for="email">code</label>
                    <input id="email" name="code" type="text" required />
                </div>

                <div><button type="submit">search</button></div>
            </form>
            <br />
        </div>

    )
}
export default VerificationCode 
