import { Link } from "react-router-dom";


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo, } = coffee
    const handleDelete = _id => {
        fetch(`http://localhost:5000/coffees/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    const remaining = coffees.filter(cof => cof._id !== _id)
                    setCoffees(remaining)
                }
            })
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="flex justify-between w-full px-6">
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p className="mb-2">{quantity}</p>
                        <p className="mb-2">{supplier}</p>
                        <p className="mb-2">{taste}</p>
                        <p className="mb-2">{category}</p>
                        <p className="">{details}</p>
                    </div>
                    <div>
                        <div className="btn-group btn-group-vertical space-y-7">
                            <button className="btn ">View</button>
                            <Link to={`/updates/${_id}`}><button className="btn">Edit</button></Link>
                            <button onClick={() => handleDelete(_id)} className="btn">Delete</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;