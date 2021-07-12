<template>
  <v-container>

    <v-row class="ma-5 pa-3 right-col" no-gutters>
      <v-col class="ma-0 pa-0" cols="12">
      <!-- ADD A TO DO -->
      <v-btn
        :disabled="todoExists"
        depressed
        color="secondary"
        @click="addTodo"
      >
        {{ btnAdd }}
      </v-btn>

      <!-- CLEAR ALL TO DOS -->
      <v-btn
        :disabled="totalNumTodos === 0"
        depressed
        class="ml-3"
        color="secondary"
        @click="clearAllTodos"
      >
        {{ btnClear }}
      </v-btn>

      <!-- RELOAD ALL TO DOS -->
      <v-btn
        :disabled="totalNumTodos > 0"
        depressed
        class="ml-3"
        color="secondary"
        @click="reloadTodos"
      >
        {{ btnReload }}
      </v-btn>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import find from 'ramda/src/find';
import propEq from 'ramda/src/propEq';
import { mapGetters } from 'vuex';
import { DEFAULT_NUM_OF_TODOS } from '../constants/misc';
import { ADD_TODO, CLEAR_ALL_TODOS, GET_ALL_TODOS } from '../store/constants/actions';

export default {
  name: 'RightColumn',
  components: { },
  computed: {
    ...mapGetters(['loading', 'todos', 'totalNumTodos']),
    todoExists() {
      return find(propEq('id', 11), this.todos);
    },
  },
  data() {
    return {
      DEFAULT_NUM_OF_TODOS,
      btnAdd: 'Add',
      btnClear: 'Clear All',
      btnReload: 'Reload',
    };
  },
  methods: {

    // ADD A TO DO
    async addTodo() {
      const newTodo = {
        id: 11,
        title: 'Resolve CORS issues with server team.',
        priority: 'Life Changing',
        assigned: 'Bryan Clover',
      };
      await this.$store.dispatch(ADD_TODO, newTodo);
    },

    // REMOVE ALL
    async clearAllTodos() {
      await this.$store.dispatch(CLEAR_ALL_TODOS);
    },

    // RELOAD
    async reloadTodos() {
      await this.$store.dispatch(GET_ALL_TODOS);
    },
  },
};
</script>

<style scoped type="scss">
.right-col {
  background-color: whitesmoke;
  border-radius: 0.5rem;
  min-height: 96vh !important;
}
</style>
