import React, { useEffect } from 'react';
import { connect } from 'react-redux';

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
    fetchBannerList();
    fetchRecommendList();
  }, [])

  if (isLoading) return <Loading />

  return (
    <RecommendWrapper>
      <Scroll>
        <div>
          <Slider bannerList={bannerList} />
          <h2>推荐歌单</h2>
          <SongSheetList list={recommendList}/>
        </div>
      </Scroll>
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