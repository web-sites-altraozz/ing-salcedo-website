<script setup>
const class_text = ref("/icons/text_white.png");
const dropmenu = ref(true);
const isDivVisible = ref(false);
import { ref, onMounted, onUnmounted } from "vue";

const prevScrollY = ref(0);
const hidemenu = ref(true);
const activatedScroll = ref(false);

window.addEventListener("scroll", () => {
  if (window.scrollY != 0) {
    activatedScroll.value = true;
  }

  if (window.scrollY == 0) {
    activatedScroll.value = false;
  }
  const currentScrollY = window.scrollY;
  const navBar = document.querySelector(".na");

  if (currentScrollY > prevScrollY.value) {
    // Hacer que el Navbar se esconda cuando haces scroll hacia abajo
    isDivVisible.value = false;
  }
  prevScrollY.value = currentScrollY;
});

const props = defineProps({
  hidemenu: {
    type: Boolean,
  },
});

const detectScreen = () => {
  if (window.innerWidth < 620) {
    class_text.value =
      "https://ik.imagekit.io/xorz/Ing.%20D.%20Salcedo/text_white.png?updatedAt=1719330531323";
    dropmenu.value = false;
  } else {
    class_text.value =
      "https://ik.imagekit.io/xorz/Ing.%20D.%20Salcedo/text_white.png?updatedAt=1719330531323";
    dropmenu.value = true;
  }
};

function toggleDiv() {
  isDivVisible.value = !isDivVisible.value;
}

try {
  // Registra el evento 'resize' al montar el componente para detectar cambios en la resolución
  onMounted(() => {
    detectScreen();
    window.addEventListener("resize", detectScreen);
  });

  // Asegúrate de quitar el evento 'resize' cuando el componente se destruye para evitar fugas de memoria
  onUnmounted(() => {
    window.removeEventListener("resize", detectScreen);
  });
} catch (err) {
  console.log(err);
}
</script>

<template>
  <div style="display: flex; flex-direction: column">
    <nav
      :style="dropmenu ? 'padding: 0 3rem' : 'padding: 0 1rem'"
      :class="activatedScroll ? 'bg-color' : 'bg-transparent'"
    >
      <div class="logo">
        <RouterLink to="/">
          <a
            ><img
              class="a"
              src="https://ik.imagekit.io/xorz/Ing.%20D.%20Salcedo/logotype.png?updatedAt=1719330531439"
              alt=""
          /></a>
          <img
            class="b"
            :src="class_text"
            style="width: 80%; max-width: 300px"
            alt=""
          />
        </RouterLink>
      </div>
      <div class="options" v-if="dropmenu">
        <a href="contacto"
          ><span class="mdi mdi-email-outline"></span>Contáctame</a
        >
        <a href="sobre-mi"
          ><span class="mdi mdi-account-hard-hat-outline"></span>Sobre mí</a
        >
        <a href="experiencia"
          ><span class="mdi mdi-briefcase-outline"></span>Experiencia</a
        >
      </div>
      <div v-else>
        <div class="dropmenu" @click="toggleDiv">
          <span class="mdi mdi-menu" style="font-size: 24px"></span>
        </div>
      </div>
    </nav>
    <transition name="slide-fade">
      <div
        v-if="isDivVisible"
        class="menu-mb"
        style="width: 100%; display: flex; justify-content: end"
      >
        <div class="drop-menu-active">
          <a href="/contacto" @click="toggleDiv">
            <RouterLink to="/contacto">
              <span class="mdi mdi-email-outline"></span>Contáctame
            </RouterLink>
          </a>
          <a href="/sobre-mi"
            ><span class="mdi mdi-account-hard-hat-outline"></span>Sobre mí</a
          >
          <a href="/experiencia"
            ><span class="mdi mdi-briefcase-outline"></span>Experiencia</a
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
nav {
  height: 4rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  /*
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px)
  */
  z-index: 1000;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      .a {
        width: auto;
        height: 30px;
      }
    }
  }

  .links {
    display: flex;
  }

  .nav-link {
    color: white;
    /* Cambia este valor al color deseado */
    text-decoration: none;
    /* Quita el subrayado predeterminado */
    margin-right: 20px;
    /* Ajusta el espaciado entre los enlaces si es necesario */
  }

  .options {
    display: flex;
    gap: 2rem;

    a {
      display: flex;
      gap: 3px;
      color: #bbbbbb;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    a:hover {
      color: #ffc107;
    }
  }

  /* Cambiar el color al pasar el cursor sobre los enlaces */
  .nav-link:hover {
    color: #ffc107;
    /* Cambia este valor al color deseado cuando se pasa el cursor */
  }

  .dropmenu {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    transition: all 0.3s ease;
  }

  .dropmenu:active {
    color: #ffc107;
    border: 3px solid #ffc107;
  }
}

.drop-menu-active {
  background: #111c29e7;
  width: 100%;
  border-radius: 0px 0px 5px 5px;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid rgba(255, 255, 255, 0.674);
  z-index: 0;
  a {
    display: flex;
    gap: 3px;
    color: #bbbbbb;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  a:hover {
    color: #ffc107;
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.bg-transparent {
  background-color: transparent;
  transition: all 0.3s ease;
}

.bg-color {
  background-color: #111c29e7;
  transition: all 0.3s ease;
}
</style>
