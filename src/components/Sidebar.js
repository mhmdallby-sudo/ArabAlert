import React, { useState } from 'react';
import './Sidebar.css';
import { FiBell, FiSettings, FiPalette, FiType, FiGift, FiEye, FiMenu, FiX } from 'react-icons/fi';

const Sidebar = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { id: 'dashboard', label: 'لوحة التحكم', icon: FiBell },
    { id: 'alerts', label: 'إعدادات التنبيهات', icon: FiSettings },
    { id: 'colors', label: 'إدارة الألوان', icon: FiPalette },
    { id: 'fonts', label: 'إدارة الخطوط', icon: FiType },
    { id: 'donation', label: 'رسوم التبرعات', icon: FiGift },
    { id: 'preview', label: 'معاينة', icon: FiEye }
  ];

  return (
    <>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-icon">🚨</span>
            <span className="logo-text">ArabAlert</span>
          </div>
        </div>
        <nav className="sidebar-nav">
          {menuItems.map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
                onClick={() => {
                  setCurrentPage(item.id);
                  if (window.innerWidth < 768) setIsOpen(false);
                }}
              >
                <Icon className="nav-icon" />
                <span className="nav-label">{item.label}</span>
              </button>
            );
          })}
        </nav>
        <div className="sidebar-footer">
          <div className="version">v1.0.0</div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;