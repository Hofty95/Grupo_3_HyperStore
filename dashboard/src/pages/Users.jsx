import React from "react";
import { useEffect, useState } from "react";
import { UsersTable } from "../components/users/UsersTable";

export const Users = () => {
  const [state, setState] = useState({
    loading: true,
    users: [],
  });

  useEffect(() => {
    fetch("http://localhost:3000/api/users/list")
      .then((response) => {
        return response.json();
      })
      .then(({ ok, data }) => {
        ok &&
          setState({
            loading: false,
            users: data,
          });
      })
      .catch(() => console.error);
  }, []);
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-12 col-md-12">
            <UsersTable users={state.users} />
          </div>
        </div>
      </div>
    </div>
  );
};
