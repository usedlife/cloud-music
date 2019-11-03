export function getCount(count) {
  if(count < 0) return;
  if(count < 10000) {
    return count;
  } else if(Math.floor(count / 10000) < 10000) {
    return Math.floor(count/1000)/10 + "万";
  } else  {
    return Math.floor(count / 10000000)/ 10 + "亿";
  }
}

export const isEmptyObject = obj => !obj || Object.keys(obj).length === 0;

//处理歌手列表拼接歌手名字
export const getName = list => {
  let str = "";
  list.map((item, index) => {
    str += index === 0 ? item.name : "/" + item.name;
    return item;
  });
  return str;
};