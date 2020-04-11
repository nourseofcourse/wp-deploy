import axios from '@/plugins/axios'

export default {
  getLog() {
    return axios.get('/workbench/v1/logs')
  },
  getPlugins() {
    return axios.get('/workbench/v1/plugins')
  },
  checkUpdate() {
    return axios.get('/workbench/v1/wp_update')
  }
}
