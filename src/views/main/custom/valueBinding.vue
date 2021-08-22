<template>
  <!-- template here -->
  <h1>各类组件的数据绑定</h1>
  <div align="left">
    <form @submit.prevent="submit">
      <!-- names: string-->
      名: <input type="text" v-model.trim="data.firstname" /> <br />
      姓 :<input type="text" v-model.trim="data.lastname" /> <br />
      全名(computed):
      <input type="text" v-model="fullname" /> <br />

      <!-- age: number -->
      年龄: <input type="number" v-model.number="data.age" /> <br />
      <!-- gender: radio box -->
      性别: 男<input
        type="radio"
        name="gender"
        value="male"
        v-model="data.gender"
      />
      女<input
        type="radio"
        name="gender"
        value="female"
        v-model="data.gender"
      />
      <br />

      <!-- address: select box -->
      所在城市:
      <select name="address" id="address" v-model="data.address">
        <option value="chengdu">成都</option>
        <option value="shanghai">上海</option>
        <option value="shenzheng">深圳</option>
      </select>
      <br />
      <!-- hobbies: checkbox -->
      爱好: 游戏<input type="checkbox" value="games" v-model="data.hobbies" />
      电影<input type="checkbox" value="movies" v-model="data.hobbies" />
      运动<input type="checkbox" value="sports" v-model="data.hobbies" />
      <br />

      <!-- textarea: string lazy bind -->
      用户简介:
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        v-model.lazy="data.intro"
      ></textarea>

      <button>submit</button>
    </form>

    <div>
      <h3>data:</h3>
      {{ data }}
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed, reactive } from "vue";

export default defineComponent({
  components: {},

  setup() {
    // code here
    // ..

    const data = reactive({
      firstname: "Jack",
      lastname: "Sparrow",
      age: 18,
      gender: "male",
      address: "chengdu",
      hobbies: [],
      intro: "",
    });

    const fullname = computed(() => {
      return `${data.firstname} - ${data.lastname}`;
    });

    function submit() {}
    // return here
    return {
      data,
      fullname,
      submit,
    };
  },
});
</script>
