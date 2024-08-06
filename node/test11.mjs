export default ctx =>{
    const {env,load} = ctx
    const module = load("test2.mjs")
    console.log(module())
    console.log(process.env)
    console.log(env)
}