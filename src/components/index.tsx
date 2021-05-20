import React from 'react';
import { Link } from "react-router-dom";

export default () => (
	<>
		<div className="container">
			<br />
			<h1 className="h2">Drop 2.0 PWA</h1>
			<h2 className="h4">Style Guide &amp; Components</h2>
			<hr />
			<Link to="/styleguide/"><u>View style guide</u></Link>
			<br />
			<br />
			<div>
				<div>
					<h3 className="h4">
						Home
					</h3>
				</div>
				<ul className="text-primary" style={{fontSize: '16px', paddingLeft:'16px'}}>
					<li>
						<Link to="/home/">Home screen</Link>
					</li>
				</ul>
				<div>
					<h3 className="h4">
						Search
					</h3>
				</div>
				<ul className="text-primary" style={{ fontSize: '16px', paddingLeft: '16px' }}>
					<li>
						<Link to="/search/">Search</Link>
					</li>
					<li>
						<Link to="/search-result/">Search result</Link>
					</li>
					<li>
						<Link to="/no-result/">No result</Link>
					</li>
					<li>
						<Link to="/deals-results/">Deals result</Link>
					</li>
				</ul>
				<div>
					<h3 className="h4">
						Menu
					</h3>
				</div>
				<ul className="text-primary" style={{ fontSize: '16px', paddingLeft: '16px' }}>
					<li>
						<Link to="/menu/">Menu</Link>
					</li>
					<li>
						<Link to="/menu/menu-popup">Menu Popup</Link>
					</li>
				</ul>
				<div>
					<h3 className="h4">
						Invidual Product
					</h3>
				</div>
				<ul className="text-primary" style={{ fontSize: '16px', paddingLeft: '16px' }}>
					<li>
						<Link to="/individual-product/">Invidual Product</Link>
					</li>
					<li>
						<Link to="/test/">Test</Link>
					</li>
				</ul>
			</div>
		</div>

	</>
);
