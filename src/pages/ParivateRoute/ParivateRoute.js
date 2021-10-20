import React from 'react';
import { Route, Redirect } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const ParivateRoute = ({ children, ...rest }) => {
  const { user, isLocading } = useAuth();

  if (isLocading) {
    return "loading";
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    >
    </Route>
  );
};

export default ParivateRoute;