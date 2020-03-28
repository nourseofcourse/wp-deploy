<template>
  <div class="container">
    <ul>
      <li v-for="(tab, index) in tabs" :key="index" @click="selected = tab.replace(/\s/g, '')">{{ tab }}</li>
    </ul>
    <keep-alive>
      <component :is="selected"></component>
    </keep-alive>
  </div>
</template>

<script>
import Overview from '@/components/Spaces/Overview.vue';
import BackupPoints from '@/components/Spaces/BackupPoints.vue';
import ErrorLogs from '@/components/Spaces/ErrorLogs.vue';

export default {
  data() {
    return {
      tabs: ["Overview", "Error Logs", "Backup Points"],
      selected: "Overview"
    }
  },
  components: {
    Overview,
    ErrorLogs,
    BackupPoints
  }
}
</script>

<style>
</style>
