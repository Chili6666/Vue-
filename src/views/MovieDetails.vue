<template>
  <div>
    <div v-if="isloading">is Loading</div>
    <div v-else>
      <div class="demo-wrap">
        <img
          class="demo-bg"
          :src="moviePosterUrl(movieDetails.poster_path)"
          alt="bdimage"
        />

        <div class="card">
          <img
            :src="moviePosterUrl(movieDetails.poster_path)"
            alt="video image"
          />
          <div>
            <h2>{{ movieDetails.title }}</h2>
            <p class="type">{{ movieDetails.overview }}</p>
          </div>
        </div>
      </div>
      <h2>Artists</h2>
      <div class="artist-container">
        <div v-for="(movieArtist, id) in movieArtists" :key="id">
          <div class="artist-card">
            <img
              :src="artistFaceUrl(movieArtist.profile_path)"
              alt="video image"
              class="artist-img"
              @error="imgUrlAlt"
            />
            <p>{{ movieArtist.name }}</p>
            <p class="p">{{ movieArtist.character }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref } from "vue";
import MovieService from "@/services/DataService";
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
    const movieDetails = ref();
    const movieCredits = ref();
    const movieArtists = ref();
    const isloading = ref(true);

    onMounted(() => {
      loadData();
    });

    function artistFaceUrl(image: string) {
      return combineUrlPath(
        combineUrlPath(imageBaseUrl, "w138_and_h175_face"),
        image
      );
    }

    function moviePosterUrl(image: string) {
      return combineUrlPath(combineUrlPath(imageBaseUrl, imageSize), image);
    }

    async function loadData() {
      try {
        isloading.value = true;
        const movieDetaildata = await MovieService.getMovieDetails(props.id);
        movieDetails.value = movieDetaildata;
        const movieCreditData = await MovieService.getMovieCredits(props.id);
        movieCredits.value = movieCreditData;
        movieArtists.value = movieCreditData?.cast.slice(0, 5);

        isloading.value = false;
      } catch (err) {
        console.log(err);
        isloading.value = false;
      }
    }

    function logo() {
      let uui = 'src="' + require("../assets/logo.png") + '"';
      console.log(uui);
      return 'src="' + require("../assets/logo.png") + '"';
    }

    function imgUrlAlt(event: any) {
      //event.target.src = require("@/assets/logo.png");

      event.target.src = "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg";
    }

    return {
      movieDetails,
      movieCredits,
      movieArtists,
      artistFaceUrl,
      moviePosterUrl,
      isloading,
      imgUrlAlt,
    };
  },
});
</script>


<style scoped>
.demo-wrap {
  overflow: hidden;
  position: relative;
}

.demo-bg {
  opacity: 0.1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
}

.card {
  display: flex;
  background-color: black;
  color: white;
  padding: 30px;
  flex-direction: row;
  flex-wrap: nowrap;
}

.card img {
  height: 100%;
  width: 300px;
  margin: 0px 30px 0px 0px;
  border-radius: 10px;
}

.artist-container {
  display: flex;
  overflow-x: auto;
}

.artist-card {
  margin: 10px;
  border-radius: 10px;
  max-width: 140px;
  /* offset-x | offset-y | blur-radius | color */
  box-shadow: 4px 4px 10px rgb(187, 187, 187);
}

.artist-img {

  border-radius: 8px 8px 0px 0px;
}

.p {
  font-size: 13px;
}

/* .test {
  background-image: "https://image.tmdb.org/t/p/w500//lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg";
} */
</style>
