<template>
  <div>
    hellow world
    <button @click="add">
      {{ count }}
    </button>
  </div>
</template>

<script setup lang="ts">
const count = ref(0)

const add = () => count.value++

defineExpose({ add, count })
</script>