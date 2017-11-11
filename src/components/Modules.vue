<template>
    <div class="container">
        <draggable class="module-list" element="ul" v-model="moduleList" :options="dragOptions" :move="onMove"
                   @start="isDragging=true" @end="isDragging=false">
            <li class="module-item" v-for="(module, index) in moduleList" :key="module.id">
                <el-row :gutter="10" class="module">
                    <el-col :md="6" class="module-tasks">
                        <moduleCard :module="module"></moduleCard>
                    </el-col>
                    <el-col :md="6" class="module-tasks">
                        <tasks name="todo" :tasks="module.todo" :moduleId="module.id" :type="'todo'"></tasks>
                    </el-col>
                    <el-col :md="6" class="module-tasks">
                        <tasks name="doing" :tasks="module.doing" :moduleId="module.id" :type="'doing'"></tasks>
                    </el-col>
                    <el-col :md="6" class="module-tasks">
                        <tasks name="done" :tasks="module.done" :moduleId="module.id" :type="'done'"></tasks>
                    </el-col>
                </el-row>
            </li>
        </draggable>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    import {mapState} from 'vuex'
    import moduleService from '../biz/api/ModuleService'
    import tasks from './Tasks.vue'
    import moduleCard from './Modules/ModuleCard.vue'

    export default {
        components: {
            draggable,
            tasks,
            moduleCard
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

<style lang="scss" scoped>
    .container{
        width: 100%;

        & >>> .no-move {
            transition: transform 0s;
        }

        & >>> .ghost {
            opacity: .5;
            background: #C8EBFB;
        }
    }

    .module-list {
        box-sizing : border-box ;
        margin: 0px ;
        padding: 0px ;
        list-style: none;
    }
    .module-item {
        box-sizing : border-box ;
        position : relative ;
        display : block ;
        padding : 0 0 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid #999;
    }

    .module{
        display: flex;
    }

    .module-tasks {
        cursor: move;
    }

    .module-tasks i {
        cursor: pointer;
    }
</style>
