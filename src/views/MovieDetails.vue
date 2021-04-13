<template>
  <h1>Movie details</h1>
  {{movieDetails}}
  {{movieCredits}}
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, Ref, ref } from "vue";
import MovieService from "@/services/DataService";
import { IMovie } from "@/models/IMovie";
import { combineUrlPath } from "../helper/urlExtensions";
import { imageBaseUrl, imageSize } from "../env";

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const movieDetails= ref();
     const movieCredits= ref();
    onMounted(() => {
      loadData();
    });

    async function loadData() {
      try {
        const movieDetaildata = await MovieService.getMovieDetails(props.id);
        movieDetails.value = movieDetaildata;
        const movieCreditData = await MovieService.getMovieCredits(props.id);
        movieCredits.value = movieCreditData;
        
      } catch (err) {
        console.log(err);
      }
    }


    return {
      movieDetails,
      movieCredits
    };
  },
});
</script>
