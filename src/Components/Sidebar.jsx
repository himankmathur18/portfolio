import { useState } from 'react';

const Sidebar = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };
    return (
        <div className={`sidebar ${isSidebarVisible ? 'show' : ''}`}>
            {/* Sidebar */}
            <button className="close-btn" onClick={toggleSidebar}>Social</button>
            {
                isSidebarVisible && (
                    <button className="open-btn" onClick={toggleSidebar}>&#9776;
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/himank-mathur-26b63a261/"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://github.com/himankmathur18"><i className="fab fa-github"></i></a>
                            <a href="mailto:himankmathur9@gmail.com"><i className="fa-solid fa-envelope-open"></i></a>
                        </div>
                    </button>
                )
            }
        </div >
    );
};

export default Sidebar;
