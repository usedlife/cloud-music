import styled from 'styled-components';

export const SongsListWrapper = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 10px;
`

export const SongList = styled.ul`
  width: 100%;
`

export const SongItem = styled.li`
  display: flex;  
  width: 100%;
  height: 60px;
  padding: 3px 0;
  .index {
    display:flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    flex-shrink: 0;
  }
  .author{
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    flex-direction: column;
    flex: 0 0 1;
    justify-content: space-around;
    overflow: hidden;
    >span{
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    >span:nth-child(1){
      color: rgb(46, 48, 48);
    }
    >span:nth-child(2){
      font-size: 12px;
      color: rgb(187, 168, 168);
    }
  }
`