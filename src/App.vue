<template>
  <v-app id="app">
    <v-container fluid class="ma-3 pa-0 main">

      <v-row no-gutters class="ma-0 pa-0" justify="center">
        <v-col class="ma-0 pa-0" cols="6">
          <span class="text-h3 primary--text">
            {{ title }}
          </span>
        </v-col>
      </v-row>

      <v-row class="ma-0 pa-0 mb-5 bottom-container" no-gutters>
        <v-col class="ma-0 pa-0" cols="6">
          <ListOfTodos />
        </v-col>
        <v-col class="ma-0 pa-0" cols="6">
          <RightColumn />
        </v-col>
      </v-row>

    </v-container>
  </v-app>
</template>

<script>

import ListOfTodos from './components/ListOfTodos';
import RightColumn from './components/RightColumn';
import { GET_ALL_TODOS } from './store/constants/actions';

export default {
  name: 'App',
  components: { ListOfTodos, RightColumn },
  data() {
    return {
      title: 'Welcome to the Frontend Fun Exercise',
    };
  },

  async created() {
    await this.$store.dispatch(GET_ALL_TODOS);
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
.main {
  height: 97vh;
  overflow-y: hidden;
}

.bottom-container {
  max-height: 80vh !important;
}
</style>
