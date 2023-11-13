import {
	CognitoUserPool,
	CognitoUserAttribute,
	CognitoUser,
} from 'amazon-cognito-identity-js';

const Signuppage = () => {
    var poolData = {
        UserPoolId: 'ap-northeast-2_LhDmZb4mF', // Your user pool id here
        ClientId: '2dcbea0f3r8lnn2ql6uh6tkv97', // Your client id here
    };
    var userPool = new CognitoUserPool(poolData);
    
    var attributeList = [];
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        var dataEmail = {
            Name: 'email',
            Value: e.target[0].value,
        };
        
        var dataNickname = {
            Name: 'nickname',
            Value: '+15555555555',
        };
        var attributeEmail = new CognitoUserAttribute(dataEmail);
        var attributePhoneNumber = new CognitoUserAttribute(
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
            var cognitoUser = result.user;
            console.log('user name is ' + cognitoUser.getUsername());
        });
    }

    return (
    <div class="prompt">
            <h1>Sign up</h1>
            <form onSubmit={onSubmit}>
                <div> 
                    <label for="email">Email</label>
                    <input id="email" name="email" type="text" required />
                </div>
                <div>
                    <label for="password">Password</label>
                    <input id="password" name="password" type="password" required />
                </div>
                <div>
                    <label for="password">Nickname</label>
                    <input id="password" name="nickname" type="text" required />
                </div>
            <div><button type="submit">Sign up</button></div> 
            </form>
            <br />
            <div>
            <p>아직 아이디가 없다면<a href="./Loginpage">Sign in</a></p>
            </div>
    </div>
    
    )
}
export default Signuppage