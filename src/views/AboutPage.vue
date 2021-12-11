<template>
  <div>
    <page-header></page-header>
    <h1>About Page</h1>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
export default {
  name: "about-page",
  components: {
    PageHeader,
  },
  data() {
      return {
          username: this.$route.params.username
      }
  },
};
</script>

<style scoped>
</style>