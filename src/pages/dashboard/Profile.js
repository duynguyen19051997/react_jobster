import React, { useState } from "react";
import { FormRow } from "../../components/index";
import classes from "../../assets/css/Profile.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updateUser } from "../../features/user/userSlice";
import { Loading } from "../../components/index";

export const Profile = (props) => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: user?.name || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    location: user?.location || "",
  });

  const changeHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitHandle = (e) => {
    e.preventDefault();
    const { name, lastName, email, location } = userData;
    if (!name || !lastName || !email || !location) {
      toast.warning("Please fill out all fields!");
      return;
    }
    dispatch(updateUser(userData));
  };

  return (
    <section className={classes["profile_container"]}>
      <h2>Profile</h2>
      <form className={classes["form_container"]} onSubmit={submitHandle}>
        <FormRow
          name="name"
          type="text"
          labelText="Name"
          value={userData.name}
          onChangeHandle={changeHandle}
        />
        <FormRow
          name="lastName"
          type="text"
          labelText="last name"
          value={userData.lastName}
          onChangeHandle={changeHandle}
        />
        <FormRow
          name="email"
          type="email"
          labelText="email"
          value={userData.email}
          onChangeHandle={changeHandle}
        />
        <FormRow
          name="location"
          type="text"
          labelText="location"
          value={userData.location}
          onChangeHandle={changeHandle}
        />
        {!isLoading && (
          <div className={classes["action_container"]}>
            <button
              className={`btn ${classes["btn_save_changes"]}`}
              type="submit"
            >
              Save changes
            </button>
          </div>
        )}
        {isLoading && <Loading />}
      </form>
    </section>
  );
};
