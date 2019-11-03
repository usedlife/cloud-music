import React from 'react';
import LazyLoad from 'react-lazyload';

import { ListWrapper, List, ListItem } from './style';
import { getCount } from '../../api/utils'
import musicImg from '../../assets/music.png'


function RecommendList(props) {

  const { list, onClick } = props;

  return (
    <ListWrapper>
      <List>
        {list.toJS().map((item, index) => {
          return (
            <ListItem key={index} onClick={() => onClick(item)}>
              <div className='img_wrapper'>
                <LazyLoad placeholder={<img src={musicImg} width="100%" height="100%" />}>
                  <img src={item.picUrl + '?param=300x300'} />
                </LazyLoad>
                <span className="count">{getCount(item.playCount)}</span>
                <div className="decorate"></div>
              </div>
              <div className="desc">{item.name}</div>
            </ListItem>
          )
        })}
      </List>
    </ListWrapper>
  )
}

export default React.memo(RecommendList)
