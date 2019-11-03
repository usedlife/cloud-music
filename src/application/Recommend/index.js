import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { forceCheck } from 'react-lazyload';
import { renderRoutes } from 'react-router-config';

import Slider from '../../components/Slider';
import SongSheetList from '../../baseUI/SongSheetList';
import { RecommendWrapper } from './style';
import Scroll from '../../components/Scroll';
import * as actionTypes from './store/actionCreators';
import Loading from '../../components/Loading';

const Recommend = (props) => {

  const { bannerList, recommendList, isLoading } = props;

  const { fetchBannerList, fetchRecommendList } = props;

  useEffect(() => {
    if (!bannerList.size) {
      fetchBannerList();
    }
    if (!recommendList.size) {
      fetchRecommendList();
    }
  }, [])

  const handleSongSheetClick = (item) => {
    props.history.push(`/recommend/${item.id}`);
  }

  if (isLoading) return <Loading />

  return (
    <RecommendWrapper>
      <Scroll onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerList} />
          <h2>推荐歌单</h2>
          <SongSheetList list={recommendList} onClick={handleSongSheetClick}/>
        </div>
      </Scroll>
      {renderRoutes(props.route.routes)}
    </RecommendWrapper>
  )
}

const mapStateToProps = (state) => ({
  bannerList: state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend', 'recommendList']),
  isLoading: state.getIn(['recommend', 'isLoading']),
})

const mapDispatchToProps = (dispatch) => ({
  fetchBannerList() {
    dispatch(actionTypes.fetchBannerList())
  },
  fetchRecommendList() {
    dispatch(actionTypes.fetchRecommendList())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend));