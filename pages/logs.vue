<template>
  <div>
    Error Log
    <pre>{{ log }}</pre>
  </div>
</template>

<script>
  import LogService from '@/services/LogService.js'

  export default {
    name: 'Logs',
    data() {
      return {
        log: ''
      }
    },
    created() {
      LogService.getLog().then( ( response ) => {
        this.log = response.data;
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>
