<template>
  <div class="right-col">

    <!-- ADD A TO DO -->
    <v-btn
      :disabled="totalNumTodos !== DEFAULT_NUM_OF_TODOS"
      depressed
      class="ml-3"
      color="secondary"
      @click="addTodo"
    >
      {{ btnAdd }}
    </v-btn>

    <!-- CLEAR ALL TO DOS -->
    <v-btn
      :disabled="totalNumTodos === 0"
      depressed
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { DEFAULT_NUM_OF_TODOS } from '../constants/misc';
import { ADD_TODO, CLEAR_ALL_TODOS, GET_ALL_TODOS } from '../store/constants/actions';

export default {
  name: 'RightColumn',
  components: { },
  computed: {
    ...mapGetters(['loading', 'todos', 'totalNumTodos']),
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
  margin: 1rem;
  overflow: hidden;
  padding: 1rem;
}
</style>
