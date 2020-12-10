import React from "react";
import {motion} from "framer-motion";
import styles from "./LoadScreen.css";


const containerStyle = {
    position: "relative",
    width: "3rem",
    height: "3rem",
    boxSizing: "border-box"

};

const circleStyle = {
    display: "block",
    width: "6rem",
    height: "6rem",
    border: "0.5rem solid #e9e9e9",
    borderTop: "0.5rem solid #3498db",
    borderRadius: "50%",
    position: "absolute",
    boxSizing: "border-box",
    top: 300,
    left: 580,
};

const spinTransition = {
    loop: Infinity,
    ease: "linear",
    duration: 1
};


export default function LoadScreen() {
    return (

        <div style={containerStyle}>
            <div className={styles["body"]}>
            <motion.span

                style={circleStyle}
                animate={{ rotate: 360 }}
                transition={spinTransition}

            />
            </div>
        </div>

    );
}
