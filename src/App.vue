<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <span v-if="store.isAuthenticated"> | <a @click="logout">Logout</a></span>
  </div>
  <router-view />
</template>

<script>
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const store = useUserStore();

    function logout() {
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
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
