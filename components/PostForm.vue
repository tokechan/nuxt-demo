<script setup lang="ts">
const { parentId } = defineProps<{
    parentId?: string;
}>();
const emit = defineEmits<{
    (event: "submit"): void;
}>();

const name = ref("");
const text = ref("");

const router = useRouter();

async function create() {
    await $fetch("/api/posts", {
    method: "POST",
    body: { name: name.value, text: text.value, parentId: parentId },
    });
    text.value = "";
    router.push("/");
    emit("submit");
}
</script>

<template>
    <UContainer class="text-right w-full">
    <form @submit.prevent="create">
        <UInput v-model="name" placeholder="Your Name" class="w-40" />
        <UTextarea v-model="text" placeholder="Main Content" />
        <UButton type="submit">Submit</UButton>
    </form>
    </UContainer>
</template>