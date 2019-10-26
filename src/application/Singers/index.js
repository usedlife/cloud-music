import React from 'react';

import SearchHeader from './component/SearchHeader';
import SingerList from './component/SingerList';

const Singers = () => {
  return (
    <div>
      <SearchHeader />
      <SingerList />
    </div>
  )
}


export default React.memo(Singers);