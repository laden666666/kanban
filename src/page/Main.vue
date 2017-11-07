<template>
    <el-container class="main">
        <el-aside class="menu" width="100px">
            <div class="my">
                <img class="my-photo" src="" alt="">
                <div class="my-name">我的名字</div>
                <!--<div class="my-more"></div>-->
            </div>
            <hr class="hr">
            <ul class="menu-list">
                <li class="menu-item" v-for="(item, index) in menuList" :key="index" :class="{active: $route.path == item.url}">
                    <a class="menu-item-link" :href="$route.path == item.url ? null : item.url">
                        <i class="menu-item-icon" :class="`${item.icon}`"></i>
                        <span class="menu-item-name">{{item.name}}</span>
                    </a>
                    <hr class="hr">
                </li>
            </ul>
            <div class="div0div3">
                <a  class="div0div3a0">
                    <i class="div0div3a0i0">&nbsp;</i>
                </a>
                <a  class="div0div3a1">
                    <i class="div0div3a1i0">&nbsp;</i>
                </a>
                <a  class="div0div3a2">···</a>
            </div>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: 'Main',
        data(){
            return {
                menuList: [{
                    name: '看板',
                    icon: 'el-icon-tickets',
                    url: '/main/default',
                },{
                    name: '新建',
                    icon: 'el-icon-plus',
                },{
                    name: '项目',
                    icon: 'el-icon-menu',
                },{
                    name: '管理',
                    icon: 'el-icon-setting',
                },]
            }
        }
    }
</script>

<style scoped lang="scss">
    .main {
        height: 100%;
    }
    .menu {
        box-sizing : border-box ;
        padding : 0px ;
        color: #a0a9ad;
        background-color: #353d40;
        min-height: 100%;
    }
    .my {
        box-sizing : border-box ;
        padding : 10px 0px 0px ;
        height : 86px ;
        text-align : center ;
        cursor : pointer ;
        font-size : 12px ;
    }
    .my-photo {
        box-sizing : border-box ;
        padding : 0px ;
        border : 0px ;
        vertical-align : middle ;
        height : 50px ;
        width : 50px ;
        border-radius: 50%;
    }
    .my-name {
        box-sizing : border-box ;
        padding : 0px ;
        overflow : hidden ;
        text-overflow : ellipsis ;
        white-space : nowrap ;
        text-align: center;
        margin-top: 5px;
    }
    .my-more {
        box-sizing : border-box ;
        padding : 0px ;
        display : inline-block ;
        width : 0px ;
        height : 0px ;
        margin-right : 5px ;
        margin-top : -4px ;
        float : right ;
        vertical-align : middle ;
        border-bottom : 10px solid ;
        border-left : 10px solid transparent ;
    }
    .hr {
        box-sizing : content-box ;
        padding : 0px ;
        height : 0px ;
        margin : 0px ;
        border-right : 0px transparent ;
        border-left : 0px transparent ;
        border-bottom-style : solid ;
        border-top-color : rgb(48, 55, 58) ;
        border-bottom-color : rgb(68, 76, 79) ;
        border-image : initial ;
        border-top-style : solid ;
    }
    .menu-list {
        box-sizing : border-box ;
        padding : 0;
        margin: 0;
    }
    .menu-item {
        box-sizing : border-box ;
        padding : 0px ;
        background : 0px 0px ;
        text-decoration-line : none ;
        display : block ;
        text-align: center;
    }
    .menu-item-link{
        display : block ;
        text-decoration: none;
        color : rgb(161, 169, 174) ;
        padding: 10px 0;
        .active > &{
            background-color: #2C3032;
            color: #2BBFF3;
        }
    }

    .menu-item-icon {
        box-sizing : border-box ;
        line-height : 17px ;
        font-size : 17px ;
    }
    .menu-item-name {
        display : block ;
        font-size: 16px;
        line-height: 24px;
    }


    .div0div3 {
        box-sizing : border-box ;
        padding : 0px ;
        height : 138px ;
        position : absolute ;
        width : 90px ;
        bottom : 0px ;
        margin-bottom : 0px ;
    }
    .div0div3a0 {
        box-sizing : border-box ;
        padding : 0px ;
        background : 0px 0px ;
        color : rgb(161, 169, 174) ;
        text-decoration-line : none ;
        display : block ;
        height : 40px ;
        line-height : 40px ;
        font-size : 12px ;
        float : left ;
        width : 90px ;
        text-align : center ;
    }
    .div0div3a0i0 {
        box-sizing : border-box ;
        padding : 0px ;
        display : inline-block ;
        height : 32px ;
        width : 32px ;
        line-height : 32px ;
    }
    .div0div3a1 {
        box-sizing : border-box ;
        padding : 0px ;
        background : 0px 0px ;
        color : rgb(161, 169, 174) ;
        text-decoration-line : none ;
        display : block ;
        height : 40px ;
        line-height : 40px ;
        font-size : 12px ;
        float : left ;
        width : 90px ;
        text-align : center ;
    }
    .div0div3a1i0 {
        box-sizing : border-box ;
        padding : 0px ;
        display : inline-block ;
        height : 32px ;
        width : 32px ;
        line-height : 32px ;
    }
    .div0div3a2 {
        box-sizing : border-box ;
        padding : 0px ;
        background : 0px 0px ;
        color : rgb(161, 169, 174) ;
        text-decoration-line : none ;
        display : block ;
        height : 40px ;
        line-height : 40px ;
        font-size : 30px ;
        float : left ;
        width : 90px ;
        text-align : center ;
        border-left : 1px solid rgb(68, 76, 79) ;
    }
</style>
