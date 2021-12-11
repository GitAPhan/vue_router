<template>
  <header>
    <router-link to="/">HOME</router-link>
    <router-link to="/about">ABOUT</router-link>
    <router-link to="/breweries">BREWERIES</router-link>
    <button @click="go_to_about">Go To About</button>
  </header>
</template>

<script>
export default {
  name: "page-header",
  methods: {
    go_to_about() {
      this.$router.push({
        name: "AboutPage",
        params: {
          username: "Alex",
        },
      });
    },
  },
};
</script>

<style scoped>
header {
  display: grid;
  place-items: center;
  text-align: center;
  background-color: skyblue;
  height: 70px;
  grid-auto-flow: column;
}
</style>
