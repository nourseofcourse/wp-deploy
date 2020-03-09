<template>
  <div>
    <Header />
    <main class="main">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components//Global/Header/Header.vue';
import Footer from '@/components/Global/Footer/Footer.vue';

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="scss">

</style>
