import { useContext } from "react";
import girl from "../../assets/Images/AboutUs.jpg";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AboutUs = () => {
  const {theme}= useContext(AuthContext)
  return (
    <div className={`-mt-4 py-10 ${ theme=="light"?"bg-white":"bg-gray-900"}`}>
      <div className="hero  min-h-screen -mt-3 py-10">
        <div>
            <h2 className="text-center text-white md:text-4xl text-2xl font-bold">About Us</h2>
            <div className="hero-content flex-col lg:flex-row-reverse w-11/12 mx-auto p-3">
          <img
            src={girl}
            className=" rounded-lg "
          />
          <div className={`${ theme=="light"?"text-black":" text-white"}`}>
            <h1 className="md:text-5xl text-2xl font-bold">The Journey of The
            NFT Sites</h1>
            <p className="py-6 text-gray-400">
            Gorem npsum dolor sit amet consectetur adipiscing elit. Duis elementum sollici tudin augue euismod. Nulla ullamcorper nunc. Morbi pharetra mi tellus mollis tincidunt massa venenatis. Etiam lacinia ipsumultrices.
            </p>
            <button className="btn bg-green-500 hover:bg-green-600 text-white">READ MORE</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
