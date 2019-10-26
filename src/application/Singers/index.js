import React, { useEffect, memo, useState } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from './store/actionCreators';
import Horizen from '../../baseUI/Horizen';
import Scroll from '../../components/Scroll';
import SingerList from '../../baseUI/SingerList';
import { HorizenWrapper, SingerListWrapper } from './style';
import Loading from '../../components/Loading';

const classificationList = [
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

const letterList = [...new Array(26)]
  .map((_, index) => ({
    key: String.fromCharCode(97+index),
    title: String.fromCharCode(65+index),
  }))

const Singers = (props) => {

  const { singerList, isLoading } = props;
  const { fetchSingerList } = props;

  const [cat, setCat] = useState(null);
  const [initial, setInitial] = useState(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (cat || initial) {
      fetchSingerList({cat, initial, offset})
    } else {
      fetchSingerList({ offset, isHot: true});
    }
  }, [offset])

  useEffect(() => {
    if (cat || initial) {
      fetchSingerList({cat, initial, offset})
    }
  }, [cat, initial])

  const setSearchValue = (type, key) => {
    if (isLoading) return;
    if (type === 'cat') {
      if (key === cat) {
        setCat(null);
      } else {
        setCat(key);
      }
    } else if (type === 'initial') {
      if (key === initial) {
        setInitial(null);
      } else {
        setInitial(key);
      }
    }
  }

  return (
    <div>
      {isLoading ? <Loading /> : null}
      <HorizenWrapper>
        <Horizen title={'分类(默认热门):'} labelList={classificationList} currKey={cat} onClick={key => setSearchValue('cat', key)} />
        <Horizen title={'首字母:'} labelList={letterList} currKey={initial} onClick={key => setSearchValue('initial', key)} />
      </HorizenWrapper>
      <SingerListWrapper>
        <Scroll>
          <div>
            <SingerList list={singerList} onClick={()=>{}}></SingerList>
          </div>
        </Scroll>
      </SingerListWrapper>
    </div>
  )
}

const mapStateToProps = state => ({
  singerList: state.getIn(['singers', 'singerList']).toJS(),
  isLoading: state.getIn(['singers', 'isLoading']),
})

const mapDispatchToProps = dispatch => ({
  fetchSingerList(data) {
    dispatch(actionCreators.fetchSingerList(data));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Singers));