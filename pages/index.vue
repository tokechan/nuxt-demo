<script setup lang="ts">
const { data: posts } = await useFetch<PostResponse[]>("/api/posts");
</script>

<template>

    <main class="flex flex-col gap-4">
        <PostForm />

        <PostCard 
            v-for="post in posts"
            :_id="post._id"
            :name="post.name"
            :text="post.text"
            :parent="post.parent"
            :createdAt="post.createdAt"
        />
        <PostCard
            v-for="post in posts"
            :_id="post._id"
            :name="post.name"
            :text="post.text"
            :parent="post.parent"
            :createdAt="post.createdAt"
    />
        <PostCard />
        <PostCard />
    </main>
</template>
