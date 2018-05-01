/**
 * Created by JiangFan6 on 2018/5/1.
 */


import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import searchAndShow from "./modules/searchAndShow.js"

export default new vuex.Store({
    modules:{
      searchAndShow,
    }
})
