import axios from '@/utils/axios.js'

export const iapi = {
  methods: {
    async getImages (page = 1, limit = 9, val) {
      const res = await axios({
        method: 'get',
        url: `/images?page=${page}&limit=${limit}`
      }, val)
      return res
    },
    async getImage (id, val) {
      const res = await axios({
        method: 'get',
        url: `/image/${id}`
      }, val)
      return res
    }
  }
}
