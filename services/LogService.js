import axios from '@/plugins/axios'

export default {
  getLog() {
    return axios.get('/workbench/v1/logs')
  },
}
