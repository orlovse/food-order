export const TabNavigation = ({ tabs = [], selectedId, setActiveId }) => {
	return (
			<nav>
				<ul className="tab-navigation__tabs-container">
					{tabs.map(tab => (
						<li
							key={tab.id}
							className={`tab-navigation__tab ${selectedId === tab.id ? ' m_selected' : ''}`}
							onClick={() => setActiveId(tab.id)} 
						>
							{tab.name}
						</li>
					))}
				</ul>
			</nav>
	);
};