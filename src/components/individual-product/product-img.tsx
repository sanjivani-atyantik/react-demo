import React, { useState } from 'react';

import individualstyles from './individual-product-slider.scss';

export default function IndividualProductSlider(props) {
	const {
		productimg,
	} = props;
	return (
		<>
			<div className={`${individualstyles['product-img']}`}>
				<img src={productimg} alt="Product" />
			</div>
		</>
	);
}

