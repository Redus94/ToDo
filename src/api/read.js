// @TODO task list read
import { makeAPI_URL } from './makeApiUrl'
import { objectToArray } from './objectToArray'
import { makeAuthorizedRequest } from '../auth'


export const readAll = (key) => {

    const apiUrl = makeAPI_URL(key)

    return makeAuthorizedRequest(apiUrl)
        .then((data) => objectToArray(data, 'key'))
}

export const readOne = (listKey, taskKey) => {
    const apiUrl = makeAPI_URL(`${listKey}/${taskKey}`)

    return makeAuthorizedRequest(apiUrl)
}

export default readAll