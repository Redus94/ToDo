// @TODO task deletion 
import { makeAPI_URL } from './makeApiUrl'
import { makeAuthorizedRequest } from '../auth'


export const remove = (listKey, taskKey) => {
    const apiUrl = makeAPI_URL(`${listKey}/${taskKey}`)

    return makeAuthorizedRequest(apiUrl, {
        method: 'DELETE',
    })
}

export default remove