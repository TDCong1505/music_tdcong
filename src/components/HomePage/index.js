import { Col, Row } from "antd";
import react , {useState} from "react";
import styles from "./HomePage.module.scss";
import Slide from "./Slide/Slide";
import Music from "./Music/Music";

const HomePage = () => {
    const [background,setBackground] = useState("");
    return (
        <>
            <div className={styles.wrapper} >
                <div lg={{ span: 20 }} className={styles.slide}>
                    <Slide></Slide>
                </div>
                <div lg={{ span: 4 }} className={styles.music}>
                    <Music background={(values) => setBackground(values)}></Music>
                </div>
            </div>
        </>

    )
}

export default HomePage;