import { execSync } from 'child_process'
import fs from 'fs'
const packageJson = JSON.parse(fs.readFileSync(`${process.cwd()}/package.json`))
const dependencies = packageJson?.dependencies ?? {}
const devDependencies = packageJson?.devDependencies ?? {}
const result = {dependencies:{},devDependencies:{}}

function listUpdate(dependencies){
    const result = {}
    for (const [pkg, version] of Object.entries(dependencies)) {
        const lattestVersion = JSON.parse(execSync(`npm view ${pkg} versions --json`).toString()).pop()
        if(lattestVersion!==version){
            result[pkg] = lattestVersion
        }
    }
    return result
}

result.dependencies = listUpdate(dependencies)
result.devDependencies = listUpdate(devDependencies)

console.log(JSON.stringify(result,null,2))