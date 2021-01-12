import { addUser } from "./index.ts"
import { searchUser } from "./index.ts"

searchUser("vue1@kakao.com").then(user => addUser('1b0cb44d-a571-4d42-8e2e-80a5c6e5ba02', user.value.value.id)).catch(e => {
    console.log(e)
    throw e
})
