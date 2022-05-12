import { useEffect } from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
    useEffect(() => {
        // When the user scrolls the page, execute myFunction
        window.onscroll = function() {myFunction()};

        // Get the header
        var header = document.getElementById("siteHeader");

        // Get the offset position of the navbar
        var sticky = header.offsetTop;

        // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
        function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add(styles.Navbar__sticky);
        } else {
            header.classList.remove(styles.Navbar__sticky);
        }
        }
    })

    return (
        <div id='siteHeader' className={styles.Navbar}>
            <div className={styles.Navbar__titleWrap}>
                <span>Pieces of me</span>
            </div>
                <ul className={styles.Navbar__menuItems}>
                    <li className={styles.Navbar__menuItem}>About</li>
                    <li className={styles.Navbar__menuItem}>Pieces</li>
                </ul>
            <div>
                <div className={styles.Navbar__connectBtn}>
                    <span>Connect</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;