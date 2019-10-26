import React from 'react';
import styled from 'styled-components';

import Scroll from '../../../components/Scroll';
import List from '../../../baseUI/SingerList';

const SingerList = ({list}) => {
  return (
    <SingerListWrapper>
      <Scroll>
        <div>
          <List list={list}></List>
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
`

export default React.memo(SingerList);