const Loginpage = () => {
    
    return (
       
        
    <div class="prompt">
            <h1>Sign in</h1>
            <form action="/auth/login" method="post">
                <div> 
                    <label for="email">Email</label>
                    <input id="email" name="email" type="text" required />
                </div>
                <div>
                    <label for="password">Password</label>
                    <input id="password" name="password" type="password" required />
                </div>
            <div class="button"><button type="submit">Sign in</button></div> 
            </form>
            <br />
            <div>
            
            <p>아직 아이디가 없다면  <a href="/Signuppage">Sign up</a></p>
            </div>
    </div>
    
    )
}


export default Loginpage