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
import AccessLogs from '@/components/Spaces/AccessLogs.vue';
import Domains from '@/components/Spaces/Domains.vue';
import SFTPUsers from '@/components/Spaces/SFTPUsers.vue';
import SiteMigration from '@/components/Spaces/SiteMigration.vue';
import Utilities from '@/components/Spaces/Utilities.vue';

export default {
  data() {
    return {
      tabs: ["Overview", "Domains", "Access Logs", "Error Logs", "Backup Points", "SFTP Users", "Site Migration", "Utilities"],
      selected: "Overview"
    }
  },
  components: {
    Overview,
    ErrorLogs,
    BackupPoints,
    AccessLogs,
    Domains,
    SFTPUsers,
    SiteMigration,
    Utilities
  }
}
</script>

<style>
</style>
