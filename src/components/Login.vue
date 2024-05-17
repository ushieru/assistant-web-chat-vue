<script setup lang="ts">
import { WebChatInstance } from '../../@types';

const { instance } = defineProps<{ instance: WebChatInstance }>()

const onSubmit = (event: any) => {
    const response = {
        input: {
            "text": "login..."
        },
        context: {
            skills: {
                "actions skill": {
                    skill_variables: {
                        user: event.target.user.value,
                        password: event.target.password.value
                    }
                }
            }
        }
    }
    instance.send(response)
}
</script>

<template>
    <form @submit.prevent="onSubmit">
        <input type="text" name="user">
        <input type="text" name="password">
        <button>Submit</button>
    </form>
</template>