<template>
  <div>
    <h1>Movie details</h1>

    <div class="container">
      <div v-for="(movieArtist, id) in movieArtists" :key="id">
        <img :src="fullpath(movieArtist.profile_path)" alt="video image" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref } from "vue";
import MovieService from "@/services/DataService";
import { combineUrlPath } from "../helper/urlExtensions";
import { imageBaseUrl } from "../env";

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const movieDetails = ref();
    const movieCredits = ref();
    const movieArtists = ref();
    onMounted(() => {
      loadData();
    });

    function fullpath(image: string) {
      //https://image.tmdb.org/t/p/w138_and_h175_face/hIuDik6KDmHLrqZWxBVdXzUw1kq.jpg
      return combineUrlPath(
        combineUrlPath(imageBaseUrl, "w138_and_h175_face"),
        image
      );
    }

    async function loadData() {
      try {
        const movieDetaildata = await MovieService.getMovieDetails(props.id);
        movieDetails.value = movieDetaildata;
        const movieCreditData = await MovieService.getMovieCredits(props.id);
        movieCredits.value = movieCreditData;
        movieArtists.value = movieCreditData.cast;
      } catch (err) {
        console.log(err);
      }
    }

    return {
      movieDetails,
      movieCredits,
      movieArtists,
      fullpath,
    };
  },
});
</script>


<style scoped>
  .container{
    display: flex;
      overflow-x: auto;
  }
</style>
