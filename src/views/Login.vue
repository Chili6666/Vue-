<template>
  <div class="login-box">
    <h4>Login</h4>
    <hr />
    <div v-if="isloading" class="container-loading">
      <Spinner />
    </div>

    <form @submit.prevent="login">
      <input required v-model="username" placeholder="Name" />
      <input required v-model="requestToken" placeholder="Token" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>


<script lang="ts">
import { ref, reactive, toRefs } from "vue";
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "vue-router";
import { IUser } from "@/models/user";
import AuthService from "@/services/AuthService";
import Spinner from "@/components/spinner.vue";

export default {
  components: {
    Spinner,
  },
  setup() {
    const store = useUserStore();
    const router = useRouter();

    const user = reactive<IUser>({
      username: "",
      requestToken: "",
    });

    const isloading = ref(false);

    async function login() {
      isloading.value = true;
      window.localStorage.setItem("username", user.username);
      window.localStorage.setItem("token", user.requestToken);

      let loginRes = await AuthService.login(user);
      isloading.value = false;

      if (loginRes) {
        console.log("login success.");
        store.SetUser(user);
        router.push("/");
      } else {
        console.log("error during login");
      }
    }

    return {
      ...toRefs(user),
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
  border: 1px solid black;
  border-radius: 5px;
  padding: 1.5rem;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
}

.container-loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
}

button {
  margin: 10px 0px;
  padding: 0.5rem;
  background-color: lightgray;
  border: 1px solid gray;
  border-radius: 3px;
  cursor: pointer;
}

input {
  padding: 0.5rem;
    margin: 4px 0px;
}

form {
  display: flex;
  flex-flow: column;
}
</style>
