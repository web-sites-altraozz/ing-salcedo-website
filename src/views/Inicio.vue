<script setup>
import ProjectCards from "@/components/cards/ProjectCards.vue";
import LandingPage from "@/components/LandingSection.vue";
import Formdaniela from "@/components/Formdaniela.vue";
import ButtonMain from "@/components/buttons/ButtonMain.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import ServiceCard from "@/components/cards/ServiceCard.vue";
import clipboardButton from "@/components/buttons/clipboardButton.vue";

import { ref, onMounted, onUnmounted } from "vue";
const con_res = ref("info isnt_mobile");
const hide_hr = ref(true);

const detectScreen = () => {
  if (window.innerWidth < 1050) {
    con_res.value = "info is_mobile";
  } else {
    con_res.value = "info isnt_mobile";
  }

  if (window.innerWidth < 620) {
    hide_hr.value = false;
  } else {
    hide_hr.value = true;
  }
};

const titulo = ref("");
const descripcion = ref("");
const seccion_1 = ref([]);
const seccion_2 = ref([]);
const seccion_3 = ref([]);
const seccion_4 = ref([]);
const seccion_5 = ref([]);

const fetchData = async () => {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    titulo.value = data.titulo;
    descripcion.value = data.descripcion;
    seccion_1.value = data.seccion_1;
    seccion_2.value = data.seccion_2;
    seccion_3.value = data.seccion_3;
    seccion_4.value = data.seccion_4;
    seccion_5.value = data.seccion_5;
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
};

onMounted(fetchData);

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
  <div class="inicio-container">
    <LandingPage :titulo="titulo" :descripcion="descripcion" />
    <hr v-if="hide_hr" />
    <div class="services-section">
      <div class="container-cards">
        <SectionTitle name="Servicios" class="text-center" />

        <ServiceCard
          v-for="seccion_obj in seccion_1"
          :key="seccion_obj.servicio"
          :icono="seccion_obj.icono"
          :servicio="seccion_obj.servicio"
          :descripcion="seccion_obj.descripcion"
        />
      </div>
    </div>
    <hr />
    <div class="proyectos-container">
      <SectionTitle name="Trabajos Recientes" />
      <ProjectCards
        v-for="seccion_obj in seccion_2"
        :key="seccion_obj.proyecto"
        :proyecto="seccion_obj.proyecto"
        :imglink="seccion_obj.imglink"
        :fecha="seccion_obj.fecha"
        :tipo="seccion_obj.tipo"
        :supervisor="seccion_obj.supervisor"
        :contratista="seccion_obj.contratista"
      />
      <router-link :to="{ name: 'experiencia' }">
        <ButtonMain name="Ver más" type="button" />
      </router-link>
    </div>
    <hr />
    <div
      name="sobre-mi"
      class="w-full max-w-5xl flex flex-col items-center md:items-start w-full md-2/4 md:flex-row md:justify-between flex-wrap"
    >
      <div class="max-w-md md:w-2/4 p-8 flex justify-center">
        <img
          src="https://ik.imagekit.io/xorz/Ing.%20D.%20Salcedo/da3.jpg?updatedAt=1719334429085"
          alt="foto dani"
          class="rounded-md"
        />
      </div>
      <div class="flex flex-col p-8 text-justify md:pl-8 w-full md:w-2/4">
        <SectionTitle name="Sobre mí" />
        <p v-for="(parrafo, index) in seccion_3" :key="index">
          {{ parrafo }}
          <br />
          <br />
        </p>
        <router-link :to="{ name: 'sobre-mi' }">
          <ButtonMain name="Saber más" type="owo" />
        </router-link>
      </div>
    </div>
    <div class="clientes-section">
      <SectionTitle :name="seccion_4.titulo" />
      <div class="opinion-container">
        <div
          class="card-op my-2"
          v-for="(opinion, index) in seccion_4.opiniones"
          :key="index"
        >
          <p>{{ opinion.opinion }}</p>
          <hr />
          <div class="info-card">
            <img :src="opinion.imagen" alt="imgane person" />

            <div class="card-text">
              <h3>{{ opinion.nombre }}</h3>
              <p>{{ opinion.entidad }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="w-full max-w-4xl flex flex-col mb-8">
      <SectionTitle :name="seccion_5.titulo" class="p-8" />
      <div
        class="flex flex-col lg:flex-row justify-center items-center lg:justify-between"
      >
        <div class="max-w-sm flex flex-col-reverse lg:flex-col max-w-xs">
          <div class="mb-8">
            <p class="text-justify">
              <strong>¡Hagamos que suceda!</strong>
              {{ seccion_5.descripcion }}
            </p>
            <div class="flex flex-row mt-8 items-center">
              <span class="mdi mdi-email-outline" style="color: #ffc107"></span>
              <p class="pl-4">dfernanda.salcedo24@gmail.com</p>
              <clipboardButton text="fernanda.salcedo24@gmail.com" />
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
                <p class="pl-4">+57 315 7313902</p>
              </a>
            </div>
          </div>
          <img :src="seccion_5.imagen" alt="" class="" />
        </div>
        <div class="w-full max-w-xs">
          <Formdaniela />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/inicio.scss";
</style>
