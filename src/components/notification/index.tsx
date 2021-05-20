import React from 'react';
import { Link } from "react-router-dom";
//buttons
import Button from "../button";

import Chat from '../../resources/svg-icons/chat.svg';
import Close from '../../resources/svg-icons/cancel.svg';

//button css
import btnstyles from '../button/style.scss';
import styles from './style.scss';

export default function Notification({ children }) {
	return (
		<>
	      <div className={`${styles.notification}`}>
	        <div className={`${styles['notification-content']}`}>
	        	<img src={Chat} alt="Chat" className={`${styles['sm-icon']}`} />
	        	<div className={`${styles['notification-text']}`}>
	        		<h4 className={`${styles.notificationtitle}`}>New Territories!</h4>
	        		<p className={`${styles.notificationdesc} h5`}>Hey everyone. We expanded our coverage to all of the west side of Los Angeles</p>
	        		<Link to="/" className={`${styles.notificationlink}`}>
	        			Click to open
	        		</Link>
	        	</div>
	        </div>
	        <div className={`${styles['notification-close']}`}>
	        	<Button className="btn-link btn-link-btn">
                  <img src={Close} alt="Close" className={`${btnstyles['svg-icon']}`} />
                </Button>
	        </div>
	      </div>
		</>
	);
}

