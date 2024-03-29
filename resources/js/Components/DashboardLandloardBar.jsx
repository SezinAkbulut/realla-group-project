import React from 'react';

const DashboardLandloardBar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebar-menu">
                <li className="sidebar-menu-item">
                    <div className="sidebar-menu-content">
                        <i className='bx bxs-compass' style={{color: '#FDB414'}}/>
                        <a href="#" className="sidebar-menu-link">Explore</a>
                    </div>
                </li>

                <li className="sidebar-menu-item">
                    <div className="sidebar-menu-content">
                        <i className='bx bxs-hand' style={{color: '#FDB414'}}></i>
                        <a href="#" className="sidebar-menu-link">Report a problem</a>
                    </div>
                </li>
                <li className="sidebar-menu-item">
                    <Link href="/mailbox-landlord" className="sidebar-menu-content">
                        <i className='bx bxs-message-detail' style={{color: '#FDB414'}}></i>
                        <a href="#" className="sidebar-menu-link">Message</a>
                    </Link>
                </li>
                <li className="sidebar-menu-item">
                    <div className="sidebar-menu-content">
                        <i className='bx bx-calendar' style={{color: '#FDB414'}}></i>
                        <a href="#" className="sidebar-menu-link">Appointment</a>
                    </div>
                </li>
                <li className="sidebar-menu-item">
                    <div className="sidebar-menu-content">
                        <i className='bx bxs-home-heart' style={{color: '#FDB414'}}></i>
                        <a href="#" className="sidebar-menu-link">Find a real estate</a>
                    </div>
                </li>
                <li className="sidebar-menu-item">
                    <div className="sidebar-menu-content">
                        <i className='bx bx-font-family' style={{color: '#FDB414'}}></i>
                        <a href="#" className="sidebar-menu-link">Find a tenant</a>
                    </div>
                </li>
                <li className="sidebar-menu-item">
                    <div className="sidebar-menu-content">
                        <i className='bx bx-loader-circle' style={{color: '#FDB414'}}></i>
                        <a href="#" className="sidebar-menu-link">Follow up problems</a>
                    </div>
                </li>
                <li className="sidebar-menu-item">
                    <div className="sidebar-menu-content">
                        <i className='bx bxs-user-circle' style={{color: '#FDB414'}}></i>
                        <a href="#" className="sidebar-menu-link">My Profile</a>
                    </div>
                </li>
            </ul>
        </div>
    );
};
export default DashboardLandloardBar;

