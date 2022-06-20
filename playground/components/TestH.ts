import { compile } from "vue"

export default defineNuxtComponent({
  render: compile("<div>test render function <button @click='add'>{{count}}</button></div>"),

  setup() {
    const count = ref(0)
    const add = () => count.value++
    return {
      count, add
    }
  }
})