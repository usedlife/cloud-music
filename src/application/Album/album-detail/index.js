import React, { memo } from 'react';

import { TopDesc, Menu } from './style';
import SongsList from '../../../baseUI/SongList'

const AlbumDetail = (props) => {
  const { currentAlbum } = props;
  return (
    <div>
      <TopDesc imgUrl={currentAlbum.coverImgUrl}>
        <div className="background">
          <div className="filter"></div>
        </div>
        <div className="img_wrapper">
          <div className="decorate"></div>
          <img src={currentAlbum.coverImgUrl}></img>
          <div className="play_count">
            <span className="count">{Math.floor(currentAlbum.subscribedCount/1000)/10}万</span>
          </div>
        </div>
        <div className="desc_wrapper">
          <span className="desc_name">{currentAlbum.name}</span>
          <span className="author">{currentAlbum.creator.nickname}</span>
        </div>
      </TopDesc>
      <Menu>
        <li><i>💬</i>评论</li>
        <li><i>❤️</i>点赞</li>
        <li><i>⭐️</i>收藏</li>
        <li><i>⇣</i>更多</li>
      </Menu>
      <SongsList songs={currentAlbum.tracks} />
    </div>
  )
}

export default memo(AlbumDetail);