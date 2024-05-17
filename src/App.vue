<script setup lang="ts">
import WebChatContainer from './components/WebChatContainer.vue'
import RenderCustomResponse from './RenderCustomResponse.vue'

const config = {
    integrationID: import.meta.env.VITE_WATSON_INTEGRATION_ID,
    region: import.meta.env.VITE_WATSON_REGION,
    serviceInstanceID: import.meta.env.VITE_WATSON_SERVICE_INSTANCE_ID
}
</script>

<template>
    <WebChatContainer :config="config" render-custom-response>
        <template v-slot="slotProps">
            <RenderCustomResponse :instance="slotProps.instance" :custom-response="slotProps.customResponse" />
        </template>
    </WebChatContainer>
</template>
