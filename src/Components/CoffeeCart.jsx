import React from 'react';
import Swal from 'sweetalert2';

const CoffeeCart = ({ coffee }) => {
    console.log(coffee);
    const { _id, photo, name, price, quantity } = coffee;


    const handleDelete = (_id) => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            console.log(result.isConfirmed);
            if (result.isConfirmed) {

                // delete database to coffee

                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('after deleting data ', data);
                    })





                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
            }
        });
    }


    return (
        <div className=''>
            <div className="card card-side bg-[#F4F3F0]  shadow-sm">
                <figure>
                    <img
                        src={photo}
                        alt="Movie" />
                </figure>
                <div className="flex justify-around w-full mt-4 ">
                    <div>
                        <h2 className="">Name : {name}</h2>
                        <p>price: {price}</p>
                        <p>Quantity: {quantity}</p>
                    </div>
                    <div className="join join-vertical space-y-2">
                        <button className="btn bg-[#D2B48C] join-item">View</button>
                        <button className="btn bg-[#D2B48C] join-item">Edit</button>
                        <button onClick={() => handleDelete(_id)} className="btn  bg-[#D2B48C] join-item">x</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCart;