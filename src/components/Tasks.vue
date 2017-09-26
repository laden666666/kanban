<template>
    <draggable class="list-group" element="ul" v-model="taskList" :options="dragOptions" :move="onMove"
               @start="isDragging=true" @end="isDragging=false">
        <li class="list-group-item" v-for="(task, index) in taskList" :key="task.id">
            <span>{{task.name}}</span>
        </li>
    </draggable>
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
            }
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
