/**
 * Created by njz on 2017/9/25.
 */

import {Module} from '../model/Module'
import {Task} from '../model/Task'

export const modules = [];
[1,2,3].forEach(i=>{
    modules.push(new Module({
        id: i,
        sort: i,
        name: `module${i}`,
        tasks: new Array(3).fill(`item${i}-`).map((name, j) => new Task({name: name + j, id: i + 0.01 * j, type: 'todo', sort: j}))
    }))
})
