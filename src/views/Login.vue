<template>
  <div class="login-box">
    <h4>Login</h4>
    <hr />
    <div v-if="isloading" class="container-loading">
      <Waitbar />
    </div>

    <form @submit.prevent="login">
      <input required v-model="username" placeholder="Name" />
      <input required v-model="requestToken" placeholder="Token" />
      <label class="token-label">
        <input v-model="rememberLoginInformation" type="checkbox" />
        Remember token
      </label>
      <button type="submit">Login</button>
    </form>
  </div>
</template>


<script lang="ts">
import { reactive, toRefs } from "vue";
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "vue-router";
import { IUser } from "@/models/IUser";
import Waitbar from "@/components/Waitbar.vue";

import AuthService, {
  USER_NAME_KEY,
  REQUEST_TOKEN_KEY,
} from "@/services/AuthService";


export default {
  components: {
    Waitbar,
  },
  setup() {
    const store = useUserStore();
    const router = useRouter();

    //reactive user
    const uiState = reactive({
      isloading: false,
      rememberLoginInformation: false,
    });

    const user = reactive<IUser>({
      username: window.localStorage.getItem(USER_NAME_KEY) as string,
      requestToken: window.localStorage.getItem(REQUEST_TOKEN_KEY) as string,
    });

    async function login(): Promise<void> {
      uiState.isloading = true;

      let loginRes = await AuthService.login(
        user,
        uiState.rememberLoginInformation
      );
      uiState.isloading = false;

      if (loginRes) {
        store.SetUser(user);
        router.push("/");
      } else {
        console.log("error during login");
      }
    }

    return {
      //When passing user reactive object to the component, we can turn them back into reactive properties using the toRefs function.
      ...toRefs(user),
      ...toRefs(uiState),
      login,
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

.token-label {
  text-align: left;
}
</style>
