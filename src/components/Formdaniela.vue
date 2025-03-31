<script setup>
import { ref } from "vue";
import ButtonMain from "@/components/buttons/ButtonMain.vue";

const name = ref("");
const email = ref("");
const responseMessage = ref("");
const waitingResponse = ref(false);
const thereIsResponse = ref(false);

const submitForm = async (event) => {
  const form = event.target;
  const formData = new FormData(form);
  waitingResponse.value = true;

  try {
    const response = await fetch("https://formspree.io/f/mnqekjvk", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      thereIsResponse.value = true;
      responseMessage.value =
        "He recibido tú mensaje💛. Estaré pronto en contacto contigo.";
      form.reset();
      name.value = "";
      email.value = "";
      waitingResponse.value = false;
    } else {
      const data = await response.json();
      if (data.errors) {
        responseMessage.value = data.errors
          .map((error) => error.message)
          .join(", ");
      } else {
        responseMessage.value =
          "Ocurrió un error al enviar el formulario. Por favor, intenta nuevamente.";
      }
    }
  } catch (error) {
    responseMessage.value =
      "Ocurrió un error al enviar el formulario. Por favor, intenta nuevamente.";
  }
};
</script>

<template>
  <div>
    <form class="form w-full max-w-lg" id="myForm" @submit.prevent="submitForm">
      <div class="flex flex-col mb-2">
        <label for="Nombre" class="form-label">Nombre</label>
        <input
          type="text"
          class="form-control smoth input-form h-10 rounded-md p-4"
          id="Nombre"
          name="Nombre"
          required
        />
      </div>
      <div class="flex flex-col mb-2">
        <label for="Correo" class="form-label">Correo</label>
        <input
          type="email"
          id="Correo"
          name="Correo"
          class="form-control smoth input-form h-10 rounded-md p-4"
          required
        />
      </div>
      <div class="flex flex-col mb-2">
        <label for="Celular" class="form-label">Celular</label>
        <input
          type="number"
          class="form-control smoth input-form h-10 rounded-md p-4"
          id="Celular"
          name="Celular"
          required
        />
      </div>
      <div class="flex flex-col mb-2">
        <label for="Mensaje" class="form-label">Mensaje</label>
        <textarea
          class="form-control smoth input-form h-15 rounded-md p-4"
          id="Mensaje"
          name="Mensaje"
          required
          rows="3"
        ></textarea>
      </div>
      <div class="button-container mt-8">
        <ButtonMain name="Enviar" :disable="waitingResponse" type="submit" />
        <div v-if="thereIsResponse" id="responseMessage">
          <!-- {{ responseMessage }} -->
          {{ "He recibido tú mensaje💛. Estaré pronto en contacto contigo." }}
        </div>
      </div>

      <!--
        <button type="submit" class="btn btn-warning">Enviar</button>
        -->
    </form>
  </div>
</template>

<style lang="scss">
.form {
  .input-form {
    background-color: #162435;
    color: white;
    outline: 3px solid #162435;
  }
  .input-form:focus {
    outline: 3px solid #2e4a6b;
  }
}

.button-container {
  display: flex;
  gap: 30px;
  align-items: start;
}

.smoth {
  transition: all ease 0.3s;
}

/* Para ocultar las flechas en Chrome, Safari, Edge y Opera */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Para ocultar las flechas en Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
