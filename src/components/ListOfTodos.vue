<template>
  <v-container class="ma-0 pa-0">

    <v-row class="ma-0 pa-0 num-of-todos">
      <v-col class="secondary--text ma-0 pa-0 pl-3" cols="6">
        {{ listLabel }}
      </v-col>
      <v-col class="secondary--text ma-0 pa-0 pr-3 text-right" cols="6">
        {{countLabel }} {{ totalNumTodos }}
      </v-col>
    </v-row>

    <v-row class="ma-0 pb-5 px-3 todos-container">
      <v-col v-if="loading"  cols="12">
        <Preloader :msg="loadingMessage" />
      </v-col>

      <v-col v-if="!loading" class="ma-0 pa-0 pb-3" cols="12">
        <ToDo v-for="todo in todos" :key="todo.id" :todo-data="todo" />
      </v-col>

      <v-col
        v-if="todos.length === 0"
        class="ma-0 pa-0 pb-3 white--text"
        cols="12"
      >
        <div v-if="!loading" class="text-h5 text-center">
          {{ noTasks }}<br>
          {{ reload }}
        </div>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import Preloader from './Preloader';
import ToDo from './ToDo';

export default {
  name: 'ListOfTodos',
  components: { Preloader, ToDo },
  computed: {
    ...mapGetters(['loading', 'todos', 'totalNumTodos']),
  },
  data() {
    return {
      countLabel: 'Total: ',
      loadingMessage: 'Loading To Dos...',
      listLabel: 'A List of Engineering Tasks:',
      noTasks: 'No tasks exist....',
      reload: 'Click the "RELOAD" button to try loading some!',
    };
  },
};
</script>

<style scoped>

.num-of-todos {
  font-weight: bold;
  font-size: 1.25rem;
}

.todos-container {
  background-color: #214395;

  border-radius: 0.5rem;
  height: 92vh !important;
  overflow-y: scroll;
}

</style>
