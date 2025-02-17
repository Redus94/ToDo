import { makeRequest } from './makeRequest'
import { getIdToken } from './token'
import { logOut } from './logOut'
import { FIREBASE_APP_KEY} from './const'


const DELETE_USER_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:delete?key=' + FIREBASE_APP_KEY

export const deleteUser = () => {

    const token = getIdToken()

    if (!token) return Promise.reject('No token found')

    return makeRequest(
        DELETE_USER_URL,
        {
            method: 'POST',
            body: JSON.stringify({
                idToken	: token
            })
        }
    ).then((data)=>{
        logOut()
        return data
    })
}

export default deleteUser