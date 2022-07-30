<template>
  <div>
    hellow.vue file
    <button @click="add">
      {{ count }}
    </button>
  </div>
</template>

<script  lang="ts">

export default {
  setup () {
    const count = ref(0)

    const add = () => count.value++
    return {
      count, add
    }
  }
}
</script>