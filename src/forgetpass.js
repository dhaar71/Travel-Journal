const Password = () => {
    return (
        <div className="form">
            <h2 className="Heading1"> Reset Password</h2><br></br>
            <form action="/home">
                <p className="label">
                    <label>New Password: </label>
                    <input type="text" name="password" required></input>
                </p><br></br>
                <p className="label">
                    <label>Enter Password again: </label>
                    <input type="text" name="againpass" required></input>
                </p><br></br>
                <p className="label">
                    <a href="/login" target="_blank" rel="no referrer">Back to Sign in page</a>
                </p><br></br>

            </form>
        </div>
    );
}

export default Password;