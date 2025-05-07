<script setup lang="ts">
const { data: posts, refresh } = await useFetch<PostResponse[]>("/api/posts");
</script>

<template>
    
    <main class="flex flex-col gap-4">
        <PostForm @submit="refresh" />

        <PostCard 
            v-for="post in posts"
            :_id="post._id"
            :name="post.name"
            :text="post.text"
            :parent="post.parent"
            :createdAt="post.createdAt"
        />
    </main>
</template>
