// @TODO task change isCompleted 
import { makeAPI_URL } from './makeApiUrl'
import { makeAuthorizedRequest } from '../auth'


export const update = (listKey, taskKey, dataToUpdate) => {
    const apiUrl = makeAPI_URL(`${listKey}/${taskKey}`)

    return makeAuthorizedRequest(apiUrl, {
        method: 'PATCH',
        body: JSON.stringify(dataToUpdate)
    })
}

export default update