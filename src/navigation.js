import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './style.css';

function Navigation() {
    return (
        <nav className="wrapper-top">
                <ul className='nav-list'>
                    <Link className='button-logo' to="/" >
                        <button className='button-logo' >
                            <img src={logo} alt='AidALL'></img>
                        </button>
                    </Link>
                    
                    <ul className="nav-right">
                        <li className="nav-menu"><Link className="flex-text" to="#contact">Contact</Link></li>
                        <li className="nav-menu"><Link to="downloadpage">다운로드</Link></li>
                        <li className="nav-menu"><Link to="#services">서비스</Link></li>
                        <li className="nav-menu"><Link to="#vision">비전</Link></li>
                        <li className="nav-menu"><Link to="/about">소개</Link></li>
                    </ul>
                    
                </ul>
                
        </nav>
    );
}

export default Navigation;