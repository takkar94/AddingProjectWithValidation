import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUsers.module.css";
import { useState } from "react";
import UsersList from "./UsersList";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  
  //adding the username and checking for validation
  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim() === 0 || age.trim() === 0) {
      return;
    }
    if (+age < 1) {
      return;
    }
    console.log(userName, age);
    setUserName("");
    setAge("");
  };

  //sets the username
  const usernameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  //sets the age
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={userName}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number" value={age} onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
