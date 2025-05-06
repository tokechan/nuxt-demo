<script setup lang="ts">
defineProps<{
  _id: string;
  name?: string;
  text: string;
  parent?: PostResponse;
  createdAt: string;
}>();
</script>

<template>
  <UCard>
    <p>
      <span class="font-bold text-green-600">
        {{ name ?? "名無しさん" }}
      </span>
      <span>：</span>
      <NuxtLink :to="_id" class="underline">
        {{ createdAt }}
      </NuxtLink>
    </p>

    <UContainer>
      <p class="whitespace-break-spaces">{{ text }}</p>
      <PostCard
        v-if="parent"
        :_id="parent._id"
        :name="parent.name"
        :text="parent.text"
        :parent="parent.parent"
        :createdAt="parent.createdAt"
      />
    </UContainer>
  </UCard>
</template>