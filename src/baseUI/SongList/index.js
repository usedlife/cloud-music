import React, { memo } from 'react';

import { SongsListWrapper, SongList, SongItem } from './style';
import { getName } from '../../api/utils';

const SongsList = (props) => {
  const { songs } = props;
  return (
    <SongsListWrapper>
      <SongList>
        {songs.map((item, index) => {
          return (
            <SongItem key={item.id + "" + index}>
              <div className="index">
                {index + 1}
              </div>
              <div className="author">
                <span>{item.name}</span>
                <span>
                  { item.ar ? getName(item.ar): getName(item.artists) } - { item.al ? item.al.name : item.album.name}
                </span>
              </div>
              
            </SongItem>
          )
        })}
      </SongList>
    </SongsListWrapper>
  )
}

export default memo(SongsList);