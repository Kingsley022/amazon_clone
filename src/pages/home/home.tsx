import Carousel from "./carousel/carousel";
import Rows from "../../common/rows/rows";
import SignIn from "./signIn/signIn";

const Home = () => {
    return (
        <>
            <Carousel/>
            <Rows/>
            <SignIn/>
        </>
    );
}
 
export default Home;