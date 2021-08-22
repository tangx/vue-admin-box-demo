<template>
  <!-- template here -->

  <div>
    <h1>globalConfig</h1>
    <input type="text" :value="data.GITHUB_API" />
    <button @click="changeApi">Chagne API</button>
    <hr />
    <h1>{{ config.GITHUB_API }}</h1>
    <!-- <h3>{{ TEST_URL }}</h3> -->
    <hr />
    <subGlobalConfig />
  </div>
</template>

<script lang='ts'>
import { defineComponent, inject, reactive } from 'vue'
import subGlobalConfig from './comps/subGlobalConfig.vue';

export default defineComponent({
  components: {
    subGlobalConfig
  },

  setup() {

    const data = reactive({
      GITHUB_API: "haahahah",
    })

    // inject
    const config = inject('Config')
    console.log(config);

    // code here
    // ..

    function changeApi() {
      config.GITHUB_API = data.GITHUB_API
    }


    // return here
    return {
      data,
      config,
      changeApi,
    };
  },
});
</script>
