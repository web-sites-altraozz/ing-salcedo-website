<template>
  <div class="exp-main">
    <SectionTitle name="Experiencia Laboral" />
    <p class="msg-title">
      Con más de [X] años de experiencia en [tu campo o industria], he
      desarrollado una sólida trayectoria en [mencionar tus principales
      habilidades o logros]. A continuación, se detallan algunas de las
      posiciones clave que han definido mi carrera y contribuciones
      significativas en cada una de ellas.
    </p>
    <section class="exp-container" v-if="dis">
      <div>
        <ExperienceCards
          v-for="(item, index) in izquierdos"
          :key="index"
          :Logo="item.logo"
          :Empresa="item.empresa"
          :Lugar="item.lugar"
          :Fecha="item.fecha"
          :Jefe="item.jefe"
          :Contacto="item.contacto"
          :isleft="item.isleft === 'f'"
          :Actividades="item.actividades"
          class="cards"
        />
      </div>
      <div class="bar-exp"></div>
      <div style="padding-top: 9rem">
        <ExperienceCards
          v-for="(item, index) in derechos"
          :key="index"
          :Logo="item.logo"
          :Empresa="item.empresa"
          :Lugar="item.lugar"
          :Fecha="item.fecha"
          :Jefe="item.jefe"
          :Contacto="item.contacto"
          :isleft="item.isleft === 'f'"
          :Actividades="item.actividades"
          class="cards"
        />
      </div>
    </section>
    <section v-else>
      <div class="exp-container-mb">
        <div
          style="
            background-color: gray;
            width: 3px;
            height: 100%;
            position: absolute;
            top: 0;
            right : 1rem;
          "
        ></div>
        <ExperienceCards
          v-for="(item, index) in experiencia_data.cards_info"
          :key="index"
          :Logo="item.logo"
          :Empresa="item.empresa"
          :Lugar="item.lugar"
          :Fecha="item.fecha"
          :Jefe="item.jefe"
          :Contacto="item.contacto"
          :isleft="item.isleft === 'f'"
          :Actividades="item.actividades"
          class="cards"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import ExperienceCards from "@/components/cards/ExperienceCards.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import { ref, onMounted, onUnmounted } from "vue";

const dis = ref(true);

const actividades = [
  "Diseño, elaboración y preparación de planos de construcción en AutoCAD 2D y 3D.",
  "Uso de Microsoft Excel y Word: para generar presupuestos, proporciona cálculos avanzados, cotizaciones y proporciona comentarios e informes.",
  "Manejo de software de análisis, supervisión, diseño y cálculo de estructuras; SketchUp, BIM Autodesk.",
];

const experiencia_data = ref([""]);
const izquierdos = ref([""]);
const derechos = ref([""]);

const detectScreen = () => {
  if (window.innerWidth < 980) {
    dis.value = false;
  } else {
    dis.value = true;
  }
};

const fetchData = async () => {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    izquierdos.value = data.experiencia.cards_info.filter(
      (el) => el.isleft === "t"
    );
    derechos.value = data.experiencia.cards_info.filter(
      (el) => el.isleft === "f"
    );
    experiencia_data.value = data.experiencia;
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
};

try {
  onMounted(() => {
    detectScreen()
    fetchData();
    window.addEventListener("resize", detectScreen);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", detectScreen);
  });
} catch (err) {
  console.log("puta");
  console.log(err);
}
</script>
<style lang="scss">
.exp-main {
  min-height: 100vh;
  width: 100%;
  padding: 5rem 1rem 2rem 1rem;

  .msg-title {
    max-width: 916px;
    margin-bottom: 4rem;
    padding: 1rem;
    border-radius: 5px;
    border-left: 2px solid gray;
    text-align: justify;
  }

  .exp-container {
    display: flex;

    .bar-exp {
      content: "";
      width: 3px;
      background-color: #676767;
      border-radius: 100px;
      margin: 0 2rem;
    }
  }
  .exp-container-mb {
    position: relative;
  }
}

.cards {
  margin-bottom: 2rem;
}

@media screen and (min-width: 980px) {
  .cards {
    margin-bottom: 5rem;
  }
}
</style>
