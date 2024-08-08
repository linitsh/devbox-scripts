export default async ctx => {
    const {env,load} = ctx
    const fn = await load("test23.mjs")
    fn()
}
