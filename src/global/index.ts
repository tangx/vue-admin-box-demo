import { reactive, ref } from 'vue'

export interface Config {
    GITHUB_API: string
}


const config = reactive(
    {
        GITHUB_API: ''
    } as Config
)
export default config

// import的是export的只读引用，第二种只是改变了test的属性值，这个属性并不是只读的
// https://segmentfault.com/q/1010000011607153
// https://exploringjs.com/es6/ch_modules.html#_imports-are-read-only-views-on-exports
export function initialConfig() {
    config.GITHUB_API = 'https://api.github.com'
}