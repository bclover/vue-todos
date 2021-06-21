<template>
  <div v-if="loading" class="preloader">
    <div class="loading-message">
      {{ msg }}
    </div>
    <div class="spinner">
      <img src="../assets/loading.svg" alt="Loading Animation" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Preloader',
  props: {
    msg: '',
  },

  computed: {
    ...mapGetters(['loading']),
  },

};
</script>

<style scoped>
.loading-message {
  color: whitesmoke;
  font-size: 1.25rem;
}

.preloader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.spinner {
  margin-top: 1rem;
}
</style>
