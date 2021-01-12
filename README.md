# Notion Page Invitator
노션 페이지에 이메일로 사용자를 초대하는 Deno 스크립트

```typescript
import { addUser } from "./index.ts"
import { searchUser } from "./index.ts"

searchUser("vue1@kakao.com").then(user => addUser('1b0cb44d-a571-4d42-8e2e-80a5c6e5ba02', user.value.value.id)).catch(e => {
    console.log(e)
    throw e
})
```