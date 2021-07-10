<template>
  <div id="app">
    <div class="flex-container">
<!--      <SideBar />-->
<!--      <LeftColumn />-->
      <RightColumn />
    </div>
  </div>
</template>

<script>

import LeftColumn from './components/columns/LeftColumn';
import RightColumn from './components/columns/RightColumn';
import SideBar from './components/columns/SideBar';

export default {
  name: 'App',
  components: { LeftColumn, RightColumn, SideBar },
  data() {
    return {
      todosUrl: [],
      currentUserId: 1,
      currentUserPosts: [],
      loading: true,
      otherPosts: [],
      rawData: [],
      totalNumOfPosts: null,
    };
  },

  async created() {
    await this.$store.dispatch('getAllTodos');
  },
};
</script>

<style>

html {}
body {
  background-color: #fafafa;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  height: 100vh;
  overflow-y: hidden;
}
.flex-container {
  display: flex;
  flex-direction: row;
  height: 96vh;
  margin: 1rem;
}
</style>
