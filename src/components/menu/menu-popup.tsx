import React, { useState } from 'react';
//buttons
import Button from "../button";
import { Link } from "react-router-dom";
import Header from '../search-header/category-header';
import Popup from '../modal';
import Tag from "../tag";
import List from "./list";
import Product from "../product";
import Img1 from '../product-slider/images/img1.png';
import Img2 from '../product-slider/images/img2.png';
import Img3 from '../product-slider/images/img3.png';
import Img4 from '../product-slider/images/img4.png';
import Img5 from '../product-slider/images/img5.png';
import Img6 from '../product-slider/images/img6.png';
import Img7 from '../product-slider/images/img7.png';
import Img8 from '../product-slider/images/img8.png';
//button css
import btnstyles from '../button/style.scss';
import headerstyles from '../search-header/style.scss';
import resultstyles from '../search-result/style.scss';
import modalstyles from '../modal/style.scss';
import styles from './style.scss';

export default function MenuPopup(props) {
	const [state, setState] = useState([
		{
			id: 1,
			catname: "Flower",
			catnumber: "24",
			class: "active"
		},
		{
			id: 2,
			catname: "Vaporizers",
			catnumber: "17",
		},
		{
			id: 3,
			catname: "Edibles",
			catnumber: "13",
		},
		{
			id: 4,
			catname: "Pre-rolls",
			catnumber: "8",
		},
		{
			id: 5,
			catname: "Concentrates",
			catnumber: "15",
		},
		{
			id: 6,
			catname: "Beverages",
			catnumber: "3",
		},
		{
			id: 7,
			catname: "Topicals",
			catnumber: "1",
		},
		{
			id: 8,
			catname: "Accessories",
			catnumber: "6",
		},
	]);
	const ListItem = (item) => (
		<List
			key={item.id}
			name={item.catname}
			number={item.catnumber}
			className={item.class}
		/>
	);
	return (
		<>
			<Header
				headerClass="header-shadow"
				className="min-height"
			>
				<div className={`${headerstyles['filter-btns']}`}>
				  <Button className="btn-transparent active" element="a" href="/search-result/">Menu</Button>
				  <Button className="btn-transparent" element="a" href="/no-result/">Rewards</Button>
				  <Button className="btn-transparent" element="a" href="/">Deals</Button>
				</div>
			</Header>
	      <div className="container">
        	<div className={`${resultstyles['tag-btns']} ${styles['no-wrap']}`}>
          		<Tag name="Indica" className="tag-outline-primary" />
          		<Tag name="Sativa" className="tag-outline-primary" />
          		<Tag name="Hybrid" className="tag-outline-primary" />
          		<Tag name="Brand" className="tag-outline-primary" />
          		<Tag name="Indica" className="tag-outline-primary" />
          		<Tag name="Low Inventory" className="tag-outline-primary" />
	        </div>
	        <div className={`${resultstyles.row}`}>
	          <div className={`${resultstyles.col}`}>
	            <Product
	              img={Img1}
	              value='1'
	              name='Lowell Farms'
	              catName='Hybrid'
	              tagName='Hybrid'
	              price='$40-$75'
	              valueClassName="circle-value"
	              rewardClassName="d-none"
	            />
	          </div>
	          <div className={`${resultstyles.col}`}>
	            <Product
	              img={Img2}
	              name='Canndescent'
	              catName='Charge'
	              tagName='Indica'
	              price='1/8 | $30.00'
	              tagClassName="tag-warning"
	              rewardClassName="d-none"
	            />
	          </div>
	          <div className={`${resultstyles.col}`}>
	            <Product
	              img={Img3}
	              name='Bloom Farmss'
	              catName='Strawberry Banana'
	              tagName='Sativa'
	              price='1/8 | $35.00'
	              tagClassName="tag-light-blue"
	              rewardClassName="d-none"
	            />
	          </div>
	          <div className={`${resultstyles.col}`}>
	            <Product
	              img={Img4}
	              name='Lowell Farms'
	              catName='Hybrid'
	              tagName='Hybrid'
	              price='$40-$75'
	              rewardClassName="d-none"
	            />
	          </div>
	          <div className={`${resultstyles.col}`}>
	            <Product
	              img={Img5}
	              name='Canndescent'
	              catName='Charge'
	              tagName='Indica'
	              price='1/8 | $30.00'
	              tagClassName="tag-warning"
	              rewardClassName="d-none"
	            />
	          </div>
	          <div className={`${resultstyles.col}`}>
	            <Product
	              img={Img6}
	              name='Bloom Farmss'
	              catName='Strawberry Banana'
	              tagName='Sativa'
	              price='1/8 | $35.00'
	              tagClassName="tag-light-blue"
	              rewardClassName="d-none"
	            />
	          </div>
	          <div className={`${resultstyles.col}`}>
	            <Product
	              img={Img7}
	              name='Lowell Farms'
	              catName='Hybrid'
	              tagName='Hybrid'
	              price='$40-$75'
	              rewardClassName="d-none"
	            />
	          </div>
	          <div className={`${resultstyles.col}`}>
	            <Product
	              img={Img8}
	              name='Canndescent'
	              catName='Charge'
	              tagName='Indica'
	              price='1/8 | $30.00'
	              tagClassName="tag-warning"
	              rewardClassName="d-none"
	            />
	          </div>
	        </div>
	      </div>
		  <Popup>
			<ul className={`${modalstyles.list}`}>
				{state.map(d => (
					<li key={d.id}>
						{ListItem(d)}
					</li>
				))}
			</ul>
		  </Popup>
		</>
	);
}

