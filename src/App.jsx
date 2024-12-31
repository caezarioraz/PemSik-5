import React from 'react';
import AdminLayout from '../Layouts/AdminLayouts.jsx';
import Mahasiswa from './Admin/Mahasiswa';

const App = () => (
    <AdminLayout>
        <Mahasiswa />
        <Footer />  {/* Add Footer here */}
    </AdminLayout>
);

function Footer() {
    return (
      <footer className="bg-zinc-500 text-center text-white p-4">
        All Right Reserved &copy; 2024 Makan Gratis
      </footer>
    );
}
export default App;
