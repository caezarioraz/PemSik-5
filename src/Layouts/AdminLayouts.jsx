import React from 'react';
import Sidebar from '../Components/Sidebar';

const AdminLayout = ({ children }) => (
    <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
            {children}
        </div>
    </div>
);

export default AdminLayout;
