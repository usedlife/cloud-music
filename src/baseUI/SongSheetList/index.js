import React from 'react';
import { ListWrapper, List, ListItem } from './style';
import { getCount } from '../../api/utils'

function RecommendList(props) {

  const { list } = props;

  return (
    <ListWrapper>
      <List>
        {list.toJS().map((item, index) => {
          return (
            <ListItem key={index}>
              <div className='img_wrapper'>
                <div className="decorate"></div>
                <span className="count">{getCount(item.playCount)}</span>
                <img src={item.picUrl + '?param=300x300'} />
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
