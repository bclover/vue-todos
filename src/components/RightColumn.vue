<template>
  <div class="right-col">
    <v-btn
      :disabled="totalNumTodos !== 8"
      depressed
      class="ml-3"
      color="secondary"
      @click="addTodo"
    >
      Add
    </v-btn>
    <v-btn
      :disabled="totalNumTodos === 0"
      depressed
      color="secondary"
      @click="clearAllTodos"
    >
      Clear All
    </v-btn>
    <v-btn
      :disabled="totalNumTodos > 0"
      depressed
      class="ml-3"
      color="secondary"
      @click="reloadTodos"
    >
      Reload
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'RightColumn',
  components: { },
  computed: {
    ...mapGetters(['loading', 'todos', 'totalNumTodos']),
  },
  data() {
    return {
    };
  },
  methods: {
    async addTodo() {
      const newTodo = {
        id: 9,
        title: 'Add client-side validation.',
        priority: 'Life Changing',
        assigned: 'Bryan Clover',
      };
      await this.$store.dispatch('addTodo', newTodo);
    },
    async clearAllTodos() {
      await this.$store.dispatch('clearAllTodos');
    },
    async reloadTodos() {
      await this.$store.dispatch('getAllTodos');
    },
  },
};
</script>

<style scoped>
.right-col {
  background-color: whitesmoke;
  border-radius: 0.5rem;
  margin: 1rem;
  overflow: hidden;
  padding: 1rem;
  width: 50%;
}

.num-of-posts {
  margin: 0 0 .5rem;
}

.other-posts {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}

</style>
