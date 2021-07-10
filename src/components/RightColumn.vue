<template>
  <div class="right-col">
    <v-btn
      :disabled="totalNumTodos === 0"
      depressed
      @click="clearAllTodos"
    >
      Clear All
    </v-btn>
    <v-btn
      :disabled="totalNumTodos > 0"
      depressed
      class="ml-3"
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
  background-color: #214395;
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
