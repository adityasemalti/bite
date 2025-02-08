import React from 'react';

const AdminDashboard = () => {
    // Sample data (replace with actual data from backend)
    const orders = [
        {
            id: 1,
            customerName: 'John Doe',
            productId: 'P1001',
            productName: 'Smartphone',
            purchaseDate: '2025-02-08',
            price: '$699'
        },
        {
            id: 2,
            customerName: 'Jane Smith',
            productId: 'P1002',
            productName: 'Laptop',
            purchaseDate: '2025-02-07',
            price: '$1299'
        },
        {
            id: 3,
            customerName: 'Alice Johnson',
            productId: 'P1003',
            productName: 'Smartwatch',
            purchaseDate: '2025-02-06',
            price: '$299'
        }
    ];

    const logOutUser = ()=>{
      window.location.reload()
     }

    return (
      <>
      <div className='flex items-center justify-between p-5'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'> 👋</span></h1>
      <button onClick={logOutUser} className=' bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
      </div>
        <div className="p-6">
        
            <h1 className="text-2xl font-semibold mb-4">Customer Orders</h1>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Order ID</th>
                            <th className="border border-gray-300 px-4 py-2">Customer Name</th>
                            <th className="border border-gray-300 px-4 py-2">Product ID</th>
                            <th className="border border-gray-300 px-4 py-2">Product Name</th>
                            <th className="border border-gray-300 px-4 py-2">Purchase Date</th>
                            <th className="border border-gray-300 px-4 py-2">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="text-center">
                                <td className="border border-gray-300 px-4 py-2">{order.id}</td>
                                <td className="border border-gray-300 px-4 py-2">{order.customerName}</td>
                                <td className="border border-gray-300 px-4 py-2">{order.productId}</td>
                                <td className="border border-gray-300 px-4 py-2">{order.productName}</td>
                                <td className="border border-gray-300 px-4 py-2">{order.purchaseDate}</td>
                                <td className="border border-gray-300 px-4 py-2">{order.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
};

export default AdminDashboard;

