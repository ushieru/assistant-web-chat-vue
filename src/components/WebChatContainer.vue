<script setup lang="ts">
import { ref } from 'vue';
import { WebChatContainerProps, WebChatInstance, CustomResponseEvent } from './../../@types'
import { initWatsonAssistantChat } from './../utils/WatsonAssistantChat.js'
const props = defineProps<WebChatContainerProps>()

const customResponses = ref<any>([])
const instance = ref<WebChatInstance | null>()

initWatsonAssistantChat(props.hostURL, props.config)
    .then(async (watsonInstance) => {
        await props.onBeforeRender?.(watsonInstance)
        watsonInstance.render()
        await props.onAfterRender?.(watsonInstance)
        if (props.renderCustomResponse) {
            watsonInstance.on({
                type: 'customResponse',
                handler: (event: CustomResponseEvent) => customResponses.value.push(event),
            });
        }
        instance.value = watsonInstance
    })
</script>

<template>
    <template v-if="instance" v-for="customResponse in customResponses">
        <Teleport :to="customResponse.data.element">
            <slot :custom-response="customResponse" :instance="instance"></slot>
        </Teleport>
    </template>
</template>