<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";

import { ref } from "vue";

const prevScrollY = ref(0);
const hidemenu = ref(true);

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  const navBar = document.querySelector(".na");

  if (currentScrollY > prevScrollY.value) {
    // Hacer que el Navbar se esconda cuando haces scroll hacia abajo
    navBar.style.top = `-${navBar.offsetHeight}px`;
    hidemenu.value = false;
  } else {
    // Hacer que el Navbar aparezca cuando haces scroll hacia arriba
    navBar.style.top = "0";
    hidemenu.value = true;
  }

  prevScrollY.value = currentScrollY;
});
</script>

<template>
  <div class="main">
    <Navbar :hidemenu="hidemenu" class="na" />
    <RouterView class="ad" />
    <footer>
      <p><i>powered by xorzz</i></p>
    </footer>
  </div>
</template>

<style lang="scss">
$primary-color: #111c29;

.main {
  background-color: $primary-color;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  align-items: center;

  .ad {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .na {
    position: fixed;
    z-index: 2;
    top: 0;
    transition: all 0.4s ease;
    width: 100%;
  }

  Footer {
    display: flex;
    background-color: #0e1723;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 100%;

    p {
      color: rgb(64, 64, 64);
      font-size: small;
      margin: 0;
      transition: all 0.5s ease;
    }

    p:hover {
      text-decoration: none !important;
      color: aqua;
      cursor: pointer;
    }
  }
}
</style>
