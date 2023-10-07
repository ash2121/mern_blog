import { useState } from "react";

export default function RegisterPage() {
    const [username, setUsername] = useState(""); //default empty string
    const [password, setPassword] = useState("");
    async function register(ev) {
        //   tonot redirect from this page- deafault behavior of html page
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-type': 'application/json' },
        });
        // console.log(response);
        if (response.status !== 200) {
            alert('Registration failed')
        } else {
            alert('Registration successful')
        }
    }
    return (
        <form className="register" onSubmit={register} >
            <h1>Register</h1>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
            />
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
            />
            <button>Register</button>
        </form>
    );
}
