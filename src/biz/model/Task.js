/**
 * Created by njz on 2017/9/23.
 */
export class Task{
    constructor({name, type='todo', id, order}){
        this.id = id;
        this.name = name;
        this.type = type;
        this.order = order;
    }
}
