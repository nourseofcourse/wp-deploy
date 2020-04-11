<template>
  <div>
    <h1>Error Logs</h1>
    <button @click="refreshLog">Refresh</button>
    <pre>{{ log }}</pre>

    <ul>
      <li v-for="(plugin, index) in plugins" :plugin="plugin" :key="index">{{ plugin }}</li>
    </ul>

    <p>{{ update }}</p>
  </div>
</template>

<script>
  import LogService from '@/services/LogService.js'
  import SpaceService from '@/services/SpaceService.js';
  export default {
    name: 'ErrorLogs',
    data() {
      return {
        log: '',
        plugins: '',
        update: ''
      }
    },
    methods: {
      getLog() {
        LogService.getLog().then( ( response ) => {
          this.log = response.data
        })
      },
      refreshLog() {
        this.getLog()
      },
      getPlugins() {
        SpaceService.getPlugins().then( (response ) => {
          this.plugins = response.data
        })
      },
      checkUpdate() {
        SpaceService.checkUpdate().then( (response) => {
          this.update = response.data
        })
      }
    },
    created() {
      this.getLog()
      this.getPlugins()
      this.checkUpdate()
    }
  }
</script>

<style lang="scss" scoped>

</style>
