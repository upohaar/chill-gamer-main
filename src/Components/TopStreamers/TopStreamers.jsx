
import { useContext } from "react";
import streamer1 from "../../assets/Images/streamers01.png"
import streamer2 from "../../assets/Images/streamers02.png"
import streamer3 from "../../assets/Images/streamers03.png"
import streamer4 from "../../assets/Images/streamers04.png"
import { AuthContext } from "../../AuthProvider/AuthProvider";


const TopStreamers = () => {
  const {theme}= useContext(AuthContext)
  return (
    <div className={`py-10 ${ theme=="light"?"bg-white ":"bg-gray-900 "}`}>
      <div>
        <h4 className="text-center text-green-400 font-bold uppercase">
          Our top streamers
        </h4>
        <h2 className={`text-center uppercase font-bold md:text-4xl text-2xl ${ theme=="light"?"text-black":" text-white"}`}>
          top rated streamers
        </h2>

        <div className="w-11/12 mx-auto py-7">
          <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 ">
              <img
                src={streamer1}
                className="lg:w-[400px] w-full"
              />
              <img
                src={streamer2}
                className="lg:w-[400px] w-full"
              />
              <img
                src={streamer3}
                className="lg:w-[400px] w-full"
              />
              <img
                src={streamer4}
                className="lg:w-[400px] w-full"
              />
              
              </div>
            </div>
            <div id="item2" className="carousel-item w-full">
             <div  className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 ">
             <img
                src={streamer2}
                className="lg:w-[400px] w-full"
              />
                <img
                src={streamer4}
                className="lg:w-[400px] w-full"
              />
              <img
                src={streamer3}
                className="lg:w-[400px] w-full"
              />
               <img
                src={streamer1}
                className="lg:w-[400px] w-full"
              />
             </div>
            </div>
            <div id="item3" className="carousel-item w-full">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 ">
              <img
                src={streamer1}
                className="lg:w-[400px] w-full"
              />
              <img
                src={streamer2}
                className="lg:w-[400px] w-full"
              />
              <img
                src={streamer3}
                className="lg:w-[400px] w-full"
              />
              <img
                src={streamer4}
                className="lg:w-[400px] w-full"
              />
              
              </div>
            </div>
            <div id="item4" className="carousel-item w-full">
            <div  className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 ">
             <img
                src={streamer2}
                className="lg:w-[400px] w-full"
              />
                <img
                src={streamer4}
                className="lg:w-[400px] w-full"
              />
              <img
                src={streamer3}
                className="lg:w-[400px] w-full"
              />
               <img
                src={streamer1}
                className="lg:w-[400px] w-full"
              />
             </div>
            </div>
          </div>
          <div className="flex w-full justify-center gap-2 py-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
            <a href="#item4" className="btn btn-xs">
              4
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopStreamers;
