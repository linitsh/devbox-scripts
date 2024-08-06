export default ctx => {
    const {env,load} = ctx;
    const fn = load("test2.mjs");
    console.log(fn);
    console.log(process.env);
    console.log(env);
}