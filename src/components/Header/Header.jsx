import React from 'react'
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <span className={styles.text}>Header!</span>
        </div>
    )
}

export default Header;