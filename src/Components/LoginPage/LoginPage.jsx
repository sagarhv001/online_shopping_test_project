import { useNavigate } from 'react-router-dom';
import userdata from '../../userdata.js';
import { useState } from 'react';

const LoginPage = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleNavigation = () => {
        const user = userdata.find(user => user.username === credentials.username && user.password === credentials.password);
        if (user) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('user', JSON.stringify(user));
            window.dispatchEvent(new Event('loginChange'));
            navigate('/products', { state: { user } });
        } else {
            alert('Invalid credentials');
        }
    }

    return (
        <div>
            <h2>Login Page</h2>
            <input type="text" placeholder="Username"  value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
            <input type="password" placeholder="Password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
            <button onClick={() => { handleNavigation(); }}>Login</button>
        </div>
    )
}

export default LoginPage;