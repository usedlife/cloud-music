import * as constants from './constants';
import { fromJS } from 'immutable';
import { getSingerListRequest } from '../../../api/request';

export const changeSingerList = (data) => ({
  type: constants.CHANGE_SINGERLIST,
  data: fromJS(data),
})

export const fetchSingerList = data => dispatch => {
  getSingerListRequest(data).then(res => {
    dispatch(changeSingerList(res.artists))
  }).catch(() => {
    console.error('热门歌手获取错误');
  })
}