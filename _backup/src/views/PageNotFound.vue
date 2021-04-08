<template>
  <div >
    <h1>Page Not Found</h1>
    <p>Oops we couldn't find that page. Try going
        <!-- named link -->
        <router-link :to="{name: 'Home'}">home</router-link>
        <!--fix link -->
        <!-- <router-link to="/">Home</router-link>  -->
    </p>
  </div>
</template>
