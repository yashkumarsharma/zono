import axios from 'axios'

export {
  getApi,
}

const axiosInstance = axios.create({})

async function getApi (url, config = {}) {
  return axiosInstance.get(url, {
    ...config,
  })
}

