<template>
  <div class="right-col">
    <Preloader v-if="loading" :msg="loadingMessage" />

    <div v-if="!loading" class="num-of-posts">
      {{ todosLabel }} {{ totalOtherPosts }}
    </div>

    <div v-if="!loading" class="other-posts">
      <ToDo v-for="todo in otherPosts" :key="todo.id" :todo-data="todo" />
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Preloader from '../Preloader';
import ToDo from '../posts/ToDo';

export default {
  name: 'RightColumn',
  components: { Preloader, ToDo },
  computed: {
    ...mapGetters(['loading', 'otherPosts', 'totalOtherPosts']),
  },
  data() {
    return {
      loadingMessage: 'Loading todos...',
      todosLabel: 'Total Number of "To Dos":',
    };
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
