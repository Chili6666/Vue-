<template>
  <div class="card-container">
    <div v-for="(movie, id) in trendingMoviesData" :key="id">
      <MovieCard
        :title="movie.original_title"
        :releaseDate="movie.release_date"
        :imageUrl="movie.full_poster_path"
        :movieId="movie.id"
        :voteAverage="movie.vote_average"
      />
    </div>
  </div>
</template>


<script lang="ts">
import { ref, Ref, onMounted } from "vue";
import MovieService from "@/services/DataService";
import { IMovie } from "@/models/IMovie";
import { combineUrlPath } from "../helper/urlExtensions";
import { imageBaseUrl, imageSize } from "../env";
import MovieCard from "@/components/MovieCard.vue";

export default {
  components: {
    MovieCard,
  },
  setup() {
    const trendingMoviesData: Ref<IMovie[]> = ref([]);

    //path the imagepath

    onMounted(() => {
      loadData();
    });

    async function loadData() {
      try {
        const moviedata = await MovieService.getTopMovies();
        //path the imagepath
        moviedata.results.forEach((item) => {
          item.full_poster_path = combineUrlPath(
            combineUrlPath(imageBaseUrl, imageSize),
            item.poster_path
          );
        });
        trendingMoviesData.value = moviedata.results;
      } catch (err) {
        console.log(err);
      }
    }

    return { trendingMoviesData };
  },
};
</script>


<style lang="css" scoped>
.card-container {
  display: flex;
  overflow-x: auto;
  height: 420px;
}
</style>