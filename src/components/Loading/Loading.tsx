import { FC } from "react";
import { ILoadingTypes } from "./LoadingTypes";

import styles from './Loading.module.scss';

const Loading:FC<ILoadingTypes> = ({ background, spinnerColor }) => {
    return (
        <div style={{background}} className={styles.spinner_wrapper}>
            <span style={{ borderTopColor: spinnerColor }} className={styles.spinner}></span>
        </div>
    )
};

export default Loading;