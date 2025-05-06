<script setup lang="ts">
const { parentId } = defineProps<{
    parentId?: string;
}>();

const name = ref("");
const text = ref("");
</script>

<template>
    <UContainer class="text-right w-full">
        <form>
            <UInput v-model="name" placeholder="Your name" class="w-40" />
            <UTextarea v-model="text" placeholder="Content"/>
            <UButton>Submit</UButton>
        </form>
    </UContainer>
</template>