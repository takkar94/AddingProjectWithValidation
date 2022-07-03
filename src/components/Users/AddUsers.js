import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUsers.module.css";
import { useState } from "react";

const AddUser = (props) => {
    
    const [userName, setUserName] =useState('');
    const [age, setAge] =useState('');
    
    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(userName, age);
        setUserName('');
        setAge('');
    }
    
    const usernameChangeHandler = (event) => {
        setUserName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    };
    return (
        <Card className={classes.input} >
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={userName} onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age(Years)</label>
                <input id="age" type="number" value={age} onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
};

export default AddUser;