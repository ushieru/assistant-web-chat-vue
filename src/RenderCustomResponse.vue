<script setup lang="ts">
import { CustomResponseEvent, WebChatInstance } from "./../@types";
import Login from './components/Login.vue'
const { customResponse, instance } = defineProps<{ customResponse: CustomResponseEvent, instance: WebChatInstance }>()

const userDefined = customResponse.data.message.user_defined
const userDefinedType = customResponse.data.message.user_defined.user_defined_type
</script>

<template>
    <Login v-if="userDefinedType == 'custom-login'" :instance="instance" />
    <p v-else>No customResponse for type: {{ userDefinedType }}</p>
</template>