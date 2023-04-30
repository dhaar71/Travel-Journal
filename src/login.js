const handleSubmit = (e) => {
    e.preventDefault();
}

const login = () => {
    return (
        <div className="form">
            <h2 className="Heading1">SIGN IN</h2>
            <br></br>
            <form action="/home" onSubmit={handleSubmit}>
                <p className="label">
                    <label>Username or email address: </label> <input type="text" name="first_name" required />
                </p><br></br>
                <p className="label">
                    <label>Password:</label>                   <input type="password" name="password" required />
                </p><br></br>
                <p className="label">
                    <button id="sub_btn" type="submit">Login</button>
                </p><br></br>
            </form>
            <footer>
                <p className="label"> Forget Password? <a href="/forgetpass" target="_blank" rel="no referrer">Reset Password</a></p><br></br>

                <p className="label">Don't have an account? <a href="/register" target="_blank" rel="no referrer">Create an account</a>.</p><br></br>

            </footer>
        </div>
    );
}

export default login;