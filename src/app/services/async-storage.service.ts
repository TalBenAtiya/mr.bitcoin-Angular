
export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    postMany
}

interface Entity {
    _id: string
}

function query(entityType:string, delay = 100):Promise<Entity[]> {
    var entities = JSON.parse(localStorage.getItem(entityType) || '[]')

    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(entities) }, delay)
    })
}

function get(entityType:string, entityId:string) {
    return query(entityType)
        .then((entities:any) => {
            return entities.find((entity:any) => entity._id === entityId)
        })
}

function post(entityType:string, newEntity:any) {
    newEntity._id = _makeId()
    return query(entityType)
        .then((entities:any) => {
            entities.push(newEntity)
            _save(entityType, entities)
            return newEntity
        })
}

function put(entityType:string, updatedEntity:any) {
    return query(entityType)
        .then((entities:any) => {
            const idx = entities.findIndex((entity:any) => entity._id === updatedEntity._id)
            entities.splice(idx, 1, updatedEntity)
            _save(entityType, entities)
            return updatedEntity
        })
}

function remove(entityType:string, entityId:string) {
    return query(entityType)
        .then((entities:any) => {
            const idx = entities.findIndex((entity:any) => entity._id === entityId)
            entities.splice(idx, 1)
            _save(entityType, entities)
        })
}

function postMany(entityType:string, newEntities:any) {
    return query(entityType)
        .then((entities:any) => {
            newEntities = newEntities.map((entity:any) => {
                if (!entity._id) return { ...entity, _id: _makeId() }
                return entity
            })
            entities.push(...newEntities)
            _save(entityType, entities)
            return entities
        })
}

function _save(entityType:string, entities:any) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}