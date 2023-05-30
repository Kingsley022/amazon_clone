import SignBtn from '../../../common/buttons/buttonTwo';
import './signIn.css';
const SignIn = () => {
    const handleSignIn =()=>{
        console.log('Hello')
    }
    return (
        <div className="signInContainer">
            <div className="signIn">
                <p>See personalized recommendations</p>
                <SignBtn text='Sign in' style='btn' handleClick={handleSignIn}/><br/>
                <small>New customer? <span>Start here.</span></small>
            </div>
        </div>
    );
}
 
export default SignIn;