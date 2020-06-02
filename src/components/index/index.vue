<template>
    <div id="index">
        <el-row>
            <el-button @click="check">默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>
        <router-link to="cate">cate</router-link>
    </div>
</template>
<script>
export default {
    name: 'index',
    methods:{
        check(){
            this.$message('这是一条消息提示');
        }
    }
}
</script>
<style scoped>

</style>