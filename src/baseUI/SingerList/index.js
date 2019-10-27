import React from 'react';
import LazyLoad from 'react-lazyload';

import { List, Item } from './style';
import singerImg from '../../assets/singer.png'

const SingerList = ({list, onClick}) => {
  return (
    <List>
      {list.toJS().map((item, index) => {
        return (
          <Item key={item.id} onClick={() => {onClick(item)}}>
            <div className='imgWrapper'>
              <LazyLoad placeholder={<img src={singerImg} width="100%" height="100%" />}>
                <img src={item.picUrl + '?param=300x300'}/>
              </LazyLoad>
            </div>
            <span className='name'>{item.name}</span>
          </Item>
        )
      })}
    </List>
  )
}

export default React.memo(SingerList);