import {
    CognitoUserPool,
    CognitoUserAttribute,
    CognitoUser,
} from 'amazon-cognito-identity-js';
import { useNavigate, useParams } from 'react-router-dom';

const VerificationCode = () => {
    var poolData = {
        UserPoolId: 'ap-northeast-2_LhDmZb4mF', // Your user pool id here
        ClientId: '2dcbea0f3r8lnn2ql6uh6tkv97', // Your client id here
    };
    var userPool = new CognitoUserPool(poolData);
    const param = useParams();
    const navigate =useNavigate()

    var attributeList = [];
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        var userData = {
            Username: param.username,
            Pool: userPool,
        };
        var cognitoUser = new CognitoUser(userData);
        cognitoUser.confirmRegistration(e.target[0].value, true, function (err, result) {
            if (err) {
                alert(err.message || JSON.stringify(err));
                return;
            }
            console.log('call result: ' + result);
            navigate('/pages/Loginpage')
        });


    }

    return (
        <div class="prompt">
            <h1>VerificationCode</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label for="email">code</label>
                    <input id="email" name="code" type="text" required />
                </div>

                <div><button type="submit">search</button></div>
            </form>
            <br />
        </div>

    )
}
export default VerificationCode 
