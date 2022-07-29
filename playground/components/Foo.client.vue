<script setup lang="ts">
function exposedFunc () {
  console.log('ok')
}

const state = ref('component')
defineExpose({ exposedFunc })

await new Promise(resolve => setTimeout(resolve, 300))

onMounted(() => { console.log('mounted') })
</script>

<template>
  <div>
    <!-- this can be commented in/out to trigger different compile approaches -->
    client-only {{ state }}
  </div>
</template>
