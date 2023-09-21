<template>
  <div class="seat-chart">
    <ul class="flex justify-center items-center mb-8">
      <li class="podium">讲台</li>
    </ul>
    <div class="space-y-2">
      <ul class="flex justify-center items-center space-x-2">
        <li class="seat"></li>
        <li class="seat"></li>
        <li class="w-[80px]"></li>
        <li class="seat"></li>
        <li class="seat"></li>
        <li class="seat"></li>
        <li class="seat"></li>
        <li class="w-[80px]"></li>
        <li class="seat"></li>
        <li class="seat"></li>
      </ul>
      <ul class="flex justify-center items-center space-x-2">
        <li class="seat"></li>
        <li class="seat"></li>
        <li class="w-[80px] text-center">过</li>
        <li class="seat"></li>
        <li class="seat bg"><span>吕国安</span></li>
        <li class="seat"></li>
        <li class="seat"></li>
        <li class="w-[80px] text-center">过</li>
        <li class="seat"></li>
        <li class="seat"></li>
      </ul>
      <ul class="flex justify-center items-center space-x-2">
        <li class="seat"></li>
        <li class="seat"></li>
        <li class="w-[80px]"></li>
        <li class="seat"></li>
        <li class="seat"></li>
        <li class="seat"></li>
        <li class="seat"></li>
        <li class="w-[80px]"></li>
        <li class="seat"></li>
        <li class="seat"></li>
      </ul>
      <ul class="flex justify-center items-center space-x-2">
        <li class="seat"></li>
        <li class="seat"></li>
        <li class="w-[80px] text-center">道</li>
        <li class="seat"></li>
        <li class="seat"></li>
        <li class="seat"></li>
        <li class="seat"></li>
        <li class="w-[80px] text-center">道</li>
        <li class="seat"></li>
        <li class="seat"></li>
      </ul>
      <ul class="flex justify-center items-center space-x-2">
        <li class="seat"></li>
        <li class="seat"></li>
        <li class="w-[80px]"></li>
        <li class="seat"></li>
        <li class="seat"></li>
        <li class="seat"></li>
        <li class="seat"></li>
        <li class="w-[80px]"></li>
        <li class="seat"></li>
        <li class="seat"></li>
      </ul>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.seat-chart {
  font-family: Arial, sans-serif;
  width: 100%;
}

.podium {
  @apply w-[170px] h-[45px] flex justify-center items-center border-2;
}

.seat {
  @apply w-[80px] h-[40px] flex justify-center items-center border-2;
}
.bg {
  background-color:#CCEABB;
}
</style>