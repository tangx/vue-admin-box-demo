<template>
  <!-- template here -->
  <!-- <button @click="fetchUsers">get users</button> -->
  Keyword:
  <input type="text" v-model="search.keyword" />
  <button @click="fetchUsers">Search: {{ search.keyword }}</button>

  <hr />
  <!-- <div>
    <div v-for="user in githubData.users" :key="user.id">
      <h3>name: {{ user.login }}</h3>
      <img :src="user.avatar_url" />
      
    </div>
  </div>-->
  <div class="layout-container">
    <div class="layout-container-table">
      <div class="box" ref="box">
        <el-scrollbar height="100%">
          <el-row :gutter="20">
            <el-col
              :lg="4"
              :md="8"
              :sm="12"
              :xs="24"
              v-for="user in githubData.users"
              :key="user.id"
            >
              <el-card :body-style="{ padding: '0px' }" shadow="hover">
                <img :src="user.avatar" class="image" />
                <div style="padding: 14px;">
                  <span></span>
                  <a :href="user.github">{{ user.name }} 的 Github 主页</a>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-empty
            description="空空如也~"
            style="height: 500px;"
            v-show="githubData.users.length === 0"
          >nothing here</el-empty>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive } from 'vue'
import { getGithubUser, githubUser } from './hooks/githubUser'
export default defineComponent({

  setup() {

    let search = reactive({
      keyword: ''
    })

    let githubData = reactive({
      users: []
    } as {
      users: githubUser[]
    }
    )

    // 1. 直接使用 axios 请求
    // #region 
    // let fetchUsers = async function () {
    //   if (search.keyword.length > 0) {
    //     return axios.get(`https://api.github.com/search/users?q=${search.keyword}`).then(
    //       response => {
    //         console.log('请求成功了')
    //         let users = response.data.items
    //         // console.log(users);
    //         githubData.users = users
    //         console.log("githubData:::::", githubData)
    //       }
    //     )
    //   }
    // }
    // #endregion

    // 2. 使用 hooks ， 并且使用 async/await 异步请求
    let fetchUsers = async function () {
      githubData.users = await getGithubUser(search.keyword)
    }

    return {
      search,
      fetchUsers,
      githubData
    };

  },
});
</script>


<style lang="scss" scoped>
* {
  text-align: left;
}
.el-col {
  margin-bottom: 20px;
}
.box {
  height: calc(100% - 50px);

  margin-bottom: 15px;
  :deep(.is-horizontal) {
    display: none;
  }
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.edit-button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>