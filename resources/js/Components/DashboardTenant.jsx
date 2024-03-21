import React from 'react';

const DashboardTenant = () => {
    return (
            <div className="sidebar">
                <ul className="sidebar-menu">
                    <li className="sidebar-menu-item">
                    <div className="sidebar-menu-content">
                        <i className='bx bxs-compass'  style={{ color: '#d2971b'}} />
                        <a href="#" className="sidebar-menu-link">Explore</a>
                    </div>
                    </li>

                    <li className="sidebar-menu-item">
                        <div className="sidebar-menu-content">
                            <i className='bx bxs-hand' style={{ color: '#d2971b'}}></i>
                            <a href="#" className="sidebar-menu-link">Report a problem</a>
                        </div>
                    </li>
                    <li className="sidebar-menu-item">
                        <div className="sidebar-menu-content">
                            <i className='bx bxs-message-detail' style={{ color: '#d2971b'}}></i>
                            <a href="#" className="sidebar-menu-link">Message</a>
                        </div>
                    </li>
                    <li className="sidebar-menu-item">
                        <div className="sidebar-menu-content">
                            <i className='bx bx-calendar' style={{ color: '#d2971b'}}></i>
                            <a href="#" className="sidebar-menu-link">Appointment</a>
                        </div>
                    </li>
                    <li className="sidebar-menu-item">
                        <div className="sidebar-menu-content">
                            <i className='bx bx-folder-open' style={{ color: '#d2971b'}}></i>
                            <a href="#" className="sidebar-menu-link">Documents</a>
                        </div>
                    </li>
                    <li className="sidebar-menu-item">
                        <div className="sidebar-menu-content">
                            <i className='bx bxs-user-circle' style={{ color: '#d2971b'}} ></i>
                            <a href="#" className="sidebar-menu-link">My Profile</a>
                        </div>
                    </li>
                </ul>
            </div>
    );
};
export default DashboardTenant;

