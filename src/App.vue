<script setup lang="ts">
import { RouterView } from 'vue-router'
import EroHeader from './components/HeaderComponent.vue'
</script>

<template>
  <EroHeader v-if="!$route.meta.hideHeader" />
  <RouterView />

</template>
