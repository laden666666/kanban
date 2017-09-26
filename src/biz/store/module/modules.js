/**
 * 修改moduleTask列表
 */

export const types = {
    SET_MODULES : 'SET_MODULES',
    SET_TASKS : 'SET_TASKS',
}

const state = {
    modules : [],
}

// actions
const actions = {};
actions[types.SET_MODULES] = function({ commit, state }, modules) {
    commit(types.SET_MODULES, modules);
};
actions[types.SET_TASKS] = function({ commit, state }, tasks) {
    commit(types.SET_TASKS, tasks);
};
actions[types.SET_TASK] = function({ commit, state }, task) {
    commit(types.SET_TASK, task);
};

// mutations
const mutations = {
    [types.SET_MODULES] (state, modules) {
        state.modules = modules;
    },
    [types.SET_TASKS] (state, { moduleId, tasks }) {
        state.modules.forEach(module=>{
            if(module.id == module){
                module.tasks = tasks
            }
        })
    },
}

export default {
    state,
    actions,
    mutations
}
