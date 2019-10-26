import React, { useState, useRef, memo, useEffect } from 'react';
import styled from 'styled-components';
import Scroll from '../../components/Scroll';

const Horizen = ({ labelList = [], title = '', onClick }) => {

  const [currentKey, setCurrentKey] = useState();

  const Category = useRef(null)

  const handleItemClick = (key) => {
    setCurrentKey(key);
    onClick && onClick(key);
  }

  useEffect(() => {
    const scrollDom = Category.current;
    const tags = scrollDom.querySelectorAll('span');
    let totalWidth = 0;
    Array.from(tags).forEach(ele => {
      totalWidth += ele.offsetWidth;
    })
    scrollDom.style.width = totalWidth + 'px';
  })

  return (
    <Scroll direction='horizental'>
      <div ref={Category}>
        <List>
          <span className='title'>{title}</span>
          {labelList.map(item => {
            const { key, title } = item;
            return (
              <Item 
                key={key}
                onClick={() => {handleItemClick(key)}}
                className={currentKey === item.key ? 'selected' : ''}
              >
                {title}
              </Item>
            )
          })}
        </List>
      </div>
    </Scroll>
  )
}

export default memo(Horizen);

const List = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 30px;
  >.title{
    padding: 2px;
    flex: 0 0 auto;
    color: grey;
    font-size: 14px;
  }
`
const Item = styled.span`
  padding: 5px;
  flex: 0 0 auto;
  font-size: 14px;
  border-radius: 6px;
  &.selected{
    padding: 4px;
    border: 1px solid rgb(212, 68, 57);
    color: rgb(212, 68, 57);
  }
`