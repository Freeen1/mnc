<template>
  <el-popover placement="right" trigger="click">
    <template #reference>
      <li class="seat"></li>
    </template>
    <template #default>
      <div>
        <div class="space-y-2 flex justify-center items-center flex-col">
          <div class="popper"><span>修改考勤</span></div>
          <div class="popper"><span>评分与评价</span></div>
          <div class="popper"><span>发送信息</span></div>
        </div>
      </div>
    </template>
  </el-popover>


  <el-menu-item index="1">
    <el-icon><icon-menu /></el-icon>
    <span>仪表盘</span>
  </el-menu-item>
  <el-menu-item index="2">
    <el-icon>
      <ChatDotRound />
    </el-icon>
    <span>消息</span>
    <!-- <el-badge class="mark" :value="3" /> -->
  </el-menu-item>
  <el-menu-item index="3">
    <el-icon>
      <Edit />
    </el-icon>
    <span>考勤管理</span>
  </el-menu-item>
  <el-menu-item index="4">
    <el-icon>
      <document />
    </el-icon>
    <span>我的成绩</span>
  </el-menu-item>
  <el-menu-item index="5">
    <el-icon>
      <Star />
    </el-icon>
    <span>我的评价</span>
  </el-menu-item>
  <el-menu-item index="6">
    <el-icon>
      <setting />
    </el-icon>
    <span>我的账户</span>
  </el-menu-item>
</template>

<style>
.popper {
  @apply w-[100%] h-[30px] flex justify-center items-center;
}

.popper:hover {
  background-color: #CCEABB;
  @apply rounded-lg;
}
</style>