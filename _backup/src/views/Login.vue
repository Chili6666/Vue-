<template>
  <div class="login-box">
    <h4>Login</h4>
    <hr />
    {{isloading}}
    <form class="form-group" @submit.prevent="login">
      <div class="input-field">
        <label>Username</label>
        <input required v-model="username" placeholder="Name" />
      </div>
      <div>
        <label>Movie Db Token</label>
        <input required v-model="token" placeholder="Token" />
      </div>
      <hr />
      <button type="submit">Login</button>
    </form>
  </div>
</template>


<script lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useUserStore();
    const router = useRouter();

    const username = ref("");
    const token = ref("");
    const isloading = ref(false);

    async function login() {
      isloading.value = true;
      let loginRes = await store.login(username.value, token.value);
      isloading.value = false;

      if (loginRes) {
        router.push("/");
      } else {
        console.log("error during login");
      }
    }

    return {
      username,
      token,
      login,
      isloading,
    };
  },
};
</script>

<style scoped>
h4 {
  text-align: center;
  margin: 0;
  padding: 0;
  font-weight: 800;
  font-size: 18px;
}

.login-box {
  width: 400px;
  height: auto;
  background-color: white;
  border-radius: 5px;
  padding: 40px;
  margin: auto;
  margin-top: 60px;
  border: 1px solid #e4e6e7;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
  text-align: left;
}

button {
  margin: auto;
  background-color: #fa3254;
  margin: 0;
  padding: 0px 40px;
}
button i {
  font-size: 18px;
}
</style>
