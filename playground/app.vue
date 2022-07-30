<script setup lang="ts">

const helloworld = ref(null)
</script>

<template>
  <!-- Edit this file to play around with Nuxt but never commit changes! -->
  <div>
  <Hello />
    <!-- old children is null on Bar.client and HellowWorld.client ? -->
    <Bar class="sad" />
    <Foo class="test" />
    Nuxt 3 Playground <Helloworld ref="helloworld" class="hello" yolo="aaaaaaaahh" />
  </div>
</template>

<style scoped>
</style>
