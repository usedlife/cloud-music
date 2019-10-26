import React from 'react';
import styled from 'styled-components';

import Horizen from '../../../baseUI/Horizen';

const classificationList = [
  {key: 1000, title: '华语'},
  {key: 2000, title: '欧美'},
  {key: 3000, title: '日本'},
  {key: 4000, title: '韩国'},
  {key: 5000, title: '其他'},
].map(item => {
  return ['男', '女', '组合']
    .map(label => ({
      key: ++item.key,
      title: item.title + label + (item.title === '其他' && item.key !== 5003 ? '歌手' : ''),
    }))
}).flat();

const letterList = [...new Array(26)]
  .map((_, index) => ({
    key: String.fromCharCode(97+index),
    title: String.fromCharCode(65+index),
  }))

const SearchHeader = () => {
  return (
    <HorizenWrapper>
      <Horizen title={'分类(默认热门)：'} labelList={classificationList}/>
      <Horizen title={'首字母：'} labelList={letterList}/>
    </HorizenWrapper>
  )
}

const HorizenWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 95px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  overflow: hidden;
`

export default React.memo(SearchHeader);