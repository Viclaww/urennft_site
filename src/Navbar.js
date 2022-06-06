import logo from './logo.png'

const Navbar = () => {
    return (
        <div className="navbar">
           <img src={logo}  alt="logo" />
            <div className="links">
                <a href="">about</a>
                <a href="">services</a>
                <a href="">contact</a>
            </div>

        </div>

     );
}
 


export default Navbar;