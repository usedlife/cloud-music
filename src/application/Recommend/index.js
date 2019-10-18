import React from 'react';

import Slider from '../../components/Slider';
import SongSheetList from '../../components/SongSheetList';
import { RecommendWrapper } from './style';
import Scroll from '../../components/Scroll';

const Recommend = () => {

  const bannerList = [1,2,3,4].map(() =>({
    src: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg",
  }));

  const recommendList = [1,2,3,4,5,6,7,8,9,10].map(item => {
    return {
      picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
      playCount: 17171122,
      name: "朴树、许巍、李健、郑钧、老狼、赵雷"
    }
  });

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

export default React.memo(Recommend)