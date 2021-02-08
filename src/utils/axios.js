import axios from 'axios'

const instance = axios.create()

instance.defaults.baseURL = 'https://api.iyum.in:5000/api/v2'

// interceptors
instance.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data)
    /*
    config.headers = {
      'Content-Type': 'application/json',
      'Authorization': window.localStorage.getItem('token')
    }
    if (window.localStorage.getItem('token')) {
      config.auth = {
        'username': window.localStorage.getItem('token')
      }
    }
    */
    return config
  }
)

export default instance
