<template>
    <br />
    <h1>
        {{ answersArray[0].title }}

    </h1>
    <h3> {{ answersArray[0].detail }}</h3>
    <button @click="showDetailForm = !showDetailForm" type="button" class="btn btn-info mb-4 mt-3">
        Agregar nueva respuesta
    </button>
    <div class="mb-3" v-if="showDetailForm">
        <label for="exampleFormControlTextarea1" class="form-label">Ingrese detalle</label>
        <textarea class="form-control mb-2" id="exampleFormControlTextarea1" rows="3" v-model="responseDetail"></textarea>
        <button @click="registerAnswer" type="button" class="btn btn-info">
            Registrar respuesta
        </button>
    </div>
    <br />
    <br />
    <div v-if="answersArray[0].answer !=null">
         <div class="card mb-4" v-for="answer in answersArray" :key="answer.id">
        <div class="card-header">Respuesta {{ answer.date }}</div>
        <div class="card-body">
            <blockquote class="blockquote mb-0">
                <p>{{ answer.answer }}</p>
            </blockquote>
        </div>
    </div>
    </div>
    <p v-else>Aun no hay respuestas!</p>

</template>

<script>
import dataApi from "@/api/api";
import axios from "axios";
export default {
    data() {
        return {
            answersArray: '',
            showDetailForm: false,
            responseDetail:'',
        };
    },
    props: {
        id: {
            type: Number,
            required: true,
        },
    },
    created() {
        this.getAnswers();
    },

    methods: {
        async getAnswers() {
            await axios
                .get(`${dataApi}/getanswer.php?id=${this.id}`)
                .then((response) => {
                    this.answersArray = response.data})


        },
        registerAnswer() {
            var formdata = new FormData();
            formdata.append("answer",this.responseDetail);
            formdata.append("correctAnswer", "1");
            formdata.append("user", "1");
            formdata.append("questionId", this.id);
            formdata.append("date", new Date().toISOString().slice(0, 10));

            var requestOptions = {
                method: "POST",
                body: formdata,
                redirect: "follow",
            };

            fetch(`${dataApi}/createanswer.php`, requestOptions)
                .then((response) => response.text())
                .then((result) => console.log(result))
                .catch((error) => console.log("error", error));

                this.getAnswers();
        },
    },
};
</script>

<style>

</style>
