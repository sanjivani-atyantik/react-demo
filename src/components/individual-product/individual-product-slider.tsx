import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination} from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import '../../resources/css/custom-carousel.scss';

import ProductImg from './product-img';
import Img1 from './images/product.png';
import Img2 from '../product-slider/images/img2.png';
import Img3 from '../product-slider/images/img3.png';
import individualstyles from './individual-product-slider.scss';

// install Swiper components
SwiperCore.use([Autoplay, Pagination]);

export default function IndividualProductSlider({ children }) {
	const [state, setState] = useState([
		{
			id: 1,
			Img: Img1,
		},
		{
			id: 2,
			Img: Img2,
		},
		{
			id: 3,
			Img: Img3,
		},
	]);
	const ListItem = (item) => (
		<ProductImg
			key={item.id}
			productimg={item.Img}
		/>
	);
	return (
		<>
			<Swiper
				slidesPerView={1}
				watchOverflow={true}
				//autoplay={true}
				speed={1000}
				pagination={{ clickable: true }}
			>
				{state.map(d => (
						<SwiperSlide key={d.id}>
							{ListItem(d)}
						</SwiperSlide>
					))}
			</Swiper>
		</>
	);
}

