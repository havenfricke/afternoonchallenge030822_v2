import { AppState } from "../AppState"
import { Apod } from "../Models/Apod"
import { logger } from "../utils/Logger"
import { apodsApi } from "./AxiosService"



const baseQuery = {
  api_key: 'wgylk6usUBfSbN5JPQ1eelWhCAiTqOfueczIfNjt',
  date: ''
}

class ApodsService {
  async getApod() {
    const res = await apodsApi.get('', { params: baseQuery })
    logger.log(res.data)
    AppState.apod = new Apod(res.data)
  }

  async searchByDate(date) {
    baseQuery.date = date
    const res = await apodsApi.get('', { params: baseQuery })
    logger.log(res.data)
    AppState.apod = new Apod(res.data)
  }
}
export const apodsService = new ApodsService()