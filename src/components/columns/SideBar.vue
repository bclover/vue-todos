<template>
  <div class="logo-container">
    <h2 class="white--text">
      {{ candidateName }}
    </h2>
    <h3 class="white--text">
      {{ candidateTitle }}
    </h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SideBar',
  data() {
    return {
      title: this.$store.state.title,
    };
  },
  computed: {
    ...mapGetters(['candidateName', 'candidateTitle']),
  },
};
</script>

<style scoped>
.logo-container {
  height: 5rem;
  padding-right: 2rem;
}

.logo {
  height: 5rem;
  width: 18rem;
}

.white--text {
  color: whitesmoke;
}
</style>
