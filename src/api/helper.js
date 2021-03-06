export const categoryTypes = [
  {key: 1000, title: '华语'},
  {key: 2000, title: '欧美'},
  {key: 3000, title: '日本'},
  {key: 4000, title: '韩国'},
  {key: 5000, title: '其他'},
].map(item => ['男', '女', '组合']
    .map(label => ({
      key: ++item.key,
      title: item.title + label + (item.title === '其他' && item.key !== 5003 ? '歌手' : ''),
    }))
).flat();

export const alphaTypes = [...new Array(26)]
  .map((_, index) => ({
    key: String.fromCharCode(97+index),
    title: String.fromCharCode(65+index),
  }))

export const HEADER_HEIGHT = 40;