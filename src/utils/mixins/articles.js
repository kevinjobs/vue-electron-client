import axios from '@/utils/axios.js'

export const aapi = {
  methods: {
    async getArticles (page = 1, limit = 9, val) {
      const res = await axios({
        method: 'get',
        url: `/articles?page=${page}&limit=${limit}`
      }, val)
      return res
    },
    async getArticle (id, val) {
      const res = await axios({
        method: 'get',
        url: `/article/${id}`
      }, val)
      return res
    }
  }
}
