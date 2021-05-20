import React from 'react';
import { Link } from "react-router-dom";

//buttons
import Button from "../button";

import Downarrow from '../../resources/svg-icons/down-arrow.svg';
import Reward from '../../resources/svg-icons/reward.svg';
//button css
import btnstyles from '../button/style.scss';
import styles from './style.scss';

export default function LocationBar({children}) {
	return (
		<>
			<div className={`${styles['location-bar']}`}>
				<div className="container">
					<div className={`${styles['location-row']}`}>
						<div className={`${styles['select-location']}`}>
							<span className={`${styles['small-title']}`}>Deliver to</span>
							<Button className="btn-link btn-dropdown">
								<span className={`${btnstyles['btn-text']} text-truncate`}> 3231 Centinela Road</span>
								<img src={Downarrow} alt="arrow" className={`${btnstyles['sm-icon']}`} />
							</Button>
						</div>
						<div className={`${styles['reward-section']}`}>
							<span className={`${styles.value}`}>329</span>
							<img src={Reward} alt="Reward" className={`${styles['reward-icon']}`} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

