import "https://deno.land/x/dotenv@v1.0.1/load.ts"
const API_BASE = "https://www.notion.so/api/v3/"

// deno-lint-ignore no-explicit-any
const api = (endpoint: string, data?: any) => fetch(API_BASE + endpoint, {
    method: "POST",
    headers: {
        cookie: `token_v2=${Deno.env.get('NOTION_TOKEN')}`,
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
}).then(e => e.json())

export const searchUser = (email: string) => api("findUser", {
    email
})

export const addUser = (pageId: string, userId: string) => api("saveTransactions", {
    "requestId": "ASDFASDF",
    "transactions": [
        {
            "id": "",
            "operations": [
                {
                    "table": "block",
                    "id": pageId,
                    "command": "setPermissionItem",
                    "path": [
                        "permissions"
                    ],
                    "args": {
                        "type": "user_permission",
                        "role": "editor",
                        "user_id": userId
                    }
                }
            ]
        }
    ]
})

