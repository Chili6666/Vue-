<template>
  <div class="card">
    <router-link :to="{ name: 'Moviedetails', params: { id: movieId } }">
      <img :src="imageUrl" alt="video image" />
    </router-link>
    <CircleProgress :value="voteAverage" class="rate" />
    <div class="card-details">
      <router-link :to="{ name: 'Moviedetails', params: { id: movieId } }">
        <p class="title">
          {{ title }}
        </p>
      </router-link>
      <div>
        {{ releaseDate }}
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import CircleProgress from "@/components/CircleProgress.vue";

export default defineComponent({
  components: {
    CircleProgress,
  },
  props: {
    movieId: {
      type: Number,
      required: true,
    },
    voteAverage: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="css" scoped>
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
  font-weight: bold;
}

a{
  color: #2c3e50;
  text-decoration: none;
}

a.router-link-exact-active {
  color: #42b983;
}

a:hover{
  color:cadetblue;
}

.card-details {
  transform: translate(0px, -30px);
}
</style>