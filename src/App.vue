<template>
  <div id="nav">
    <img alt="Vue logo" src="./assets/movieDBLogo.svg" class="img" />
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <span v-if="store.isAuthenticated"> | <a @click="logout">Logout</a></span>
  </div>
   <hr />

  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
</template>

<script>
import { onMounted } from "vue";
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "vue-router";
import AuthService from "@/services/AuthService";

export default {
  setup() {
    const router = useRouter();
    const store = useUserStore();

    onMounted(() => {
      document.title = "Movie DB Sample";
    });

    function logout() {
      AuthService.logout();
      store.RemoveUser();
      router.push("/login");
    }

    if (!store || !router) {
      console.log("Router or State not initialized");
    } else {
      //router guard
      router.beforeEach((to, from, next) => {
        if (to.name !== "Login" && !store.isAuthenticated) {
          next({ name: "Login" });
        } else {
          next();
        }
      });
    }
    return {
      store,
      logout,
    };
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.img {
  width: 100px;
  height: 100px;
  padding: 0px 30px 0px 0px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
