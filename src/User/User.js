import React from "react";
import loginImage from '../images/loginImage'
import './User.css'


export class User extends React.Component{


    constructor(props){
        super(props); 
    }
      
      render() {
        return <div className="base-container">
            <div className="header">Login</div>
            <div className="content">
                < div className="image">
                    <img src={images/loginImage}/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <h2 htmlFor="UserName">UserName</h2>
                        <input type="text" name="username" placeholder="Username"></input>
                      
                    </div>
                    <div className="form-group">
                        <h2 htmlFor="UserName">Password</h2>
                        <input type="password" name="password" placeholder="password"></input>
                      
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">
                    Login
                </button>
            </div>
        </div>
    }
}
export default User