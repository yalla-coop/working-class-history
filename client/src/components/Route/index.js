import { useAuth } from '../../context/auth';
import React from 'react';
import { Route as RouterRoute, Redirect } from 'react-router-dom';
import Layout from './../../components/Layout';
import { GENERAL } from '../../constants/nav-routes';

const Route = (props) => {
  const { layout, path, Component, exact, isPrivet } = props;
  const { user } = useAuth();
  if (isPrivet && !user?.id) {
    return <Redirect to={GENERAL.LOGIN} />;
  }
  return (
    <RouterRoute path={path} {...props} exact={exact}>
      <Layout layout={layout} {...props}>
        <Component {...props} user={user} />
      </Layout>
    </RouterRoute>
  );
};

export default Route;
