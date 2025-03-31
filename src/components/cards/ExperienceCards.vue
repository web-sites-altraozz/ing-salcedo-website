<script setup>
const props = defineProps({
  Logo: String,
  Empresa: String,
  Lugar: String,
  Fecha: String,
  Jefe: String,
  Contacto: String,
  Actividades: Array,
  isleft: Boolean,
});
</script>
<template>
  <div
    style="display: flex; align-items: center"
    :style="
      isleft ? { flexDirection: 'row' } : { flexDirection: 'row-reverse' }
    "
  >
    <div
      class="cat"
      :style="isleft ? { marginRight: '-15px' } : { marginLeft: '-15px' }"
    ></div>
    <div class="e-card smooth">
      <div class="main-card">
        <div class="title-section">
          <img :src="Logo" alt="" class="img" />
          <div>
            <div class="title-text">{{ Empresa }}</div>
            <div class="p-text">{{ Lugar }}</div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="info-section">
          <div><b>Fecha: </b> {{ Fecha }}</div>
          <div><b>Jefe Inmediato: </b>{{ Jefe }}</div>
          <div><b>Contacto: </b>{{ Contacto }}</div>
        </div>
      </div>
      <ul style="position: absolute" class="inf smooth">
        <li v-for="(actividad, index) in Actividades" :key="index">
          {{ actividad }}
        </li>
      </ul>

      <div class="box"></div>
    </div>
  </div>
</template>

<style lang="scss">
.cat {
  height: 25px;
  width: 25px;
  border-radius: 5px;
  background-color: #162435;
  transform: rotate(45deg);
}

.e-card {
  position: relative;
  background-color: #162435;
  width: 420px;
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  .main-card {
    .title-section {
      display: flex;
      align-items: center;
      .img {
        height: 70px;
        border-radius: 5px;
        margin-right: 1.5rem;
      }
      .title-text {
        font-size: larger;
        font-weight: bold;
        margin-right: 0.5rem;
        line-height: 100%;
      }
      .p-text {
        font-size: small;
        font-weight: lighter;
        color: rgb(217, 217, 217);
      }
    }
    .info-section {
      color: white;
    }

    .divider {
      height: 2px;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.473);
      margin: 0.725rem 0;
      border-radius: 5px;
    }
  }

  .inf {
    padding: 1.5rem;
    border-radius: 5px;
    top: 0;
    left: 0;
    backdrop-filter: blur(5px);
    width: 100%;
    height: 100%;
    z-index: 200;
    opacity: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;

    li {
      list-style-type: disc;
      margin-left: 1rem;
    }
  }

  .box {
    opacity: 0;
    height: 20px;
    width: 20px;
    z-index: 100;
    border-radius: 100px;
    background-color: #eab308;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    border: solid #111c29 5px;
  }
}

.e-card:hover {
  opacity: 100%;
  .main-card {
    opacity: 10%;
  }
  .inf {
    opacity: 100%;
  }
}

@media screen and (max-width: 980px) {
  .e-card {
    width: 100%;
    max-width: 400px;
    padding: 1rem;
    .title-section {
      padding-bottom: 1rem;
      .img {
        height: 44px;
        width: auto;
        margin-right: 1rem;
      }
      .title-text {
        font-size: medium;
        font-weight: bold;
      }
      .p-text {
        font-size: smaller;
        font-weight: lighter;
        color: rgb(217, 217, 217);
      }
    }

    .info-section {
      font-size: small;
    }

    .box {
      opacity: 100%;
    }
  }
  .cat {
    display: none;
  }
}
.smooth {
  transition: all 0.3s ease-in-out;
}
</style>
