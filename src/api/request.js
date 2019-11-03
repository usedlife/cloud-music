import request from './config';

// 推荐轮播图
export const getBannerRequest = () => {
  return request.get('/banner');
}

// 推荐歌单列表
export const getRecommendListRequest = () => {
  return request.get('/personalized');
}

// 条件搜索歌手
export const getSingerListRequest = (params) => {
  return request.get('/artist/list', {params});
}

// 热门歌手
export const getHotSingerListRequest = (params) => {
  return request.get('/top/artists', {params});
}

// 歌单详情
export const getAlbumDetail = (params) => {
  return request.get('playlist/detail', {params});
}