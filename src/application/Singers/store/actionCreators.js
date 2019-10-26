import * as constants from './constants';
import { fromJS } from 'immutable';
import { getSingerListRequest, getHotSingerListRequest } from '../../../api/request';

export const changeSingerList = (data) => ({
  type: constants.CHANGE_SINGERLIST,
  data: fromJS(data),
})
export const changeLoading = (data) => ({
  type: constants.CHANGE_LOADING,
  data,
})
export const changePullDownLoading = (data) => ({
  type: constants.CHANGE_PULLDOWN_LOADING,
  data,
})
export const changePullUpLoading = (data) => ({
  type: constants.CHANGE_PULLUP_LOADING,
  data,
})
export const changeCat = (data) => ({
  type: constants.CHANGE_CAT,
  data,
})
export const changeOffset = (data) => ({
  type: constants.CHANGE_OFFSET,
  data,
})
export const changeInitial = (data) => ({
  type: constants.CHANGE_INITIAL,
  data,
})

export const fetchSingerList = () => (dispatch, getState) => {
  const offset = getState().getIn(['singers', 'offset']);
  const cat = getState().getIn(['singers', 'cat']);
  const initial = getState().getIn(['singers', 'initial']);
  getSingerListRequest({offset, cat, initial}).then(res => {
    dispatch(changeSingerList(res.artists))
    dispatch(changeLoading(false))
  }).catch(() => {
    console.error('热门歌手获取错误');
  })
}

export const fetchMoreSingerList = () => (dispatch, getState) => {
  const offset = getState().getIn(['singers', 'offset']) + 1;
  const cat = getState().getIn(['singers', 'cat']);
  const initial = getState().getIn(['singers', 'initial']);
  getSingerListRequest({offset, cat, initial}).then(res => {
    const singerList = getState().getIn(['singers', 'singerList']).toJS();
    dispatch(changeSingerList([...singerList, ...res.artists]))
    dispatch(changeOffset(offset))
    dispatch(changePullUpLoading(false))
  }).catch(() => {
    console.error('热门歌手获取错误');
  })
}

export const fetchHotSingerList = () => (dispatch, getState) => {
  const offset = getState().getIn(['singers', 'offset']);
  getHotSingerListRequest({offset}).then(res => {
    dispatch(changeSingerList(res.artists))
    dispatch(changeLoading(false))
  }).catch(() => {
    console.error('热门歌手获取错误');
  })
}

export const fetchMoreHotSingerList = () => (dispatch, getState) => {
  const offset = getState().getIn(['singers', 'offset']) + 1;
  getHotSingerListRequest({offset}).then(res => {
    const singerList = getState().getIn(['singers', 'singerList']).toJS();
    dispatch(changeSingerList([...singerList, ...res.artists]))
    dispatch(changeOffset(offset))
    dispatch(changePullUpLoading(false))
  }).catch(() => {
    console.error('热门歌手获取错误');
  })
}