import Banner1 from "../../assets/Images/Banner2.png";
import Banner2 from "../../assets/Images/Banner6.jpg";
import Banner3 from "../../assets/Images/banner4.jpg";

const Banner = () => {
  return (
    <div className="z-0 ">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
         <div className="relative w-full">
         <img
            src={Banner1}
            className="w-full h-[450px] object-cover"
          />
         </div>
         <div className="absolute left-7 top-44 md:top-40 md:left-[200px]">
          <h3 className="text-white text-2xl font-extrabold md:text-5xl">NEXT-GEN <br /> GAMING EXPERIENGE <br /> WITH US</h3>
         </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <div className="relative w-full">
         <img
            src={Banner2}
            className="w-full h-[450px] object-cover"
          />
         </div>
         <div className="absolute left-7 top-44 md:top-40 md:left-[200px]">
          <h3 className="text-white text-2xl  font-extrabold md:text-5xl">NEXT-GEN <br /> GAMING EXPERIENGE <br /> WITH US</h3>
         </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <div className="relative w-full">
         <img
            src={Banner3}
            className="w-full h-[450px] object-cover"
          />
         </div>
         <div className="absolute left-7 top-44 md:top-40 md:left-[200px]">
          <h3 className="text-white font-extrabold text-2xl md:text-5xl">NEXT-GEN <br /> GAMING EXPERIENGE <br /> WITH US</h3>
         </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
