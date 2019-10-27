import React, { useEffect, memo, useRef } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from './store/actionCreators';
import Horizen from '../../baseUI/Horizen';
import Scroll from '../../components/Scroll';
import SingerList from '../../baseUI/SingerList';
import { HorizenWrapper, SingerListWrapper } from './style';
import Loading from '../../components/Loading';
import { categoryTypes, alphaTypes } from '../../api/helper';

const Singers = (props) => {

  const { singerList, isLoading, cat, initial, pullUpLoading, pullDownLoading } = props;
  const { fetchHotSingerList, fetchSingerList, fetchMoreSingerList, fetchMoreHotSingerList } = props;

  const scrollRef = useRef();

  useEffect(() => {
    if (!singerList.size) {
      fetchHotSingerList();
    }
  }, [])

  const handlePullUp = () => {
    // 如果有搜索条件，获取fetchMoreSingerList
    if (getIsLoading()) return;
    if (cat || initial) {
      fetchMoreSingerList()
    } else {
      fetchMoreHotSingerList()
    }
  }

  const getIsLoading = () => isLoading || pullUpLoading || pullDownLoading;

  const handleCatChange = (cat) => {
    fetchSingerList({cat});
    scrollRef.current.refresh();
  }

  const handleInitialChange = (initial) => {
    fetchSingerList({initial});
    scrollRef.current.refresh();
  }

  return (
    <div>
      <HorizenWrapper>
        <Horizen title={'分类(默认热门):'} labelList={categoryTypes} currKey={cat} onClick={handleCatChange} />
        <Horizen title={'首字母:'} labelList={alphaTypes} currKey={initial} onClick={handleInitialChange} />
      </HorizenWrapper>
      <SingerListWrapper>
        <Scroll
          ref={scrollRef}
          pullUpLoading={pullUpLoading}
          pullDownLoading={pullDownLoading}
          pullUp={ handlePullUp }
        >
          <div>
            <SingerList list={singerList} onClick={()=>{}}></SingerList>
          </div>
        </Scroll>
      </SingerListWrapper>
      {isLoading ? <Loading /> : null}
    </div>
  )
}

const mapStateToProps = state => ({
  singerList: state.getIn(['singers', 'singerList']),
  isLoading: state.getIn(['singers', 'isLoading']),
  pullUpLoading: state.getIn(['singers', 'pullUpLoading']),
  pullDownLoading: state.getIn(['singers', 'pullDownLoading']),
  initial: state.getIn(['singers', 'initial']),
  cat: state.getIn(['singers', 'cat']),
})

const mapDispatchToProps = dispatch => ({
  fetchHotSingerList() {
    dispatch(actionCreators.changeLoading(true));
    dispatch(actionCreators.fetchHotSingerList());
  },
  fetchSingerList({cat, initial}) {
    dispatch(actionCreators.changeLoading(true));
    dispatch(actionCreators.changeOffset(0));
    if (cat) dispatch(actionCreators.changeCat(cat));
    if (initial) dispatch(actionCreators.changeInitial(initial));
    dispatch(actionCreators.fetchSingerList());
  },
  fetchMoreHotSingerList() {
    dispatch(actionCreators.changePullUpLoading(true));
    dispatch(actionCreators.fetchMoreHotSingerList());
  },
  fetchMoreSingerList() {
    dispatch(actionCreators.changePullUpLoading(true));
    dispatch(actionCreators.fetchMoreSingerList());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Singers));