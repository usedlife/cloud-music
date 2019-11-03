import React, { memo, useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import { AlbumWrapper, Header } from './style';
import Scroll from '../../components/Scroll';
import AlbumDetail from './album-detail';
import { fetchCurrentAlbum, changeIsLoading } from './store/actionCreator';
import { isEmptyObject } from '../../api/utils';
import { HEADER_HEIGHT } from '../../api/helper';
import styles from '../../assets/global-style';
import Loading from '../../components/Loading';

const Album = (props) => {
  
  const { match: {params: {id}}, history } = props;
  const { fetchCurrentAlbum } = props;
  const { currentAlbum, isLoading, isPullDownLoading } = props;
  const currentAlbumJS = currentAlbum.toJS();

  const [isIn, setIsIn] = useState(true);
  const [title, setTitle] = useState('歌单');

  const headerRef = useRef(null);

  const handleBack = () => {
    setIsIn(false);
  }

  useEffect(() => {
    fetchCurrentAlbum(id);
  }, [])

  const handleScroll = (pos) => {
    const percent = Math.abs(pos.y / HEADER_HEIGHT);
    if (pos.y < -HEADER_HEIGHT) {
      headerRef.current.style.backgroundColor = styles["theme-color"];
      headerRef.current.style.opacity = Math.min(1, (percent - 1) / 2);
      setTitle('');
    } else {
      headerRef.current.style.backgroundColor = '';
      headerRef.current.style.opacity = '';
      setTitle('歌单');
    }
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
        <Header ref={headerRef}>
          <span onClick={handleBack}> &lt; {title}</span>
          {!title ? (
            <marquee>
              <h1>{currentAlbumJS.name}</h1>
            </marquee>
          ) : null}
        </Header>
        { !isEmptyObject(currentAlbumJS) ? (
          <Scroll 
            onScroll={handleScroll}
          >
            <AlbumDetail currentAlbum={currentAlbumJS}/>
          </Scroll>
        ) : null}
        {isLoading ? <Loading /> : null}
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