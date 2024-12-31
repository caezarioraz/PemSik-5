import React from 'react';

const Sidebar = () => (
    <aside className="bg-zinc-600 w-72 text-white">
        <div className="p-8 mt-10">
            <h2 className="font-bold text-4xl">Admin&nbsp;Panel</h2>
            <nav className="mt-4 ml-4">
                <ul>
                    <li className="mb-4 flex items-center">
                        <i data-feather="home" className="mr-2"></i>
                        <a href="#" className="hover:underline">
                            Dashboard
                        </a>
                    </li>
                    <li className="mb-4 flex items-center">
                        <i data-feather="users" className="mr-2"></i>
                        <a href="#" className="hover:underline">
                            Mahasiswa
                        </a>
                    </li>
                    <li className="flex items-center">
                        <i data-feather="settings" className="mr-2"></i>
                        <a href="#" className="hover:underline">
                            Settings
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
);

export default Sidebar;
