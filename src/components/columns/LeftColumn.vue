<template>
  <div class="left-col">

    <!-- Loading Animation -->
    <Preloader v-if="loading" :msg="loadingMessage" />

    <!-- Summary Info -->
    <div v-if="!loading" class="num-of-posts">
      <div>{{ currentUserPostsLabel}} {{ totalUserPosts }}</div>
      <div >{{ currentUserIdLabel }} {{ currentUserId}}</div>
    </div>

    <!-- List of Posts -->
    <div v-if="!loading"  class="user-posts">
      <Post v-for="post in userPosts" :key="post.id" :post-data="post" />
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Post from '../../components/posts/Post';
import Preloader from '../Preloader';

export default {
  name: 'LeftColumn',
  components: { Preloader, Post },
  computed: {
    ...mapGetters(['currentUserId', 'loading', 'totalUserPosts', 'userPosts']),
  },
  data() {
    return {
      currentUserPostsLabel: 'User\'s Posts:',
      currentUserIdLabel: 'User Id:',
      loadingMessage: 'Loading the user\'s posts...',
    };
  },

};
</script>

<style scoped>
.left-col {
  background-color: #b06227;
  border-radius: 0.5rem;
  margin: 1rem;
  overflow: hidden;
  padding: 1rem;
  width: 50%;
}

.num-of-posts {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 .5rem;
  width: 100%;
}

.user-posts {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
