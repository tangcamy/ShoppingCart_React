//
import './Header.scss'
import { useState } from "react";


function NavLink(props) {
  return <a className="nav-link" href={props.link}>
      {props.children}
  </a>;
}

function NavIcon(props) {
    return <img
        src={props.src}
        className="nav-icon cursor-point"
        alt=""
        onClick={props.onClick}
    />;
}

function NavList(props) {
    return <ul className={`nav-list ${props.className}`}>
        {props.children.map(
            (child, index) => <NavItem key={index}>{child}</NavItem>
        )}
    </ul>
}

function NavItem(props) {
  return (
    <li className="nav-item">
      {props.children}
    </li>
  );
}

function LogoContainer() {
    return <a className="header-logo-container" href="main">
        <img src="/icons/logo.svg" className="cursor-point" alt=""/>
    </a>
}



//main
function Header() {

    const [darkMode, setDarkMode] = useState(false);
  
    function handleDarkModeClick() {
        console.log(darkMode);
        //dark-theme.scss
        document.body.setAttribute("data-theme", darkMode ? "light" : "dark");
        setDarkMode(!darkMode);
    }
    return (
        <header className='site-header'>
            <div className="header-container mx-auto">
                <nav className="navbar-menu">
                        <NavList className="site-menu-list mr-auto">
                        <NavLink link="#">男款</NavLink>
                        <NavLink link="#">女款</NavLink>
                        <NavLink link="#">最新消息</NavLink>
                        <NavLink link="#">客製商品</NavLink>
                        <NavLink link="#">聯絡我們</NavLink>
                        </NavList>
                        
                        <LogoContainer/>

                        <NavList className="site-action-list">
                        <NavIcon src="/icons/search.svg"/>
                        <NavIcon src="/icons/cart.svg"/>
                        <NavIcon
                            src={`/icons/${darkMode ? "sun" : "moon"}.svg`}
                            onClick={handleDarkModeClick}
                        />
                        </NavList>
                    </nav>
            </div>
        </header>
    );
}

export default Header;