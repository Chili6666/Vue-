<template>
  <div class="card-container">
    <div v-for="(movie, id) in trendingMoviesData" :key="id" class="card">
      <img :src="movie.full_poster_path" alt="video image" />

      <CircleProgress :value="movie.vote_average" class="rate" />
      <div class="card-details">
        <p class="title">
          {{ movie.original_title }}
        </p>
        <div>
          {{ movie.release_date }}
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { ref, Ref, onMounted } from "vue";
import MovieService from "@/services/DataService";
import { IMovie } from "@/models/IMovie";
import { combineUrlPath } from "../helper/urlExtensions";
import { imageBaseUrl, imageSize } from "../env";
import CircleProgress from "@/components/CircleProgress.vue";

export default {
  components: {
    CircleProgress,
  },
  setup() {
    const trendingMoviesData: Ref<IMovie[]> = ref([]);

    //path the imagepath

    onMounted(() => {
      loadData();
    });

    async function loadData() {
      try {
        const moviedata = await MovieService.getPopularMovies();
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

.card {
  padding: 10px;
  width: 100%;
  height: 250px;
  min-height: 100px;
  position: relative;
}
img {
  height: 100%;
  position: relative;
  border-radius: 10px;
  box-shadow: 4px 4px 3px grey;
}

.rate {
  transform: translate(10px, -30px);
}

.title {
  font-weight: bold;
}

.card-details{
  transform: translate(0px, -30px);
}
</style>