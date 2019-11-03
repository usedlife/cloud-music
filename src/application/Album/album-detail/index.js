import React, { memo } from 'react';

import { TopDesc, Menu } from './style';
import SongList from '../../../baseUI/SongList'

const AlbumDetail = (props) => {
  const { currentAlbum } = props;
  const currentAlbumJS = currentAlbum.toJS();
  return (
    <div>
      <TopDesc imgUrl={currentAlbumJS.coverImgUrl}>
        <div className="background">
          <div className="filter"></div>
        </div>
        <div className="img_wrapper">
          <div className="decorate"></div>
          <img src={currentAlbumJS.coverImgUrl}></img>
          <div className="play_count">
            <span className="count">{Math.floor(currentAlbumJS.subscribedCount/1000)/10}万</span>
          </div>
        </div>
        <div className="desc_wrapper">
          <span className="desc_name">{currentAlbumJS.name}</span>
          <span className="author">{currentAlbumJS.creator.nickname}</span>
        </div>
      </TopDesc>
      <Menu>
        <li><i>💬</i>评论</li>
        <li><i>❤️</i>点赞</li>
        <li><i>⭐️</i>收藏</li>
        <li><i>⇣</i>更多</li>
      </Menu>
      <SongList list={currentAlbumJS.tracks} />
    </div>
  )
}

export default memo(AlbumDetail);