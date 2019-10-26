import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';

import SearchHeader from './component/SearchHeader';
import SingerList from './component/SingerList';

const Singers = (props) => {

  const { singerList } = props;

  const { fetchSingerList } = props;

  useEffect(() => {
    fetchSingerList({offset: 0});
  }, [])

  return (
    <div>
      <SearchHeader />
      <SingerList list={singerList} onClick={()=>{}}/>
    </div>
  )
}

const mapStateToProps = state => ({
  singerList: state.getIn(['singers', 'singerList']).toJS(),
})

const mapDispatchToProps = dispatch => ({
  fetchSingerList(data) {
    dispatch(actionCreators.fetchSingerList(data));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Singers));