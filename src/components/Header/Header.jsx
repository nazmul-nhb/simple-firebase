import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-around mb-8">
            <Link to={'/'}>Home</Link>
            <Link to={'/login'}>Login</Link>
        </div>
    );
};

export default Header;