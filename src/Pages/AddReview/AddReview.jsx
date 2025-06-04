import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddReview = () => {
  const {user}=useContext(AuthContext)

    const handelAddReview = e =>{
        e.preventDefault()
       const form = e.target;
       const photo=form.photo.value;
       const name = form. name.value;
       const description= form.description.value;
       const rating= parseInt(form.rating.value) ;
       const year= parseInt(form.year.value) ;
       const genres= form.genres.value;
       const email= form.email.value;
       const userName= form.userName.value;
     
      const newReview ={photo,name,description,rating,year,genres,email,userName}
      console.log(newReview);
        // send data to the server
      fetch('https://chill-gamer-server.onrender.com/reviews',{
        method: "POST",
         headers:{
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(newReview)
      })
      .then(res => res.json())
      .then(data=>{
        console.log(data);

        if (data.insertedId ) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "user added successfully",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })

    }
  return (
    <div>
      <div className=" bg-green-100 md:p-24 p-2 min-h-screen">
        <div className=" ">
          <div className="text-center ">
            <h1 className="text-2xl md:text-5xl font-bold mb-5" >Add New Review</h1>
          </div>
          <form onSubmit={handelAddReview}>
            <div className=" md:flex gap-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo-Url"
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
            </div>

            <div className=" md:flex gap-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="description"
                    placeholder="description"
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="rating"
                    placeholder="rating"
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
            </div>

            <div className=" md:flex gap-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Publishing year</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="year"
                    placeholder="Publishing year"
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Genres </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="genres"
                    placeholder="genres "
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
            </div>

            <div className=" md:flex gap-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <label className="input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="User Email"
                    value={user?.email}
                    readOnly
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="userName"
                    value={user?.displayName}
                    placeholder="User Name "
                    readOnly
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
            </div>
            <button className="btn btn-block bg-green-500 text-white mt-3 font-bold">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
