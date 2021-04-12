<template>
  <h1>Popular Movies</h1>
  <PopularMovies />
  <h1>Trending Movies</h1>
  <TrendingMovies />
  <h1>Top Movies</h1>
  <TopMovies />

</template>

<script lang="ts">
import { defineComponent } from "vue";
import TrendingMovies from "@/components/TrendingMovies.vue";
import TopMovies from "@/components/TopMovies.vue";
import PopularMovies from "@/components/PopularMovies.vue";

export default defineComponent({
  components: {
    TrendingMovies,
    TopMovies,
    PopularMovies,
  },
});
</script>

<style scoped>
</style>


