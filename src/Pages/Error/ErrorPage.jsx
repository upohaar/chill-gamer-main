
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/Images/fourOfour.json";
const ErrorPage = () => {
    return (
       
        <div className="w-8/12 mx-auto my-5">
           <Lottie className="h-96" animationData={groovyWalkAnimation} />
           <p className="text-3xl font-bold text-center">Page Not Found</p>
        </div>
    );
};

export default ErrorPage;