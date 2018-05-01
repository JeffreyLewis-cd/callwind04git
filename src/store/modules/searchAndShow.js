/**
 * Created by JiangFan6 on 2018/5/1.
 */

import * as MUTATIONS from '../mutations';

const state={
  originMockData:[666]
};

const getters = {
  originMockData: state => state.originMockData,
};

const mutations = {
  [MUTATIONS.originMockDataUpdate](state, newData){
    state.originMockData = newData;
  },
};


export default{
  state,
  getters,
  mutations
}
