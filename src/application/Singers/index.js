import React from 'react';

import { SingersWrapper } from './style';
import SearchHeader from './component/SearchHeader';
import SingersList from './component/SingersList';

const Singers = () => {
  return (
    <SingersWrapper>
      <SearchHeader />
      {/* <SingersList /> */}
    </SingersWrapper>
  )
}


export default React.memo(Singers);