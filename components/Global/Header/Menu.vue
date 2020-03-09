<template>
  <div class="site-menu" ref="js-site-menu">
  <div class="site-menu__wrapper">
    <nav class="site-menu__nav  site-nav" ref="js-site-nav">
      <ul class="site-nav__list list-bare">
        <li class="site-nav__item"
            v-for="(item, index) in items"
            :key="index"
            :item="item">
          <nuxt-link :to="{ name: item.slug }" class="site-nav__link"><span>{{ item.title }}</span></nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>
