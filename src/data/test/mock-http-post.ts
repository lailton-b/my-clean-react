// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpPostParams } from '../protocols/http'
import faker from 'faker'

export const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})
