import React from 'react';
import { renderRoutes } from 'react-router-config';

const Home = (props) => {

  const { route } = props

  return (
    <article>
      <span>Home</span>
      {renderRoutes(route.routes)}
    </article>
  )
}

export default React.memo(Home)