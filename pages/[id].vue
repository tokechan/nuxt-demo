<script setup lang="ts">
const route = useRoute();
const { data: post, refresh } = await useFetch<PostResponse>(
    `/api/posts/${route.params.id.toString()}`
);
</script>

<template>
    <main class="flex flex-col gap-4">
        <PostCard
            v-if="post"
            :_id="post._id"
            :name="post.name"
            :text="post.text"
            :parent="post.parent"
            :createdAt="post.createdAt"
    />
        <PostForm  v-if="post" :parentId="post._id" />
    </main>
</template>


