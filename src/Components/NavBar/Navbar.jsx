const Navbar = () => {
    return (
         <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: '#033c6fff', padding: '10px 20px', zIndex: 1000 }}>
            <h2>this is navbar</h2>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', alignItems: 'right', margin: 0, paddingLeft: '85%' }}>
                <li>User</li>
                <li><a href="/">Logout</a></li>
                <li><img src="/online-shopping.png" style={{ width: '20px', height: '20px' }} alt="Cart Icon" /> Cart</li>
            </ul>
           
        </nav>
    )
       
    
}
export default Navbar;