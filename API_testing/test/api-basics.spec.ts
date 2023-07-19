const data = {
    "id": "179",
    "name": "morpheus",
    "job": "leader"
}

const dataresponse = {
    "name": "morpheus",
    "job": "leader",
    "id": "180",
    "createdAt": "2023-07-18T20:34:39.677Z",
}

const completed= {completed:true}
import {test, expect} from '@playwright/test'

test.describe('API testing basics', () => {
 
    test('should create a new user by api request', async ({request}) => {

        const newTodo = await request.post (`users`,{data})
        expect(newTodo.status()).toEqual(201)
        expect(newTodo.statusText()).toEqual('Created')
       // expect(await newTodo.json()).toEqual(dataresponse)
    })

    test ('should get a todo by API request', async ({request}) => {

        const getTodoRes= await request.get (`users`)
        const body = await getTodoRes.json()
        //expect(body).toContainEqual(dataresponse)

    })

    test ('should update a todo by API request', async ({request}) => {
        const updateTodoRes= await request.patch(`users/${data.id}`,{data:completed})
        const body = await updateTodoRes.json()
        expect(body.completed).toEqual(true)
    })

    test ('should delete a todo by API request', async ({request}) => {
        const deleteTodoRes= await request.delete(`users/${data.id}`)
        expect(deleteTodoRes.status()).toEqual(204)
    })

})