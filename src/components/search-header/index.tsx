import React from 'react';
import { Link } from "react-router-dom";
import { getExtraClasses } from '../../utils/common';
//buttons
import Button from "../button";
//Input
import Input from "../input";
import Cart from '../../resources/svg-icons/cart.svg';
import LeftArrow from '../../resources/svg-icons/left-arrow.svg';
import SearchIcon from '../../resources/svg-icons/search-gray.svg';

//button css
import btnstyles from '../button/style.scss';
import headerstyles from '../header/style.scss';
import styles from './style.scss';

export default function SearchHeader(props) {
	const {
		children,
		className,
		headerClass,
	} = props;
	let extraClasses = getExtraClasses(styles, className);
	let headerClasses = getExtraClasses(styles, headerClass);
	return (
		<div className={`${headerstyles['site-header']} ${extraClasses}`}>
			<div className={`${headerstyles['fixed-header']} ${headerClasses}`}>
				<div className="container">
					<div className={`${headerstyles['top-header']}`}>
						<Button 
							element="a" href="/"
							className="btn-link btn-link-btn btn-no-width-padding">
							<img src={LeftArrow} alt="LeftArrow" className={`${btnstyles['svg-sm-icon']}`} />
						</Button>
						<div className={`${styles['flex-1']}`}>
							<Input 
								type="text"
								placeholdertext="What are you looking"
								icon={SearchIcon}
							/>
						</div>
						<Button
							className="btn-rounded btn-with-icon"
						>
							<img src={Cart} className={`${btnstyles.icon}`} />
							<span className={`${btnstyles['btn-text']}`}>3</span>
						</Button>
					</div>
					{children}
				</div>
			</div>
		</div>
	);
}

