<template>
  <v-container>

    <v-row class="ma-5 pa-3 right-col flex-column" no-gutters>
      <v-col class="ma-0 mb-5 pa-0" cols="12">

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
      </v-col>
      <v-col v-show="!todoExists" class="pt-3" cols="12">
        <div>New Task to Add:</div>
        <div class="pa-3 new-todo">
          <span class="todo--title">
            To Do #{{newTodo.id}}: "{{ newTodo.title }}"
          </span>
          Priority:
          <span class="error--text">{{ newTodo.priority }}</span><br>
        </div>
        <div>
          <!-- ADD A TO DO -->
          <v-btn
            :disabled="todoExists"
            depressed
            class="mt-3"
            color="secondary"
            @click="addTodo"
          >
            {{ btnAdd }}
          </v-btn>
        </div>
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
      newTodo: {
        id: 11,
        title: 'Resolve CORS issues with server team.',
        priority: 'Life Changing',
        assigned: 'Bryan Clover',
      },
    };
  },
  methods: {

    // ADD A TO DO
    async addTodo() {
      await this.$store.dispatch(ADD_TODO, this.newTodo);
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
.new-todo {
  background-color: #c0c9dc;
  border: 0.125rem solid #214395;
  border-radius: 0.5rem;
  opacity: .75;
}
.todo--title {
  display: flex;
  font-size: 1.25rem;
  font-weight: bold;
  justify-content: space-between;
}
</style>
