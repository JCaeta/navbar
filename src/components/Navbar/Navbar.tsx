import { useRef, RefObject } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    const navRef: RefObject<HTMLElement> = useRef(null);

    const showNavbar = () => {
        if (navRef.current !== null && navRef.current !== undefined) {
            navRef.current.classList.toggle(styles.responsiveNav);
        }
    };

    return (<>
        <header className={styles.header}>
            <h3>LOGO</h3>
            <nav className={styles.nav} ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">My work</a>
                <a href="/#">Blog</a>
                <a href="/#">About me</a>
                <button className={`${styles.navBtn} ${styles.navCloseBtn}`}  onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className={styles.navBtn} onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    </>);
};

