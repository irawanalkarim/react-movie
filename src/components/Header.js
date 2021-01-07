import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<header>
			<div className="container">
				<div className="inner-content">
					<div className="brand">
						<Link to="/">Movie List</Link>
					</div>

					<ul className="nav-links">
						<li>
							<Link to="/">Favourite</Link>
						</li>

						<li>
							<Link to="/watched">Saved</Link>
						</li>

						<li>
							<Link to="/add" className="btn">
								+Add Movie
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
}

