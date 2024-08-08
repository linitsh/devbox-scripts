export default async ctx => {
    const {env,load} = ctx
    const fn = await load("test30.js")
    fn()
}
