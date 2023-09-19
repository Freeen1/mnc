<template>
    <div class="w-[400px] h-[715px] bg-[#fff] rounded-3xl p-3">
        <div class="flex items-center h-[55px]">
            <el-avatar :size="55"  @error="errorHandler">
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
        <div class="messagelist">
            <div v-for="message in messages" :key="message.id" class="flex justify-center items-center flex-col">
                <div class="Chat-recording" >
                    <span class="Chat-text">
                        {{ message.text }}
                    </span>
                </div>
                <span>{{ currentDate }}</span>
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
const currentDate = new Date();


export default {
    data() {
        return {
            messages: [], // 存储聊天消息的数组
            inputText: '', // 输入框的绑定值

            currentDate: null
        };
    },
    created() {
        this.currentDate = new Date();
        this.currentDate = currentDate.toLocaleTimeString();
    },
    methods: {
        sendMessage() {
            if (this.inputText) {
                const newMessage = {
                    id: Date.now(),
                    text: this.inputText
                };
                this.messages.push(newMessage);
                this.inputText = ''; // 清空输入框
            }
        }
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
        height: calc(100% - 180px);
        margin: auto;
        /* @apply flex  items-center flex-col ; */
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