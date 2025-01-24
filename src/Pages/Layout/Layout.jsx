import { Outlet, NavLink, Link } from "react-router-dom";
import styles from './Layout.module.css'
import Sidebar from "./Sidebar/Sidebar";



// TODO make everyting material UI
// TODO make the navbar materialUI
const Layout = () => {

    const linkStyle = ({ isActive }) => ({
        color: isActive ? 'red' : 'black',
        textDecoration: 'none',
        background: isActive ? '#FFF' : "None",
        width: isActive ? "5.91856rem":"5.91856rem",
        height: isActive ? "2.7575rem":"2.7575rem",
        borderRadius: isActive ? "3.125rem": "",
      });


  return (
    <>
      <section className={styles.navBarContainer}>
        <nav className={styles.navBar}>
          <ul className={styles.navBarUl}>
            
              <NavLink to="/" style={linkStyle}>
                <li className={styles.navBarLi}>
                  Home
                </li>
              </NavLink>

              <NavLink to="/about" style={linkStyle}>
                <li className={styles.navBarLi}>
                  About Us
                </li>
              </NavLink>

              <NavLink to="/contact" style={linkStyle}>
                <li className={styles.navBarLi}>
                  Contact Us
                </li>
              </NavLink>
          </ul>
        </nav>
      </section>
      <div className={styles.signupButtonContainer}>
      <Link to="/user/home" className={styles.signupButton}>Sign Up</Link>
      </div>
      <Outlet />
    </>
  )
};

export default Layout;




