<template>
  <!-- template here -->

  <div>
    <h3>subGlobalConfig</h3>
    <hr />
    <h1>{{ config.GITHUB_API }}</h1>
  </div>
</template>

<script lang='ts'>
import { defineComponent, inject, reactive } from 'vue'
import { Config } from '@/global/index'

export default defineComponent({
  components: {
  },

  setup() {


    // inject
    const config = inject('config') as Config
    // console.log(config);


    // return here
    return {
      config,
    };
  },
});
</script>
