import React, { FormEvent, useState } from 'react';

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div class="module form-module">
                <div class="icon">
                    <h2 style={{ margin: '10px 0px 0px 120px' }}>
                        <i className="material-icons large">account_box</i>
                    </h2>
                </div>
                <div class="form">
                    <h2>Login to your account</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button>Login</button>
                    </form>
                </div>
                <div class="cta">
                    <a href="#!">Forgot your password?</a>
                </div>
            </div>
        </>
    );
};

export { Login };
