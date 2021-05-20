import React from 'react';
//buttons
import Button from "../button";
import Tag from "../tag";
//Input
import Input from "../input";
//img
import Cart from '../../resources/svg-icons/cart.svg';
import MenuIcon from '../../resources/svg-icons/menubar.svg';
import Downarrow from '../../resources/svg-icons/down-arrow.svg';
import SearchIcon from '../../resources/svg-icons/search-gray.svg';

//button css
import btnstyles from '../button/style.scss';


export default function StyleGuide() {
	const button = {
		margin: "0 .33rem .33rem 0",
		display: "inline-block",
		verticalAlign: "top",
	};
  return (
	<>
		<div className="container" style={{ margin: '20px auto', maxWidth: '1200px' }}>
			<h1 className="h2 text-primary"><u>Style Guide:</u></h1>
			<ul style={{padding: '0', listStyle: 'none'}}>
				<li className="text-primary">
					<h4 className="text-primary">Typography</h4>
					<h1>Heading 1</h1>
					<h2>Heading 2</h2>
					<h3>Heading 3</h3>
					<h4>Heading 4</h4>
					<h5>Heading 5</h5>
					<h6>Heading 6</h6>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
					  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
					  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
					  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
					  with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
				</li>
				<li className="text-primary">
					<h4 className="text-primary">Button</h4>
					<div style={{ margin: '20px auto' }}>
						<div style={button}>
						  	<Button>Button</Button>
						</div>
						<div style={button}>
						  	<Button disabled>Button</Button>
						</div>
						<div style={button}>
							<Button
							  className="btn-rounded btn-with-icon"
							>
							  <img src={Cart} className={`${btnstyles.icon}`} />
							  <span className={`${btnstyles['btn-text']}`}>3</span>
							</Button>
						</div>
						<div style={button}>
							<Button
								className="btn-rounded btn-with-icon"
							>
								<img src={Cart} className={`${btnstyles.icon}`} />
							</Button>
						</div>
						<div style={button}>
							<Button
								className="btn-link"
							>
								Button
							</Button>
						</div>
						<div style={button}>
							<Button
								className="btn-link btn-link-primary"
							>
								Button
							</Button>
						</div>
						<br />
						<br />
						<div style={button}>
							<Button className="btn-link btn-dropdown">
								<span className="text-truncate">3231 Centinela Road</span>
								<img src={Downarrow} alt="arrow" className={`${btnstyles['sm-icon']}`} />
							</Button>
						</div>
						<br />
						<div style={button}>
							<Button className="btn-link btn-link-btn btn-no-width-padding">
								<img src={MenuIcon} alt="Menu" className={`${btnstyles['svg-icon']}`} />
							</Button>
						</div>
						
						
					</div>
				</li>
				<li className="text-primary">
					<h4 className="text-primary">Link Button</h4>
					<div style={{ margin: '20px auto' }}>
						<div style={button}>
							<Button element="a" href="/">Button</Button>
						</div>
						<div style={button}>
							<Button
								className="btn-rounded btn-with-icon"
								element="a" href="/"
							>
								<img src={Cart} className={`${btnstyles.icon}`} />
								<span className={`${btnstyles['btn-text']}`}>3</span>
							</Button>
						</div>
						<div style={button}>
							<Button
								className="btn-rounded btn-with-icon"
								element="a" href="/"
							>
								<img src={Cart} className={`${btnstyles.icon}`} />
							</Button>
						</div>
						<div style={button}>
							<Button
								className="btn-link"
								element="a" href="/"
							>
								Button
							</Button>
						</div>
						<div style={button}>
							<Button
								className="btn-link btn-link-primary"
								element="a" href="/"
							>
								Button
							</Button>
						</div>
					</div>
				</li>
				<li className="text-primary">
					<h4 className="text-primary">Tags</h4>
					<div style={{ margin: '20px auto' }}>
						<div style={button}>
							<Tag name="Hybrid" />
						</div>
						<div style={button}>
							<Tag name="Indica" className="tag-warning" />
						</div>
						<div style={button}>
							<Tag name="Sativa" className="tag-light-blue" />
						</div>
						<div style={button}>
							<Tag name="Hybrid" className="tag-light small-tag" />
						</div>
					</div>
				</li>
				<li>
					<h4 className="text-primary">Input</h4>
					<div>
						<Input 
							type="text"
							placeholdertext="What are you looking"
							icon={SearchIcon}
						/>
					</div>
				</li>
			</ul>
		</div>
	</>
	);
}
