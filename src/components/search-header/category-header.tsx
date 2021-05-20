import React from 'react';
import { Link } from "react-router-dom";
import { getExtraClasses } from '../../utils/common';
//buttons
import Button from "../button";
import Cart from '../../resources/svg-icons/cart.svg';
import LeftArrow from '../../resources/svg-icons/left-arrow.svg';
import SearchIcon from '../../resources/svg-icons/search.svg';
import SortArrow from '../../resources/svg-icons/sort-arrow.svg';

//button css
import btnstyles from '../button/style.scss';
import headerstyles from '../header/style.scss';
import styles from './style.scss';

export default function Header(props) {
	const {
		children,
		className,
	} = props;
	let extraClasses = getExtraClasses(styles, className);
	return (
		<div className={`${headerstyles['site-header']} ${extraClasses}`}>
			<div className={`${headerstyles['fixed-header']}`}>
				<div className="container">
					<div className={`${headerstyles['top-header']}`}>
						<Button
							element="a" href="/"
							className="btn-link btn-link-btn btn-no-width-padding">
							<img src={LeftArrow} alt="LeftArrow" className={`${btnstyles['svg-sm-icon']}`} />
						</Button>
						<div className={`${styles['flex-1']} ${styles.spacebetween}`}>
							<Button
								element="a" href="/"
								className="btn-link btn-link-lg-text">
								Flower
								<img src={SortArrow} alt="" className={`${btnstyles['svg-sm-icon']} ${btnstyles['ml-5']}`} />
							</Button>
							<Button
								element="a" href="/"
								className="btn-link btn-link-btn btn-no-width-padding">
								<img src={SearchIcon} alt="LeftArrow" className={`${btnstyles['svg-sm-icon']}`} />
							</Button>
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

