/**
 * Created by njz on 2017/3/27.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import modules from "./module/modules";

//注册vuex
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        modules
    },
})
