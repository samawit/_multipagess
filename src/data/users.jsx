const users=[
          {user: 'user' , pass: 'pass', role: 'user' , token: 'token'},
          {user: 'admin' , pass: 'pass', role: 'admin' , token: 'token'},
          {user: 'guest' , pass: 'pass', role: 'guest' , token: 'token'},

]

export function verifyUser(user, pass) {
         const usersFound = users.find((u)=> {
           return u.user === user && u.pass === pass
         })
         return usersFound ? {role: usersFound.role, token: usersFound.token} : null
}
