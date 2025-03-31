<script setup>
import { ref } from "vue";
import FormDaniela from "@/components/Formdaniela.vue";
import SectionTitle from "@/components/SectionTitle.vue";

import clipboardButton from "@/components/buttons/clipboardButton.vue";

const bgclass = ref("no-zoom");

const handlePointerEnter = () => {
  bgclass.value = "zoom";
};

const handlePointerLeave = () => {
  bgclass.value = "no-zoom";
};
</script>
<template>
  <!--
:class="bgclass"
  -->
  <div class="about-container mt-12" :class="bgclass">
    <div
      class="container-aux aa flex flex-col items-center md:items-start md:flex-row w-full max-w-4xl"
      @pointerenter="handlePointerEnter"
      @pointerleave="handlePointerLeave"
    >
      <div class="info-container">
        <SectionTitle name="Contáctame" />
        <p>
          Cada proyecto es una nueva oportunidad para demostrar mi compromiso,
          pasión y dedicación. Si me contactas, no solo recibirás un trabajo de
          calidad y con responsabilidad, sino que también estarás confiando en
          alguien que pone el corazón en cada obra. ¡Hagamos equipo! Escríbeme y
          te aseguro que no te arrepentirás
        </p>
        <br />
        <p>Enviame un mensaje</p>
        <div class="item-container">
          <div class="flex items-center p-0">
            <span
              class="mdi mdi-email"
              style="font-size: large; color: rgb(34 211 238)"
            ></span>
            <p class="pl-4">dfernanda.salcedo24@gmail.com</p>
            <clipboardButton text="dfernanda.salcedo24@gmail.com" />
          </div>
          <div>
            <a
              href="https://wa.me/+573157313902"
              class="flex items-center p-0"
              style="width: fit-content"
            >
              <span
                class="mdi mdi-whatsapp"
                style="color: #008a55; font-size: large"
              ></span>
              <p class="pl-4" style="color: white">+57 315 7313902</p>
            </a>
          </div>
        </div>
      </div>
      <div class="form-container" style="">
        <div class="formm">
          <p class="mb-2 text-center font-bold">o deja deja que te contacte</p>
          <FormDaniela />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.about-container {
  min-height: 100vh;
  width: 100%;
  padding: 10px 5%;
  background-image: url(https://ik.imagekit.io/xorz/Ing.%20D.%20Salcedo/background-contact-me.png?updatedAt=1719331084789);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  .container-aux {
    background-color: #ffffff05;
    border-radius: 10px;
    backdrop-filter: blur(2px);
    gap: 5rem;
    margin: 5rem 1rem;

    .info-container {
      background-color: transparent;
      width: 100%;
      max-width: 400px;
      padding: 2rem 2rem;

      p {
        text-align: justify;
      }
      .item-container {
        border-left: 3px solid gray;
        padding-left: 1rem;
        margin: 2rem 0;
        p {
          text-align: justify;
        }
        .item {
          display: flex;
          align-items: center;
          gap: 5px;

          p {
            margin-bottom: 0;
          }
          .icon {
            font-size: larger;
            font-weight: bold;
          }
        }
      }
    }

    .form-container {
      width: 100%;
      max-width: 500px;
      padding: 2rem 2rem;
    }
  }

  h1 {
    text-align: start;
  }
}

.aa {
  border-left: none;
}

@media screen and (min-width: 600px) {
  .aa {
    border-left: solid 4px gray;
  }
}
.zoom {
  background-size: 105%;
  transition: background-size 0.8s ease-in-out; /* Aplicamos la transición a background-size */
}

.no-zoom {
  background-size: 100%; /* Mantiene el tamaño original */
  transition: background-size 0.8s ease-in-out; /* Aplicamos la transición a background-size */
}
</style>
