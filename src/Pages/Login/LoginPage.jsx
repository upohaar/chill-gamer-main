import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const LoginPage = () => {
  const { userLogin, setUser, SignInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    userLogin(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        Swal.fire("Please try again!");
      });
  };

  const handelGoogle = () => {
  
    SignInWithGoogle()
      .then(result => {
        console.log(result);
        if(result.user){
          navigate("/")
        };
       
      })
     
      .catch((error) => {
        Swal.fire("Please try again!");
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="md:text-5xl text-3xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
            <form onSubmit={handelLogin} className="card-body  md:w-[500px]">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-500 text-white">Login</button>
              </div>
              <p className="text-center">
                Dont't Have an Account ?{" "}
                <Link to="/register">
                  <span className="text-[#438a7a] font-semibold"> Registe</span>
                </Link>
              </p>

              <p onClick={handelGoogle} className="text-center btn">
                <span>
                  <FaGoogle />
                </span>{" "}
                Login With Google
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
