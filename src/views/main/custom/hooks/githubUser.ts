import axios from 'axios'
import config from '@/global/index'
// import { Config } from '@/global/index'


function search(keyword: string): Promise<User[]> {

    if (keyword.length < 1) {
        return
    }

    // let _gApi = `${config.GITHUB_API}/search/users?q=${keyword}`
    // console.log(_gApi);


    return axios.get(`${config.GITHUB_API}/search/users?q=${keyword}`).then(
        response => {
            // console.log('请求成功了')
            let users = response.data.items

            return users
        }
    )
}

export interface githubUser {
    id: string
    name: string
    avatar: string
    github: string
}

export async function getGithubUser(keyword: string): githubUser[] {
    const users = await search(keyword)

    // 获取需要的舒徐
    let gus: githubUser[] = []
    for (const user of users) {
        gus.push({
            id: user.id,
            name: user.login,
            avatar: user.avatar_url,
            github: user.html_url
        })
    }
    return gus
}