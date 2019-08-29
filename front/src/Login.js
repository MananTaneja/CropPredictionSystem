import React from 'react';
import './Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        if (event.target.name === "username") {
            this.setState({ username: event.target.value })
        }
        else if (event.target.name === "password") {
            this.setState({ password: event.target.value })
        }
    }

    handleSubmit(event) {
        if (this.state.username === null || this.state.password === null) {
            event.preventDefault();
        }
    }

    render() {
        return (
            <div>
                <header><h2 className="center">Login</h2>
                </header>
                <br /> <br />
                <form action="http://localhost:8080/" method="POST" onSubmit={this.handleSubmit} name="myform" style={{ marginLeft: 560 }}>
                    Username <br />
                    <input type="text" placeholder="Username" name="username" value={this.state.username} id="" onChange={this.handleChange} required /><br /><br />
                    Password <br />
                    <input type="password" placeholder="Password" name="password" id="" onChange={this.handleChange} value={this.state.password} required /> <br /><br />
                    <input type="submit" value="submit" />
                </form>
            </div >
        )
    }
}

export default Login;