import React from 'react';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';

import { Top, Tab } from './style'

const Home = (props) => {

  const { route } = props

  return (
    <article>
      <Top>
        <span>📄</span>
        <span className='top_title'>云音乐</span>
        <span>🍳</span>
      </Top>
      <Tab>
        <NavLink to='/recommend' activeClassName='selected'><span>推荐</span></NavLink>
        <NavLink to='/singers' activeClassName='selected'><span>歌手</span></NavLink>
        <NavLink to='rank' activeClassName='selected'><span>排行榜</span></NavLink>
      </Tab>

      {renderRoutes(route.routes)}
    </article>
  )
}

export default React.memo(Home)