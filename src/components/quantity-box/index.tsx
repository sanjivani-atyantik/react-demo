import React, { useState } from 'react';
//buttons
import Button from "../button";
import { Link } from "react-router-dom";

import styles from './style.scss';

export default function Quantity({ children }) {
	return (
		<>
			<div className={`${styles['quantity-box']}`}>
                <Button className="btn-link btn-link-primary flex-1">
                    -
                </Button>
                <span className={`${styles['flex-1']}`}>1</span>
                <Button className="btn-link btn-link-primary flex-1">
                    +
                </Button>
            </div>
		</>
	);
}

