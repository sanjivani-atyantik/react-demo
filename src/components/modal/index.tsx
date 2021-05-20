import React, { useState } from 'react';
//buttons
import Button from "../button";
import { Link } from "react-router-dom";

import styles from './style.scss';

export default function Modal({ children }) {
	return (
		<>
			<div className={`${styles.overlay} ${styles.open}`} />
			<div className={`${styles['modal']} ${styles.open}`}>
				<div className={`${styles['modal-dialog']}`}>
					<div className={`${styles['modal-content']}`}>
						{children}
					</div>
				</div>
			</div>
			
		</>
	);
}

