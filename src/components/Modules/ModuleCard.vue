<template>
    <div class="module-card">
        <div class="module-name">{{module.name}}</div>
        <div class="module-working_hours">15小时</div>
        <div class="module-tasks_count">
            <div class="module-tasks_count_item">todo(3)</div>
            <div class="module-tasks_count_item">doing(3)</div>
            <div class="module-tasks_count_item">done(3)</div>
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
    }
    .module-name{

    }
    .module-working_hours{

    }
    .module-tasks_count{

    }
    .module-tasks_count_item{

    }
</style>
