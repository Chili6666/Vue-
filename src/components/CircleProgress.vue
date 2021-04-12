<template>
  <div class="circle-container">
    <div :class="classes">{{ progressValue }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    value: {
      type: Number,
      default: 0.0,
    },
  },
  setup(props) {
    const progressValue = ref(props.value);
    const classes = ref("circle");
    if (progressValue.value > 7) {
      classes.value = "circle-green";
    }

    return {
      progressValue,
      classes,
    };
  },
});
</script>

<style scoped>
.circle-container {
  border-radius: 19px;
  width: 38px;
  height: 38px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  /* transform: translate(10px, -30px); */
}
.circle {
  display: flex;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  border: 2px solid yellow;
}

.circle-green {
  display: flex;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  border: 2px solid green;
}
</style>