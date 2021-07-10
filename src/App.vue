<template>
  <v-app>
  <div id="app">
    <div class="flex-container">
<!--      <SideBar />-->
      <ListOfTodos />
      <RightColumn />
    </div>
  </div>
  </v-app>
</template>

<script>

import ListOfTodos from './components/ListOfTodos';
import RightColumn from './components/RightColumn';
import SideBar from './components/SideBar';

export default {
  name: 'App',
  components: { ListOfTodos, RightColumn, SideBar },
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
