const url = 'https://neko-cafe-back.herokuapp.com/auth/test'

export const RequestService = {
    async authTest(success: boolean) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({success})
        })
    }
}