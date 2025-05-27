export const TabNavigation = ({ tabs = [], selectedId, setActiveId }) => {
  return (
    <nav className="tab-navigation__tabs-container">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-navigation__tab ${selectedId === tab.id ? ' m_selected' : ''}`}
          onClick={() => setActiveId(tab.id)}
        >
          {tab.name}
        </button>
      ))}
    </nav>
  );
};
