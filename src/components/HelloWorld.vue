<template>
  <div class="hello">
    <br />
    <form class="d-flex" role="search">
      <input class="form-control me-4" type="search" placeholder="Buscar preguntas" aria-label="Search"
        v-model="questionSearch" />
      <button class="btn btn-success" @click="searchQuestion" type="button">
        Buscar
      </button>
    </form>
    <br />

    <h1>Preguntas</h1>
    <div class="list-group" v-if="questionsArray">
      <router-link v-for="question in questionsArray" :key="question.id"
        :to="{ name: 'answer-id', params: { id: question.id } }" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ question.title }}</h5>
          <small class="text-muted">{{ question.date }}</small>
        </div>
        <p class="mb-1"></p>
        <small class="text-muted">{{ question.alias }}</small>
      </router-link>
    </div>
  </div>
</template>

<script>
import dataApi from "@/api/api";
import axios from "axios";
import AnswerView from "@/views/AnswerView";
export default {
  name: "HelloWorld",
  components: {
    AnswerView,
  },
  props: {},
  data() {
    return {
      questionsArray: [],
      questionSearch: "",
    };
  },

  created() {
    this.getQuestions();
  },

  methods: {
    getQuestions() {
      axios
        .get(`${dataApi}/getquestions.php`)
        .then((r) => {
          if (r.data) {
            this.questionsArray = r.data;
          }
        })
        .catch((e) => {
          console.log("erro", e);
        });
    },
    async searchQuestion() {
      try {
        const data = await fetch(
          `${dataApi}/search.php?sentence=${this.questionSearch}`
        ).then((r) => r.json());

        this.questionsArray = data;
      } catch (error) {
        console.log(error);
      }
    },

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
