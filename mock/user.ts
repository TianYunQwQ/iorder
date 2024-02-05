export default () => {
  return [
    {
      url: '/api/user/login',
      method: 'post',
      timeout: 1000,
      response: ({ body, query }: any) => {
        console.log('body>>>>>>>>', body)
        console.log('query>>>>>>>>', query)

        return {
          code: 0,
          message: 'ok',
          data: {
            _id: '64a287e9948d940cc745af02',
            userId: '+46 0791234567',
            userName: 'admin',
            userEmail: 'admin@manager.com',
            deptId: ['60d054042ca3f91270b08417'],
            state: 2,
            role: 1,
            roleList: ['60d0544d2ca3f91270b08419'],
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY0YTI4N2U5OTQ4ZDk0MGNjNzQ1YWYwMiIsInVzZXJJZCI6MTAwMiwidXNlck5hbWUiOiJhZG1pbiIsInVzZXJFbWFpbCI6ImFkbWluQG1hbmFnZXIuY29tIiwiZGVwdElkIjpbIjYwZDA1NDA0MmNhM2Y5MTI3MGIwODQxNyJdLCJzdGF0ZSI6Miwicm9sZSI6MSwicm9sZUxpc3QiOlsiNjBkMDU0NGQyY2EzZjkxMjcwYjA4NDE5Il19LCJpYXQiOjE2OTY4MjA4NjUsImV4cCI6MTY5NjgyNDQ2NX0.cpMQnbzAqZB42ldLCJhwL1vM5M8OJssJa0S8G0EP_J4',
          },
        }
      },
    },
  ]
}
