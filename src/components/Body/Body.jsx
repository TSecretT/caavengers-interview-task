import React from 'react';
import styles from './Body.module.css';
import {Button} from "antd";

const Body = () => {

    const [isOn, setIsOn] = React.useState(false);

    const setIsOnHandler = () => {
        setIsOn(!isOn);
    }

    return (
        <div className={`${styles.container} ${ isOn ? styles.lightBackground : styles.darkBackground}`} >
            <Button type={ isOn ? 'ghost' : 'primary'} size={'large'} onClick={setIsOnHandler} >
                { isOn ? `OFF` : `ON`}
            </Button>
        </div>
    );
};

export default Body;
