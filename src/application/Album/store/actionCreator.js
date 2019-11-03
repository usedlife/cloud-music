import { fromJS } from 'immutable';
import * as constants from './constants';
import { getAlbumDetail } from '../../../api/request';
 
export const changeCurrentAlbum = (data) => ({
  type: constants.CHANGE_CURRENT_ALBUM,
  data: fromJS(data),
})

export const changeIsLoading = (data) => ({
  type: constants.CHANGE_IS_LOADING,
  data,
})


export const fetchCurrentAlbum = id => dispatch => {
  getAlbumDetail({id}).then( res => {
    dispatch(changeCurrentAlbum(res.playlist));
    dispatch(changeIsLoading(false));
  }).catch(() => {
    console.error('album-detail,接口请求错误');
  })
}