<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import FormDaniela from "@/components/Formdaniela.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import ButtonMain from "@/components/buttons/ButtonMain.vue";
import ButtonOutline from "@/components/buttons/ButtonOutline.vue";

const bgclass = ref("no-zoom");
const dis = ref(true);
const cdata = ref("");

const height = ref(null);

const url_cv =
  "https://dl.dropboxusercontent.com/scl/fi/9fcead8nsb35etak15p90/HV-DANIELA-SALCEDO-2025.pdf?rlkey=ho0zh729ja91ca1x3qfq61mwn&st=ls81r5o0&dl=0";

const handlePointerEnter = () => {
  bgclass.value = "zoom";
};

const handlePointerLeave = () => {
  bgclass.value = "no-zoom";
};

const detectScreen = () => {
  if (window.innerWidth < 750) {
    dis.value = true;
  } else {
    dis.value = true;
  }
};

const fetchData = async () => {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    cdata.value = data.s;
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
};

try {
  onMounted(() => {
    fetchData();
    detectScreen();
    window.addEventListener("resize", detectScreen);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", detectScreen);
  });
} catch (err) {
  console.log(err);
}
</script>
<template>
  <div class="about-main">
    <div class="info-card">
      <div class="side-a">
        <img
          src="https://i.postimg.cc/CL1MFr2D/portada-dani.png"
          alt=""
          class="img"
        />
        <div class="info">
          <p class="text-2xl" style="font-size: 20px; font-weight: bolder">
            Hola!
          </p>
          <p
            style="
              font-size: 30px;
              font-weight: bolder;
              text-transform: uppercase;
              margin: -10px 0;
            "
          >
            Soy Daniela
          </p>
          <p>Ingeniera Civil</p>
          <p class="my-6 text-justify">
            Profesional egresada de la <b>Universidad de Pamplona</b>,
            comprometida con la excelencia y la eficiencia en la gestión de
            proyectos de construcción.
          </p>
          <div>
            <router-link :to="{ name: 'contacto' }">
              <ButtonMain name="Contáctame" type="owo" />
            </router-link>

            <a :href="url_cv">
              <ButtonOutline name="Descargar CV" type="owo" />
            </a>
          </div>
        </div>
      </div>

      <div class="side-b">
        <div class="mt-6 mb-3 flex flex-col md:flex-col-reverse">
          <div style="padding: 1rem 0">
            <p
              style="
                font-size: large;
                font-weight: bold;
                text-transform: uppercase;
              "
            >
              Habilidades
            </p>

            <div
              style="
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                width: 100%;
              "
            >
              <div class="skill-item">
                <div class="bar">
                  <div class="child_bar" style="width: 80%"></div>
                </div>
                <p>Análisis de precios unitarios</p>
              </div>
              <div class="skill-item">
                <div class="bar">
                  <div class="child_bar" style="width: 90%"></div>
                </div>
                <p>Diseño de planos tecnicos</p>
              </div>
              <div class="skill-item">
                <div class="bar">
                  <div class="child_bar" style="width: 85%"></div>
                </div>
                <p>Inspección y control de obra</p>
              </div>
              <div class="skill-item">
                <div class="bar">
                  <div class="child_bar" style="width: 95%"></div>
                </div>
                <p>Planificación</p>
              </div>
              <div class="skill-item">
                <div class="bar">
                  <div class="child_bar" style="width: 92%"></div>
                </div>
                <p>Elaboración de presupuesto y cronograma</p>
              </div>
              <div class="skill-item">
                <div class="bar">
                  <div class="child_bar" style="width: 78%"></div>
                </div>
                <p>Manejo de personal</p>
              </div>
            </div>
          </div>
          <div>
            <p class="text-justify">
              Desde siempre me ha apasionado la construcción y la ingeniería
              civil. Hoy pongo mi conocimiento y dedicación al servicio de
              quienes buscan hacer realidad sus proyectos. Cada obra es una
              oportunidad para innovar y dejar huella, por eso trabajo con
              compromiso, calidad y atención al detalle.
            </p>
          </div>
        </div>

        <p class="text-justify">
          Algunas de las herramientas con las que trabajo:
        </p>

        <div class="rounded-md text-xs flex p-4 w-full justify-around" style="">
          <div
            style="
              display: flex;
              justify-content: space-around;
              width: 100%;
              background-color: #111c29;
              padding: 1rem;
              border-radius: 8px;
            "
          >
            <div
              class=""
              style="
                border-radius: 5px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              "
            >
              <img
                style="
                  object-fit: cover;
                  width: 35px;
                  height: auto;
                  padding-bottom: 5px;
                "
                src="./../../public/images/logos/sketchup.png"
                alt=""
              />
              <p>SketchUp</p>
            </div>
            <div
              class=""
              style="
                border-radius: 5px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              "
            >
              <img
                style="
                  object-fit: cover;
                  width: 35px;
                  height: auto;
                  padding-bottom: 5px;
                "
                src="./../../public/images/logos/autocad.png"
                alt=""
              />
              <p>AutoCAD</p>
            </div>
            <div
              class=""
              style="
                border-radius: 5px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              "
            >
              <img
                style="
                  object-fit: cover;
                  width: 35px;
                  height: auto;
                  padding-bottom: 5px;
                "
                src="./../../public/images/logos/revit.webp"
                alt=""
              />
              <p>Revit</p>
            </div>
            <div
              class=""
              style="
                border-radius: 5px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              "
            >
              <img
                style="
                  object-fit: cover;
                  width: 35px;
                  height: auto;
                  padding-bottom: 5px;
                "
                src="./../../public/images/logos/microsoft_project.png"
                alt=""
              />
              <p>Project</p>
            </div>
            <div
              class=""
              style="
                border-radius: 5px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              "
            >
              <img
                style="
                  object-fit: cover;
                  width: 30px;
                  height: auto;
                  padding-bottom: 5px;
                "
                src="./../../public/images/logos/etabs.png"
                alt=""
              />
              <p>ETABS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="acedemics-studies mt-0 md:mt-16">
      <div class="ref">
        <SectionTitle name="Referencias" />
        <div class="ref-container">
          <div class="ref-card">
            <div class="nombre">Diego Ivan Sánchez Tapiero</div>
            <div class="titulo">
              Ingeniero Civil Msc (c). en Ingeniería Ambiental
            </div>
            <div class="ubicacion">Pamplona, Norte de Santander, Colombia</div>
            <div class="telefono">+57 310 6024767</div>
          </div>
          <div class="ref-card">
            <div class="nombre">Edinson Lopez</div>
            <div class="titulo">
              Ingeniero Civil Esp. Ingeniería Estructural
            </div>
            <div class="ubicacion">Sandona, Nariño, Colombia</div>
            <div class="telefono">+57 310 6218354</div>
          </div>
        </div>
      </div>
      <div class="pt-0 md:pt-8">
        <SectionTitle name="Formación Académica" />
        <div>
          <div class="container">
            <div class="d-container" ref="height">
              <div
                class="card"
                v-for="(item, index) in cdata.diplomas"
                :key="index"
              >
                <div class="head">
                  <span class="mdi icon" :class="item.icono"></span>
                  <div class="title">
                    {{ item.titulo }}
                  </div>
                </div>
                <div class="body">
                  <div class="institute">{{ item.institucion }}</div>
                  <div class="place">{{ item.lugar }}</div>
                  <div class="year">{{ item.fecha }}</div>
                </div>
              </div>
            </div>

            <div class="c-container mb-6 md:mb-0">
              <div
                class="card"
                v-for="(item, index) in cdata.cursos"
                :key="index"
              >
                <div class="head">
                  <span class="mdi icon" :class="item.icono"></span>
                  <div class="title">
                    {{ item.titulo }}
                  </div>
                </div>
                <div class="body">
                  <div class="institute">{{ item.institucion }}</div>
                  <div class="place">{{ item.lugar }}</div>
                  <div class="year">{{ item.fecha }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.skill-item {
  width: 100%;
  margin-top: 0.6rem;
  .bar {
    height: 5px;
    width: 80%;
    margin-top: 0.3rem;
    position: relative;
    background-color: #333446;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.2s ease-in-out;

    .child_bar {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background-color: #eab20891;
      object-fit: cover;
      border-radius: 10px;
      transition: all 0.2s ease-in-out;
    }
  }
}
.skill-item:hover {
  cursor: pointer;
  .bar {
  }
  .child_bar {
    background-color: #ffbf00;
  }
}

.about-main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;

  .info-card {
    display: flex;
    flex-direction: column;
    .side-a {
      .img {
        width: 100%;
      }
      .info {
        margin-top: -10rem;
        padding: 0 2rem;
      }
    }
    .side-b {
      padding: 0 2rem;
    }
  }
  .acedemics-studies {
    display: flex;
    flex-direction: column-reverse;
    max-width: 1000px;
    padding: 2rem;
    .ref {
      padding-top: 2rem;
      border: 2px solid #162435;
      border-radius: 8px;
      width: 100%;
      .ref-container {
        display: flex;
        flex-wrap: wrap;
        .ref-card {
          margin: 1rem;
          padding: 0 1rem;
          border-left: 2px solid #333446;
          .nombre {
            font-weight: 700;
          }
          .titulo {
            font-weight: 300;
            font-size: small;
          }
          .ubicacion {
            font-weight: 300;
            font-size: small;
          }

          .telefono {
            font-weight: 300;
            font-size: small;
          }
        }
      }
    }
    .container {
      display: flex;
      flex-direction: column;
      .d-container {
        display: flex;
        flex-direction: column;
        justify-content: start;
        .card {
          padding: 1rem;
          border-radius: 8px;
          max-width: 350px;
          background-color: #162435;
          margin-bottom: 1rem;
          .head {
            display: flex;
            align-items: center;

            .icon {
              font-size: 40px;
              margin-right: 1rem;
            }
            .title {
              font-size: large;
              font-weight: bold;
              line-height: 100%;
              width: 100%;
            }
          }
          .body {
            .institute {
              font-weight: 600;
              font-size: medium;
            }
            .place {
              font-weight: lighter;
              font-size: medium;
            }
            .year {
              font-weight: lighter;
              font-size: medium;
            }
          }
        }
      }
      .c-container {
        display: flex;
        flex-direction: column;
        height: 350px;
        overflow: scroll;
        row-gap: 1rem;

        .card {
          padding: 1rem;
          border-radius: 8px;
          max-width: 350px;
          background-color: #162435;
          .head {
            display: flex;
            align-items: center;

            .icon {
              font-size: 40px;
              margin-right: 1rem;
            }
            .title {
              font-size: medium;
              font-weight: bold;
              line-height: 100%;
              width: 100%;
            }
          }
          .body {
            .institute {
              font-weight: 600;
              font-size: small;
            }
            .place {
              font-weight: lighter;
              font-size: smaller;
            }
            .year {
              font-weight: lighter;
              font-size: smaller;
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: 750px) {
  .about-main {
    padding: 5rem 3rem;
    .info-card {
      display: flex;
      flex-direction: row;
      height: 80vh;

      .side-a {
        max-width: 500px;
        width: 50%;
        border-radius: 8px 0 0 8px;
        border: 2px solid #162435;
        overflow: hidden;
        .img {
          height: 80%;
          object-fit: cover;
        }
        .info {
          margin-top: -10rem;
          padding: 0 2rem;
        }
      }
      .side-b {
        border-radius: 0 0px 0px 0;
        border-right: 2px solid #333446;

        max-width: 500px;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        padding: 0 2rem;
      }
    }

    .acedemics-studies {
      flex-direction: row;
      max-width: 1000px;
      padding: 0;
      .ref {
        padding-top: 4rem;
        border: 2px solid #162435;
        border-radius: 8px;
        width: 100%;
        max-width: 400px;
        .ref-container {
          display: flex;
          flex-wrap: wrap;
          .ref-card {
            margin: 1rem;
            padding: 0 1rem;
            border-left: 2px solid #333446;
            transition: all 0.3s ease-in-out;

            .nombre {
              font-weight: 700;
            }
            .titulo {
              font-weight: 300;
              font-size: small;
            }
            .ubicacion {
              font-weight: 300;
              font-size: small;
            }

            .telefono {
              font-weight: 300;
              font-size: small;
            }
          }

          .ref-card:hover {
            border-left: 2px solid rgb(255, 187, 0);
          }
        }
      }
      .container {
        display: flex;
        flex-direction: row;
        height: 350px;
        .d-container {
          margin: 0 1rem;
          display: block;
          flex-direction: column;
          justify-content: start;
          .card {
            padding: 1rem;
            border-radius: 8px;
            max-width: 350px;
            background-color: #162435;
            margin-bottom: 1rem;
            .head {
              display: flex;
              align-items: center;

              .icon {
                font-size: 40px;
                margin-right: 1rem;
              }
              .title {
                font-size: medium;
                font-weight: bold;
                line-height: 100%;
                width: 100%;
              }
            }
            .body {
              .institute {
                font-weight: 600;
                font-size: small;
              }
              .place {
                font-weight: lighter;
                font-size: smaller;
              }
              .year {
                font-weight: lighter;
                font-size: smaller;
              }
            }
          }
        }
        .c-container {
          display: flex;
          flex-direction: column;
          overflow: scroll;
          margin: 0;
          .card {
            padding: 1rem;
            border-radius: 8px;
            max-width: 350px;
            background-color: #162435;
            .head {
              display: flex;
              align-items: center;

              .icon {
                font-size: 40px;
                margin-right: 1rem;
              }
              .title {
                font-size: medium;
                font-weight: bold;
                line-height: 100%;
                width: 100%;
              }
            }
            .body {
              .institute {
                font-weight: 600;
                font-size: small;
              }
              .place {
                font-weight: lighter;
                font-size: smaller;
              }
              .year {
                font-weight: lighter;
                font-size: smaller;
              }
            }
          }
        }
      }
    }
  }
}

.smooth {
  transition: all 0.8s ease-in-out;
}
</style>
