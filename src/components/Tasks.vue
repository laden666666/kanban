<template>
    <div class="tasks">
        <div class="task-title">{{name}} <span class="task-count">{{taskList.count}}</span> </div>
        <draggable class="task-list" element="ul" v-model="taskList" :options="dragOptions" :move="onMove"
                   @start="isDragging=true" @end="isDragging=false">
            <li class="task-item" v-for="(task, index) in taskList" :key="task.id">
                <span>{{task.name}}</span>
                <ul class="task-item-users" v-if="0">
                    <li class="task-item-user"><img src="" class="task-item-user-photo" /></li>
                </ul>
            </li>
        </draggable>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    import taskService from '../biz/api/TaskService'

    export default {
        components: {
            draggable,
        },
        props:{
            tasks: {
                type: Array,
                isRequired: true,
            },
            moduleId: {
                type: Number,
                isRequired: true,
            },
            type: {
                type: String,
                isRequired: true,
            },
            name: {
                type: String,
                isRequired: true,
            },
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
            }
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
            taskList:{
                get() {
                    return this.tasks
                },
                set(value) {
                    taskService.changeOrder(this.moduleId, value, this.type)
                }
            }
        },
    }
</script>

    }
<style>

    .no-move {
        transition: transform 0s;
    }

    .ghost {
        opacity: .5;
        background: #C8EBFB;
    }

    .tasks{
        height: 100%;
    }

    .task-title{
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        line-height: 20px;
        height: 20px;
        background-color: #eee;
        padding: 10px 10px 5px;
        font-weight: 700;
    }

    .task-list {
        min-height: 40px;
        padding: 0;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        height: calc(100% - 35px);
        background-color: #eee;
        display: flex;
        flex-direction: column;
    }

    .task-item {
        cursor: move;
        list-style: none;
        margin: 2px 5px;
        background: #fff;
        padding: 10px;
        border-radius: 4px;
        border-color: #adadad;
        border-bottom: 1px solid #ddd;
        font-size: 13px;
    }

    .task-list-item i {
        cursor: pointer;
    }

    .task-item-users{
        display: flex;
        padding: 10px 0 0;
    }
    .task-item-user{
        list-style: none;
    }
    .task-item-user-photo{
        width: 25px;
        height: 25px;
        border-radius: 50%;
    }
</style>
