<template>
    <div class="w-[400px] h-[715px] bg-[#fff] rounded-3xl p-3">
        <div class="flex items-center h-[55px]">
            <el-avatar :size="55" >
                <img src="http://localhost:5173/src/assets/exp3.png" />
            </el-avatar>
            <div class="teachername">
                <el-text class="text-sm text-dark-700">谭湘老师</el-text>
                <div class="flex  items-center">
                    <div class="state"></div>
                    <el-text class="text-sm text-dark-700 ml-2">在线</el-text>
                </div>
            </div>
            <div class="Setup">
                <el-icon size="24px"><Setting /></el-icon>
            </div>
        </div>
        <div  ref="container" class="messagelist">
            <div v-for="message in messages" :key="message.id" class="flex justify-center items-center flex-col">
                <div class="Chat-recording" >
                    <span class="Chat-text">
                        {{ message.text }}
                    </span>
                </div>
                <span class="time">
                        {{ message.timeid }}
                </span>
            </div>
            <div>

            </div>
        </div>
        <div class="h-[125px] rounded-3xl p-3" style="background-color: #FBFBFB;">
            <div class="Chat-input">
                <!-- <input v-model="inputText" type="text" placeholder="这里输入..."/> -->
                <textarea v-model="inputText" type="text" placeholder="这里输入..."></textarea>
            </div>
            <div class="chat-function">
                <div class="function">
                    <div class="ml-2 flex justify-center items-center">
                        <el-icon size="24px" color="#3F3F44"><Picture /></el-icon>
                    </div>
                    <div class="flex justify-center items-center">
                        <el-icon size="24px" color="#3F3F44"><Link /></el-icon>
                    </div>
                </div>
                <div class="ml-auto">
                    <button @click="sendMessage" class="w-[72px] h-[32px] bg-[#FDCB9E] rounded-lg">发送</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { ref, onMounted, onUpdated } from 'vue';


export default {
    data() {
        return {
            messages: [], // 存储聊天消息的数组
            inputText: '', // 输入框的绑定值
            currentDate: '', //时间 
        };
    },
    
    methods: {
        getTime() {
            const currentTime = new Date(); // 获取当前时间
            this.currentDate = currentTime.toLocaleTimeString();
        },
        sendMessage() {
            if (this.inputText || event.key === 'Enter') {
                this.getTime(); // 重新获取最新时间
                const newMessage = {
                    id: Date.now(),
                    text: this.inputText,
                    timeid: this.currentDate
                };
                this.messages.push(newMessage);
                this.inputText = ''; // 清空输入框
            }
        },
    },
    //默认显示最下面
    setup() {
    const container = ref(null);

    onMounted(() => {
      scrollToBottom();
    });

    onUpdated(() => {
      scrollToBottom();
    });

    const scrollToBottom = () => {
      if (container.value) {
        container.value.scrollTop = container.value.scrollHeight;
      }
    };

    return {
      container
    };
  }
};
</script>

<style scoped>
    .teachername {
        @apply ml-4 flex justify-center items-center flex-col;
    }
    .state {
        width: 10px;
        height: 10px;
        background-color: #CCEABB;
        @apply rounded-full;
    }
    .Setup {
        @apply ml-auto flex items-center h-[55px];
    }
    .messagelist {
        width: 356px;
        height: 511px;
        /* calc(100% - 180px) */
        margin: auto;
        overflow-y: auto;
        /* @apply flex  items-center flex-col ; */
    }
    .messagelist::-webkit-scrollbar {
        width: 0.1em; /* 设置滚动条的宽度为极小值 */
        background-color: transparent; /* 将滚动条的背景色设置为透明 */
    }

    .messagelist::-webkit-scrollbar-thumb {
        background-color: transparent; /* 将滑块的背景色设置为透明 */
    }
    .Chat-recording {
        max-width: 350px;
        min-height: 40px;
        @apply flex justify-center items-center flex-col rounded-lg  mb-2 mt-2 ml-auto bg-[#3F3F44];
    }
    .Chat-input {
        height: 70px;
        @apply uppercase;

    }
    .Chat-text {
        @apply ml-auto m-2 text-light-50 ;
    }
    .time {
        @apply ml-auto text-xs text-gray-400;
    }
    .Chat-input textarea {
        width: 100%;
        height: 70px;
        resize: none;
        outline: none;
        background-color: #FBFBFB;
    }
    .chat-function {
        height: 32px;
        @apply flex justify-center items-center;
    }
    .function {
        @apply flex justify-center items-center space-x-2;
    }
</style>