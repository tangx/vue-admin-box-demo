import { reactive, ref } from 'vue'

export interface Config {
    GITHUB_API: string
}


const config = reactive(
    {
        GITHUB_API: 'https://api.github.com'
    } as Config
)


export default config