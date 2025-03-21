<template>
<div class="right">
  <el-button @click="drawer = true" type="primary" style="margin-left: 16px; border-radius: 12%;">
    查看进度
  </el-button>
  
  <el-drawer
    title="项目进度"
    :visible.sync="drawer"
    :direction="direction"
    :before-close="handleClose"
    :size="drawerSize"
    class="custom-drawer">
    <!-- <div class="block">
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :timestamp="activity.timestamp">
        {{activity.content}}
      </el-timeline-item>
    </el-timeline>
  </div> -->

  <div class="block">
  <el-timeline>
    <el-timeline-item :timestamp=(created_at?created_at:default_at) placement="top" :color=created_at?color:null>
      <el-card>
        <h4>项目创建</h4>
        <p v-if="created_at">{{ proName }} 创建于 {{ created_at }}</p>
        <p v-if="created_at===''">暂无进度</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item :timestamp=(submitted_at?submitted_at:default_at) placement="top" :color=submitted_at?color:null>
      <el-card>
        <h4>项目申报</h4>
        <p v-if="submitted_at">{{ proName }} 申报于 {{submitted_at}}</p>
        <p v-if="submitted_at===''">暂无进度</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item :timestamp=(modified_at?modified_at:default_at) placement="top" :color=modified_at?color:null>
      <el-card>
        <h4>项目变更</h4>
        <p v-if="modified_at">{{ proName }} 变更于 {{modified_at}}</p>
        <p v-if="modified_at===''">暂无进度</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item :timestamp=(closed_at?closed_at:default_at) placement="top" :color=closed_at?color:null>
      <el-card>
        <h4>项目结题</h4>
        <p v-if="closed_at">{{ proName }} 结题于 {{closed_at}}</p>
        <p v-if="closed_at===''">暂无进度</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</div>

  </el-drawer>

  
</div>

</template>
<script>
export default {
  data() {
    return {
        drawer: false,
        direction: 'rtl',
        drawerSize:'25%',
        color:'#0bbd87',//图标颜色
        proName:'项目名',//项目名
        created_at:'',//创建
        submitted_at:'',//申报
        modified_at:'',//变更
        closed_at:'',//结题
        default_at:'暂无进度',//默认时间戳
        activities: [{
            content: '支持使用图标',
            timestamp: '2018-04-12 20:46',
            size: 'large',
            type: 'primary',
            icon: 'el-icon-more'
        }, 
        {
            content: '支持自定义颜色',
            timestamp: '2018-04-03 20:46',
            color: '#0bbd87',
            type: 'success'
        }, 
        {
            content: '支持自定义尺寸',
            timestamp: '2018-04-03 20:46',
            size: 'large',
            type: 'info'
        }, 
        {
            content: '默认样式的节点',
            timestamp: '2018-04-03 20:46',
            type: 'warning'
        },
        {
            content: '默认样式的节点',
            timestamp: '2018-04-03 20:46',
            type: 'danger'
      }]
    };
  },
  created(){
    this.getDate();//
  },
  mounted(){
    this.drawer=true
  },
  methods:{
    handleClose(done) {
          done()
    },
    getDate(){
        //发送请求，获取当前项目的时间线
        this.$axios.get(this.$config.SYSTEM_HOST + '/getDate').then((res) => {
                            if(res.data.success){
                                // localStorage.setItem("token",res.data.data);
                                // this.$router.push("/admin");
                            }else{
                                // if(res.data.msg){
                                //     this.$message({
                                //         showClose: true,
                                //         message: res.data.msg,
                                //         type: 'error'
                                //     });
                                // }
                            }
                        })
    }
  }
};
</script>
<style scoped>

.block {
    display: flex;
    justify-content: center;
    align-content: center;
}
</style>



  

  
