import React from 'react';
import styles from "./btn-style.module.scss";

const ClickBtn = ({ onClick = () => { }, children, type, disabled, className, active, style, btnType }: any) => {

    return (
        <button disabled={disabled ? disabled : false} type={btnType ? btnType : 'button'} style={{ ...style }} onClick={onClick} className={`rounded-pill fw-bolder ${styles.btn_cmn} ${className ? className : ''} ${type === 'dark' ? `${styles.btn_dark} ${active ? styles.darkActive : ''}` : `${styles.btn_warn} ${active ? styles.warnActive : ''}`}`}>
            {children}
        </button >
    );
};

export default ClickBtn;