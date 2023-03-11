const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1><a href="/about"> The GirlsInTech Blog</a></h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;