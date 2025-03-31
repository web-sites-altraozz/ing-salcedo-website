<template>
  <div :class="class_card">
    <div class="img-container">
      <img :src="imglink" alt="" />
    </div>
    <div class="desc-container">
      <h3>{{ proyecto }}</h3>
      <hr />
      <div>
        <p>
          <span class="mdi mdi-calendar mr-1"></span>
          <b>Fecha: </b>{{ fecha }}
        </p>
        <p>
          <span class="mdi mdi-domain mr-1"></span>
          <b>Tipo de Obra: </b>{{ tipo }}
        </p>
        <p>
          <span class="mdi mdi-account-tie mr-1"></span>
          <b>Ubicación: </b>{{ supervisor }}
        </p>
        <p>
          <span class="mdi mdi-account-hard-hat mr-1"></span>
          <b>Diseño: </b> {{ contratista }}
        </p>
        <br />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps } from "vue";
const class_card = ref("card-project-container-md");

const detectScreen = () => {
  if (window.innerWidth < 800) {
    class_card.value = "card-project-container-mb";
  } else {
    class_card.value = "card-project-container-md";
  }
};

//props del componente
const props = defineProps({
  proyecto: String,
  imglink: String,
  fecha: String,
  tipo: String,
  supervisor: String,
  contratista: String,
});

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

<style lang="scss">
.card-project-container-mb {
  border-radius: 10px;
  overflow: hidden;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  .img-container {
    width: 100%;
    height: auto;
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  }
}

.card-project-container-md {
  margin: 1rem 0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  max-width: 1000px;
  max-height: 280px;

  .img-container {
    width: 100%;
    height: auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .desc-container {
    padding: 1rem;
    width: 100%;
    background-color: #162435;
    max-width: 20rem;
    hr {
      text-align: center;
      width: 100%;
      background-color: red;
    }
    h3 {
      font-size: medium;
      padding: 10px 0;
      width: 100%;
      text-align: center;
    }
  }
}
</style>
