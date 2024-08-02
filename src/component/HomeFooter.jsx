import React from 'react'
import Rating from './Rating';


const orders = [
    {
        id: 1,
        customerName: 'John Doe',
        orderNo: '#12345',
        amount: '$150.00',
        status: 'Completed',
        statusColor: 'text-green-500 bg-green-900',
        customerPic: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
        id: 2,
        customerName: 'Jane Smith',
        orderNo: '#12346',
        amount: '$200.00',
        status: 'Pending',
        statusColor: 'text-yellow-500 bg-yellow-900',
        customerPic: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
        id: 3,
        customerName: 'Alice Johnson',
        orderNo: '#12347',
        amount: '$300.00',
        status: 'Cancelled',
        statusColor: 'text-red-500 bg-red-900',
        customerPic: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    {
        id: 4,
        customerName: 'Jane Smith',
        orderNo: '#12346',
        amount: '$200.00',
        status: 'Pending',
        statusColor: 'text-yellow-500 bg-yellow-900',
        customerPic: 'https://randomuser.me/api/portraits/women/4.jpg'
    },
    {
        id: 5,
        customerName: 'Alice Johnson',
        orderNo: '#12347',
        amount: '$300.00',
        status: 'Completed',
        statusColor: 'text-green-500 bg-green-900',
        customerPic: 'https://randomuser.me/api/portraits/women/5.jpg'
    },
    {
        id: 6,
        customerName: 'Jane Smith',
        orderNo: '#12346',
        amount: '$200.00',
        status: 'Completed',
        statusColor: 'text-green-500 bg-green-900',
        customerPic: 'https://randomuser.me/api/portraits/women/6.jpg'
    },
    {
        id: 7,
        customerName: 'Alice Johnson',
        orderNo: '#12347',
        amount: '$300.00',
        status: 'Cancelled',
        statusColor: 'text-red-500 bg-red-900',
        customerPic: 'https://randomuser.me/api/portraits/women/7.jpg'
    }
];


const customerDetails = [
    {
        "name": 'Alice Johnson',
        "image": "https://randomuser.me/api/portraits/women/1.jpg",
        "rating": 4.5,
        "description": "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    },
    {
        "name": "Jane Smith",
        "image": "https://randomuser.me/api/portraits/women/2.jpg",
        "rating": 3.8,
        "description": "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum."
    },
    {
        "name": "Bob Brown",
        "image": "https://randomuser.me/api/portraits/women/3.jpg",
        "rating": 5.0,
        "description": "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum."
    }
]






const HomeFooter = () => {
    return (
        <div className='flex flex-wrap justify-between mt-4 h-auto md:h-[500px]'>

            <div className='bg-[#1F2029] w-full md:w-[55%] h-auto md:h-full p-6'>
                <div>
                    <h1 className='text-3xl font-bold'>Recent Orders</h1>
                    <div className='mt-4 flex border-b border-solid border-gray-100 py-2'>
                        <div className='w-12 h-12'></div>
                        <div className='flex-1 text-left font-semibold'>Customers</div>
                        <div className='flex-1 text-center font-semibold'>Order No</div>
                        <div className='flex-1 text-center font-semibold'>Amount</div>
                        <div className='flex-1 text-center font-semibold'>Status</div>
                    </div>
                    <div className='mt-4 max-h-80 overflow-y-auto'>
                        {orders.map(order => (
                            <div key={order.id} className='flex border-b border-solid border-gray-100 py-2 items-center'>
                                <img src={order.customerPic} alt='customerPic' className='w-12 h-12 rounded-full mr-2' />
                                <div className='flex-1 text-left'>{order.customerName}</div>
                                <div className='flex-1 text-center'>{order.orderNo}</div>
                                <div className='flex-1 text-center'>{order.amount}</div>
                                <div className={`flex-1 text-center rounded-full py-1 ${order.statusColor}`}>{order.status}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>






            <div className='bg-[#1F2029] w-full md:w-[42%] h-auto md:h-full p-6'>
                <div>
                    <h1 className='text-3xl font-bold'>Customer's Feedback</h1>
                    <div className='mt-4 flex flex-col  max-h-[400px] overflow-y-auto'>
                        {customerDetails.map(order => (
                            <div key={order.id} className='flex flex-col border-b border-solid border-gray-100 py-4'>
                                <div className='flex items-center mb-2'>
                                    <img src={order.image} alt='customerPic' className='w-12 h-12 rounded-full mr-4' />
                                    <div className='text-lg font-semibold'>{order.name}</div>
                                </div>
                                <div className='flex items-center mb-2'>
                                    <div className='flex-1 text-left'><Rating value={order.rating} /></div>
                                </div>
                                <div className='flex items-center'>
                                    <div className='flex-1 text-left text-white'>{order.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>




        </div>
    )
}

export default HomeFooter
