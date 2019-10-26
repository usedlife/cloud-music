import React from 'react';

import { List, Item } from './style';

const SingerList = ({list = [], onClick}) => {
  return (
    <List>
      {list.map(item => {
        return (
          <Item key={item.id} onClick={() => {onClick(item)}}>
            <img src={item.picUrl}/>
            <span className='name'>{item.name}</span>
          </Item>
        )
      })}
    </List>
  )
}

export default React.memo(SingerList);