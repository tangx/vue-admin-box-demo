# vue-admin-box

## 项目结构

### axios

#### 错误处理

```ts
// 注意， 这里的 方括号 是标示可选项。
export [async] function getGithubUser(keyword: string): githubUser[] {
    const users = [await] axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
        response => {
            console.log('请求成功了')
            let users = response.data.items
            return users
        }
    )

    // 获取需要的数据
    let gus: githubUser[] = []
    for (const user of users) {
        // statement
    }
    return gus
}
```

执行错误:

```
Uncaught (in promise) TypeError: users is not iterable
```

出现这个错误， 是因为 `axios` 是异步处理， 在没有正确返回值的时候， 下一步 `for (const user of users)` 就执行了。 

为了解决这个问题， 使用 `async/await` 处理即可。

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/is_not_iterable
