import React from 'react';
import styled from 'styled-components';

import Scroll from '../../../components/Scroll';
import List from '../../../baseUI/SingerList';

const SingerList = ({list, onClick}) => {
  return (
    <SingerListWrapper>
      <Scroll>
        <div>
          <List list={list} onClick={onClick}></List>
        </div>
      </Scroll>
    </SingerListWrapper>
  )
}

const SingerListWrapper = styled.div`
  position: fixed;
  top: 160px;
  bottom: 60px;
  padding: 0px 5px;
  width: 100%;
`

export default React.memo(SingerList);