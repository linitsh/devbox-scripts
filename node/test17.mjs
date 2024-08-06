export default async ctx => {
    const {env,load} = ctx;
    const fn = await load("test2.mjs");
    console.log(fn);
    console.log({env});
}