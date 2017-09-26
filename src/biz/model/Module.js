/**
 * 一个模块的集合
 * Created by njz on 2017/9/23.
 */
export class Module{
    constructor({name, tasks, id, order}){
        this.id = id
        this.name = name
        this.tasks = tasks || []
        this.order = order
        this.tasks.forEach(item => {
            item.moduleId = id
        })
    }
}
