import React from 'react';



class Side extends React.Component {
	render() {



		const localConfig = this.props.config
		const key = Object.keys(localConfig.nav);
		return (
			<div id="app-sidepanel" className="app-sidepanel">
				<div id="sidepanel-drop" className="sidepanel-drop"></div>
				<div className="sidepanel-inner d-flex flex-column">
					<a href="#" id="sidepanel-close" className="sidepanel-close d-xl-none">&times;</a>
					<div className="app-branding">
						<a className="app-logo" href="index.html"><img className="logo-icon mr-2" src={localConfig.logo}
							alt="logo" /><span className="logo-text">{localConfig.logoText}</span></a>

					</div>

					<nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
						<ul className="app-menu list-unstyled accordion" id="menu-accordion">
							{key.map(elem => {
								return (
									<li className="nav-item">
										<a className="nav-link" href={localConfig.nav[elem]['rout']}>
											<span className="nav-icon">
												{localConfig.nav[elem]['img']}
											</span>
											<span className="nav-link-text">{elem}</span>
										</a>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>
			</div>
		);
	}
}

export default Side;