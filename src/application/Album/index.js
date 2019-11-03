import React, { memo, useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import { AlbumWrapper, Header } from './style';
import Scroll from '../../components/Scroll';
import AlbumDetail from './album-detail';
import { fetchCurrentAlbum, changeIsLoading } from './store/actionCreator';
import { isEmptyObject } from '../../api/utils';

const Album = (props) => {
  
  const { match: {params: {id}}, history } = props;
  const { fetchCurrentAlbum } = props;
  const { currentAlbum, isLoading, isPullDownLoading } = props;
  const currentAlbumJS = currentAlbum.toJS();

  const [isIn, setIsIn] = useState(true);

  const handleBack = () => {
    setIsIn(false);
  }

  useEffect(() => {
    fetchCurrentAlbum(id);
  }, [])

  return (
    <CSSTransition
      in={isIn}
      timeout={300}
      classNames='fly'
      appear={true} 
      onExited={history.goBack}
    >
      <AlbumWrapper>
        <Header>
          <span onClick={handleBack}> &lt; 歌单</span>
        </Header>
        { !isEmptyObject(currentAlbumJS) ? (
          <Scroll>
            <AlbumDetail currentAlbum={currentAlbum}/>
          </Scroll>
        ) : null}
      </AlbumWrapper>
    </CSSTransition>
  )
}

const mapStateToProps = (state) => ({
  currentAlbum: state.getIn(['album', 'currentAlbum']),
  isLoading: state.getIn(['album', 'isLoading']),
  isPullDownLoading: state.getIn(['album', 'isPullDownLoading']),
})

const mapDisPatchToProps = dispatch => ({
  fetchCurrentAlbum(id) {
    dispatch(changeIsLoading(true));
    dispatch(fetchCurrentAlbum(id));
  }
})

export default connect(mapStateToProps, mapDisPatchToProps)(memo(Album));