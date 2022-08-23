import React, { useState } from "react";

 
const Form = () => {
 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userDate, setUserDate] = useState('');
 
    function onChangeUsername(e) {
        setUsername(e.target.value)
    }
    function onChangeUserDate(e) {
        setUserDate(e.target.value)
    }
    function onChangePassword(e) {
        setPassword(e.target.value)
    }
 
    function onSubmit(e) {
        e.preventDefault()
        localStorage.setItem('username', username);
        localStorage.setItem('userDate', userDate);
        localStorage.setItem('password', password);
    }
 
    function getData() {
        console.log(localStorage.getItem('username'));
        console.log(localStorage.getItem('password'));
        console.log(localStorage.getItem('userDate'));
    }


   
    return (
        <>
            <div>
                <h1>Welcome !</h1>
 
                <div>
                    <form onSubmit={onSubmit}>
                        <div>
                            <label>Username</label>
                            <input type="text" value={username} onChange={onChangeUsername} />
                        </div>
                        <div>
                            <label>Birth Date</label>
                            <input type="date" value={userDate} onChange={onChangeUserDate} />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" value={password} onChange={onChangePassword} />
                        </div>
                        <button type="submit">Submit</button>
                        <button type="button" onClick={getData}>Get Data</button>
                    </form>
                </div>
            </div>
        </>
    );
};
 
export default Form;