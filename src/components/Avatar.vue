<template>
  <div>
    <div class="card">
      <img class="card__image" src="../assets/logo.png" alt="" />
      <div class="avatar">
        <h3>
          {{ avatarText }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "avatar",
  props: {
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    image: { type: String, default: "" },
  },
  setup(props) {
    const avatarText = computed(() => {
      if (props.firstName != "" && props.lastName != "") {
        return `${props.firstName
          .substr(0, 1)
          .toUpperCase()}${props.lastName.substr(0, 1).toUpperCase()}`;
      } else return "?";
    });

    return {
      avatarText,
    };
  },
});
</script>

<style scoped>
.avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 12px;
  background: #41b883;
  color: #35495e;
  border: 1px solid #35495e;
  position: relative;
  display: flex; /* [1] */
  align-items: center; /* [2] */
}

.avatar h3 {
  font-size: 15px;
}
</style>