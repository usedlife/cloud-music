import request from './config';

// 推荐轮播图
export const getBannerRequest = () => {
  return request.get('/banner');
}

// 推荐歌单列表
export const getRecommendListRequest = () => {
  return request.get('/personalized');
}

// 热门歌手
export const getSingerListRequest = (data) => {
  const { isHot, ...params } = data;
  const url = isHot ? '/top/artists' : '/artist/list';
  return request.get(url, {params});
}