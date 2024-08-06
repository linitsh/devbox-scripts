
async function load(url) {
  const path = `https://raw.githubusercontent.com/linitsh/scripts/main/node/${url}`
  const moduleContent = await fetch(path).then(response => response.text());
  const module = await import(`data:text/javascript;charset=utf-8,${moduleContent}`);
  const result = module.default?module.default:module
  return result
}
const context = {enn:ProcessingInstruction.env,load}
const module = await load("test11.mjs")

console.log(module(context))