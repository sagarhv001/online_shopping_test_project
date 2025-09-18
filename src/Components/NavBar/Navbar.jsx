import { useNavigate } from 'react-router-dom';

const Navbar = ({ totalItems }) => {
    const navigate = useNavigate();
    const userFromStorage = JSON.parse(localStorage.getItem('user') || '{}');
    const user = userFromStorage;
    const username = user?.username || '';
    const logout  = () => {
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.removeItem('user');
        window.dispatchEvent(new Event('loginChange'));
        navigate('/');
    }

    return (
         <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: '#032344ff', padding: '10px 20px', zIndex: 1000, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h2>Online Shopping</h2>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', alignItems: 'center', margin: 0, padding: 0 }}>
                <li>{username}</li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); logout(); }}>Logout</a></li>
                <li style={{ position: 'relative' }}>
                    <img src="/online-shopping.png" style={{ width: '20px', height: '20px' }} alt="Cart Icon" /> Cart
                    {totalItems > 0 && (
                        <span style={{
                            position: 'absolute',
                            top: '-10px',
                            right: '-10px',
                            backgroundColor: 'red',
                            color: 'white',
                            borderRadius: '50%',
                            padding: '2px 6px',
                            fontSize: '12px',
                            fontWeight: 'bold'
                        }}>
                            {totalItems}
                        </span>
                    )}
                </li>
            </ul>
           
        </nav>
    )
       
    
}

export default Navbar;