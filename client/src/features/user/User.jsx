import React from "react";
import { useGetUsersQuery } from "./userApiSlice";

const User = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery();

  let content = "";

  if (isLoading) {
    content = <h1>Loading . . .</h1>;
  }
  if (isSuccess) {
    content = users.users.map(({ name, photo, email }, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{photo}</td>
          <td>
            <a href="#" className="btn btn-sm btn-info">
              View
            </a>
            &nbsp;
            <a href="#" className="btn btn-sm btn-warning">
              Edit
            </a>
            &nbsp;
            <a href="#" className="btn btn-sm btn-danger">
              Delete
            </a>
          </td>
        </tr>
      );
    });
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <h1>This is User</h1>
        </div>
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Photo</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{content}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;
