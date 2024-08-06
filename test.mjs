const url = 'https://raw.githubusercontent.com/linitsh/scripts/main/node/test1.mjs'
async function load(url) {
  const moduleContent = await fetch(url).then(response => response.text());
  const module = await import(`data:text/javascript;charset=utf-8,${moduleContent}`);
  const result = module.default?module.default:module
  return result
}

const module = await load(url)

console.log(module({env:'test'}))