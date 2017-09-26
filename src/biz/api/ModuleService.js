/**
 * Created by njz on 2017/9/25.
 */
import {
    modules
} from './data'
import store from '../store'
import {types} from '../store/module/modules'


export default {
    getModules: function () {
        return Promise.resolve().then(()=>{
            store.dispatch(types.SET_MODULES, modules)
        })
    },
    getModuleById: function (moduleId) {
        return Promise.resolve().then(()=>{
            return modules.filter(module=> module.id == moduleId)[0]
        })
    },
    deleteModule: function (moduleId) {
        return Promise.resolve().then(()=>{
            let index = -1;
            modules.forEach((module, i)=>{
                if(module.id == moduleId){
                    index = i
                }
            })
            if(index != -1){
                modules.splice(index, 1)
            }
            store.dispatch(types.SET_MODULES, modules)
        })
    },
    updateModule: function (module) {
        return Promise.resolve().then(()=>{
            modules.forEach((imodule, i)=>{
                if(imodule.id == module.id){
                    modules[i] = module
                }
            })
            store.dispatch(types.SET_MODULES, modules)
        })
    },
    changeOrder: function (newModules) {
        return Promise.resolve().then(()=>{
            let i = 0;
            var map = newModules.reduce((map, item)=>{map[item.id] = i++; return map}, {})

            modules.forEach((module, i)=>{
                module.order = map[module.id]
            })
            store.dispatch(types.SET_MODULES, modules)
        })
    },
}
