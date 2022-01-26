import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
               <h2>Assembly</h2> 
            </ul>
            <ul>
                <li>
                    <Link href='/'>HOMEPAGE</Link>
                </li>
                <li>
                    <Link href='/our-clients'>OUR CLIENTS</Link>
                </li>
                <li>
                    <Link href='/about-us'>ABOUT US</Link>
                </li>
                <li>
                    <Link href='/carrers'>CARRERS</Link>
                </li>
                <li>
                    <Link href='/contact-us'>CONTACT US</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;