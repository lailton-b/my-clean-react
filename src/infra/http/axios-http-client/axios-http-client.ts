// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpPostParams } from '@/data/protocols/http'
import axios from 'axios'

export class AxiosHttpClient {
  async post (params: HttpPostParams<any>): Promise<void> {
    await axios.post(params.url)
  }
}
