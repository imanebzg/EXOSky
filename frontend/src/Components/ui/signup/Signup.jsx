import CustomForm from "../CustomForm/CustomForm";
import './Signup.css'
function Signup({onClickCancel}) {

     const list  = [
        { label: "Username" , type:"text" , method : null },
        { label: "Email Address" , type:"email" , method : null },
        { label: "Password" , type:"password" , method : null },
        { label: "Confirm Password" , type:"password" , method : null },

     ]
   

    return ( <div className="signupcontainer">
        <p className="titlee">
            Create an account
        </p>
        <br/>

        <form>
            <div className="gridc">
               {list && list.map((item) => <CustomForm label={item.label}/>)

               }
            </div>
            <br/>
            <br/>
            <div className="buttoncontainer">
                <button className="cancelbutton"  onClick={onClickCancel}>
                    Cancel
                </button>
                <button className="signup">
                    Sign up
                </button>
            </div>
        </form>
    </div> );
}

export default Signup;