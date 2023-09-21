<template>
    <div class="flex justify-center items-center flex-col mb-10 h-[65px]">
        <div class=" w-[60px] h-[5px] bg-color-[#CCEABB]"></div>
        <span class="font-600 text-4xl">WeiJi</span>
    </div>
    <el-row class="tac flex justify-center items-center">
        <el-col :span="16">
            <el-menu default-active="1" class="el-menu-vertical-demo text-dark-900 border-0" @select="handleSelect">
                <template v-for="(item, index) in asideMenus" :key="index">
                    <el-menu-item :index="item.frontpath">
                        <el-icon>
                            <component :is="item.icon"></component>
                        </el-icon>
                        <span>{{item.name}}</span>
                    </el-menu-item>
                </template>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const asideMenus = [{
    name: "仪表盘",
    icon: "Menu",
    frontpath: "/"
}, {
    name: "消息通知",
    icon: "ChatDotRound",
    frontpath: "/chat"
}, {
    name: "考勤管理",
    icon: "Edit",
    frontpath: "/taam"
}, {
    name: "我的成绩",
    icon: "document",
    frontpath: "/grades"
}, {
    name: "我的评价",
    icon: "Star",
    frontpath: "/appraise"
}, {
    name: "我的账户",
    icon: "setting",
    frontpath: "/account"
}]
const handleSelect = (e)=>{
    router.push(e)
}
</script>


<style setup>
.el-menu-item {
    @apply rounded-lg;
}

.el-menu-item.is-active {
    @apply bg-color-[#CCEABB] rounded-lg;
    color: #303133;
}

.el-menu-item:hover {
    background-color: #fff;
}</style>