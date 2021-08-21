<template>
  <h1>张三</h1>

  <div>
    <h3>{{ data.name }}</h3>
    <h3>{{ data.age }}</h3>
    <h3>cumputed: {{ zhangsanInfo }}</h3>
    <button @click="data.age++">age++</button>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, computed } from 'vue'

export default defineComponent({
  components: {
  },

  setup() {
    // code here
    // ..

    const data = reactive({
      name: "zhangsan",
      age: 18
    })

    const zhangsanInfo = computed(
      () => {
        return `name: ${data.name}, age: ${data.age}`
      }
    )
    // return here
    return {
      data,
      zhangsanInfo
    };
  },
});
</script>
