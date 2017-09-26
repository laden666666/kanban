<template>
    <div class="fluid container">
        <draggable class="list-group" element="ul" v-model="moduleList" :options="dragOptions" :move="onMove"
                   @start="isDragging=true" @end="isDragging=false">
            <li class="list-group-item" v-for="(module, index) in moduleList" :key="module.id">
                <div class="row">
                    <div class="list-group col-sm-3">{{module.name}}</div>
                    <div class="list-group col-sm-3">
                        <div>todo</div>
                        <tasks :tasks="module.todo" :moduleId="module.id" :type="'todo'"></tasks>
                    </div>
                    <div class="list-group col-sm-3">
                        <div>doing</div>
                        <tasks :tasks="module.doing" :moduleId="module.id" :type="'doing'"></tasks>
                    </div>
                    <div class="list-group col-sm-3">
                        <div>done</div>
                        <tasks :tasks="module.done" :moduleId="module.id" :type="'done'"></tasks>
                    </div>

                </div>
            </li>
        </draggable>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    import {mapState} from 'vuex'
    import moduleService from '../biz/api/ModuleService'
    import tasks from './Tasks.vue'

    export default {
        components: {
            draggable,
            tasks
        },
        data () {
            return {
                editable: true,
                isDragging: false,
                delayedDragging: false
            }
        },
        methods: {
            onMove ({relatedContext, draggedContext}) {
                const relatedElement = relatedContext.element;
                const draggedElement = draggedContext.element;
                return (!relatedElement || draggedElement.constructor == relatedElement.constructor)
            },
            getTasks(tasks, type){
                return tasks.filter(task => task.type == type).sort((item1, item2) => {
                    return item1.order > item2.order;
                })
            },
            formatModule(module){
                return {
                    ...module,
                    todo: this.getTasks(module.tasks, 'todo'),
                    done: this.getTasks(module.tasks, 'done'),
                    doing: this.getTasks(module.tasks, 'doing'),
                }
            },
        },
        computed: {
            dragOptions () {
                return {
                    animation: 0,
                    group: 'description',
                    disabled: false,
                    ghostClass: 'ghost'
                };
            },
            moduleList:{
                get() {
                    return this.$store.state.modules.modules
                        .sort((module1, module2)=> module1.order > module2.order)
                        .map(module=> this.formatModule(module))
                },
                set(value) {
                    moduleService.changeOrder(value)
                }
            }
        },
        async mounted(){
            await moduleService.getModules()
        }
    }
</script>

<style>

    .no-move {
        transition: transform 0s;
    }

    .ghost {
        opacity: .5;
        background: #C8EBFB;
    }

    .list-group {
        min-height: 20px;
    }

    .list-group-item {
        cursor: move;
    }

    .list-group-item i {
        cursor: pointer;
    }
</style>
