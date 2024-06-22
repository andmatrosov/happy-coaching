<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import UiHeader from '@/components/UiHeader.vue';
import UiFooter from '@/components/UiFooter.vue';
</script>

<template>
  <UiHeader/>
  <RouterView />

  <UiFooter/>
</template>

<style lang="scss" scoped>
</style>
