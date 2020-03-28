<template>
  <div>
    <button @click="refreshLog">Refresh</button>
    <pre>{{ log }}</pre>
  </div>
</template>

<script>
  import LogService from '@/services/LogService.js'
  export default {
    name: 'ErrorLogs',
    data() {
      return {
        log: ''
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
      }
    },
    created() {
      this.getLog()
    }
  }
</script>

<style lang="scss" scoped>

</style>
