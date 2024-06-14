import { makeAPI_URL } from './makeApiUrl'
import { makeAuthorizedRequest } from '../auth'


export const create = (key, dataToSave) => {
    const apiUrl = makeAPI_URL(key)

    return makeAuthorizedRequest(apiUrl,{
        method: 'POST',
        body: JSON.stringify(dataToSave)
    })
}

export default create