import React, { memo, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { AlbumWrapper } from './style';

const Album = (props) => {
  
  const { match: {params: {id}}, history } = props;

  const [isIn, setIsIn] = useState(true);

  const handleBack = () => {
    setIsIn(false);
  }

  return (
    <CSSTransition
      in={isIn}
      timeout={300}
      classNames='fly'
      appear={true} 
      onExited={history.goBack}
    >
      <AlbumWrapper>
        <div onClick={handleBack}>{id}</div>
      </AlbumWrapper>
    </CSSTransition>
  )
}

export default memo(Album);