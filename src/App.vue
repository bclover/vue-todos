<template>
  <v-app id="app">
    <v-container fluid class="ma-0 pa-3 main">

      <v-row class="ma-0 pa-0">
        <v-col class="ma-0 pa-0" cols="12">
          Test
        </v-col>
      </v-row>

      <v-row class="ma-0 pa-0">
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
  height: 96vh;
  overflow-y: hidden;
}
</style>
