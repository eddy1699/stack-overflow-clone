<template>
  <div class="about">
    <h1>Realizar una pregunta</h1>
    <div v-if="!response">


      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Título</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" v-model="title">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Detalle</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="detail"></textarea>
      </div>
      <div class="col-auto">
        <button type="button" class="btn btn-primary mb-3" @click="registerQuestion">Registrar</button>
      </div>
    </div>
    <p v-else>
      {{ message }}
    </p>
  </div>
</template>

<script>
import dataApi from "@/api/api";
export default {
  data() {
    return {
      title: '',
      detail: '',
      response: null,
    }

  },

  methods: {
    registerQuestion() {
      var formdata = new FormData();
      formdata.append("title", this.title);
      formdata.append("detail", this.detail);
      formdata.append("user", 1);
      formdata.append("date", new Date().toISOString().slice(0, 10));

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };

      fetch(`${dataApi}/createquestion.php`, requestOptions)
        .then((response) => {
          response.text();
          this.response = true;
          this.message = 'Pregunta registrada!'
        })
        .then(result => console.log(result))
        .catch((error) => {
          console.log('error', error);
          this.response = true;
          this.message = 'Hubo problemas al registrar la pregunta'
        });
    }
  }
}
</script>

<style>

</style>