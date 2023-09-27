import { Link, useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {

    const updateCoffee = useLoaderData()
    const { _id, name, quantity, supplier, taste, category, details, photo, } = updateCoffee;

    const handleUpdateCoffee = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateCoffee = { name, quantity, supplier, taste, category, details, photo, }
        console.log(updateCoffee)
        fetch(`http://localhost:5000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <div className='text-center text-2xl text-white font-semibold rounded mb-10 py-2 bg-neutral-400'>
                <Link className='' to='/coffees'>Add coffee</Link>
                <Link className='ml-6' to='/'>Home page</Link>
            </div>
            <div>
                <h1 className="text-1xl font-bold mb-3">Edit Coffee</h1>
                <form onSubmit={handleUpdateCoffee}>
                    <div className="md:flex mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Enter Coffee Name" defaultValue={name} className="input w-full" />
                            </label>
                        </div>
                        <div className="form-control ml-5 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="quantity" placeholder="Enter you Quantity" defaultValue={quantity} className="input w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="supplier" placeholder="Supplier" defaultValue={supplier} className="input w-full" />
                            </label>
                        </div>
                        <div className="form-control ml-5 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="taste" placeholder="How does it Taste" className="input w-full" defaultValue={taste} />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" placeholder="Category" className="input w-full" defaultValue={category} />
                            </label>
                        </div>
                        <div className="form-control ml-5 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" placeholder="Coffee Details" className="input w-full" defaultValue={details} />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Please Enter Photo url " className="input w-full" defaultValue={photo} />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Your Coffee" className="btn btn-block hover:bg-black hover:text-white" />
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;