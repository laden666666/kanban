<template>
    <div class="module-card">
        <div class="module-name">{{module.name}}</div>
        <div class="module-working_hours"><i class="el-icon-time"></i>15小时</div>
        <div class="module-tasks_count">
            <div class="module-tasks_count_item">todo
                <span class="module-tasks_count_number">({{module.todo.length}})</span>
            </div>
            <div class="module-tasks_count_item">doing
                <span class="module-tasks_count_number">({{module.doing.length}})</span>
            </div>
            <div class="module-tasks_count_item">
                <span class="module-tasks_count_number">({{module.done.length}})</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            module:{
                type: Object,
                required: true
            }
        },
    }
</script>

<style lang="scss" scoped>
    .module-card{
        width: 100%;
        height: 100px;
        border: 1px solid #ddd;
        border-radius: 3px;
        box-shadow: 0 0 3px 1px #eee;
        padding: 10px 15px;
        box-sizing: border-box;
        background-color: #fff;
    }
    .module-name{
        font-size: 18px;
    }
    .module-working_hours{
        margin-top: 10px;
        font-size: 12px;
    }
    .module-tasks_count{
        display: flex;
        font-size: 12px;
        margin-top: 10px;
        justify-content: space-between;
    }
    .module-tasks_count_item{
    }
    .module-tasks_count_number{
        color: #2BBFF3;
    }
</style>
