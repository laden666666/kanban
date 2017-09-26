/**
 * Created by njz on 2017/9/25.
 */
import {
    modules
} from './data'
import store from '../store'
import {types} from '../store/module/modules'
import moduleService from './ModuleService'
export default {
    changeOrder: function (moduleId, tasks, type) {
        return Promise.resolve().then(async ()=>{
            const module = await moduleService.getModuleById(moduleId)

            //删除其他模块的task
            for(let i = 0; i < tasks.length; i++ ) {
                let task = tasks[i]

                if(task.moduleId != moduleId){
                    await this.deleteTask(task.moduleId, task.id)
                    module.tasks.push(task)
                    task.moduleId = moduleId
                    task.type = type
                    task.order = i
                } else {
                    task.type = type
                    task.order = i
                }
            }
            store.dispatch(types.SET_MODULES, modules)
        })
    },
    deleteTask: function (moduleId, taskId) {
        return Promise.resolve().then(()=> {
            return moduleService.getModuleById(moduleId);
        }).then(async ()=>{
            const module = await moduleService.getModuleById(moduleId);
            if(module){
                let index = -1;
                module.tasks.forEach((task, i)=>{
                    if(task.id == taskId){
                        index = i
                    }
                })
                if(index != -1){
                    module.tasks.splice(index, 1)
                }
                store.dispatch(types.SET_MODULES, modules)
            }
        })
    },
}
