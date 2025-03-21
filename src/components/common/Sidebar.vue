<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <el-menu-item index="index">
                <span>主页</span>
            </el-menu-item>
            <el-menu-item :index="menu.index" v-auth :code="menu.code" v-for="menu in menus">
                <span>{{menu.name}}</span>
            </el-menu-item>
        </el-menu>

<!-- 第二种样式 -->
        <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
        </el-menu>






    </div>
</template>

<script>
    import Config from 'Config';

    export default {
        data () {
            return{
                menus:[
                    {
                        name:"用户管理",
                        index:"user",
                        code:"account:user:list"
                    },{
                        name:"项目管理",
                        index:"project",
                        code:"account:project:list"
                    },{
                        name:"申报管理",
                        index:"projectApplication",
                        code:"account:application:list"
                    },{
                        name:"变更管理",
                        index:"update",
                        code:"account:projectUpdate:list"
                    },{
                        name:"结题管理",
                        index:"concludeApplication",
                        code:"account:conclude:list"
                    },{
                        name:"角色管理",
                        index:"role",
                        code:"account:role:list"
                    },{
                        name:"权限管理",
                        index:"permission",
                        code:"account:permission:list"
                    },{
                        name:"数据字典",
                        index:"dict",
                        code:"system:dictType:list"
                    }
                ]
            }
        },
        created () {

        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 140px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
