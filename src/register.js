const handleSubmit = (e) => {
    e.preventDefault();
}
const Register = () => {
    return (
        <div className="form">
            <h2 className="Heading1"> SIGN UP </h2><br></br>
            <form action="/home" onSubmit={handleSubmit}>
                <p className="label">
                    <label>Name: </label>
                    <input type="text" name="first-name" required></input>
                </p><br></br>
                <p className="label">
                    <label>Username: </label>
                    <input type="text" name="first-name" required></input>
                </p><br></br>
                <p className="label">
                    <label>E-Mail: </label>
                    <input type="e-mail" name="Mailid" required></input>
                </p><br></br>
                <p className="label">
                    <label>Password: </label>
                    <input type="password" name="password" required></input>
                </p><br></br>
                <p className="label">
                    <button id="sub_btn" type="submit">Register</button>
                </p><br></br>
                <p className="label">
                    <a href="/login" target="_blank" rel="no referrer">Back to Login Page</a>
                </p><br></br>


            </form>


        </div>
    );
}

export default Register;