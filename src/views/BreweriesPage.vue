<template>
  <div>
    <page-header></page-header>
    <h1>Breweries Page</h1>
    <!-- for loop to place info of breweries -->
    <section id="brew_basket">
      <article v-for="brewery in breweries" :key="brewery.id">
        <h2>{{ brewery.name }}</h2>
        <p>{{ brewery.street }}</p>
        <p>{{ brewery.city }}, {{ brewery.state }}</p>
        <!-- used join function to create string to put inside href -->
        <a :href="['tel:'].join(brewery.phone)">{{ brewery.phone }}</a>
      </article>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import PageHeader from "@/components/PageHeader.vue";
export default {
  name: "breweries-page",
  components: {
    PageHeader,
  },
  data() {
    return {
      breweries: [],
    };
  },
  methods: {
    get_breweries() {
      axios
        .request({
          url: "https://api.openbrewerydb.org/breweries",
        })
        .then((response) => {
          // store request in variable 'breweries' by calling update_breweries function
          this.breweries = response.data;
        })
        .catch((error) => {
          error;
        });
    },
  },
  mounted() {
    this.get_breweries();
  },
};
</script>

<style scoped>

* {
    margin: 0px;
    padding: 0px;
}

#brew_basket {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    column-gap: 10px;
    row-gap: 10px;
    margin: 25px;
}

article {
    border: solid 1px black;
    display: grid;
    place-items: center;
    padding: 10px;
}
</style> 