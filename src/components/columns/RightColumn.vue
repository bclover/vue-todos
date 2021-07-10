<template>
  <div class="right-col">
    <Preloader v-if="loading" :msg="loadingMessage" />

    <div v-if="!loading" class="num-of-posts">
      {{ todosLabel }} {{ totalOtherPosts }}
    </div>

    <div v-if="!loading" class="other-posts">
      <Post v-for="post in otherPosts" :key="post.id" :post-data="post" />
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Post from '../../components/posts/Post';
import Preloader from '../Preloader';

export default {
  name: 'RightColumn',
  components: { Post, Preloader },
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
  background-color: #658193;
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
