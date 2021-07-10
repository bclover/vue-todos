<template>
  <div class="logo-container">
    <h2 class="blue--text">
      {{ candidateName }}
    </h2>
    <h3 class="blue--text">
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

.blue--text {
  color: #214395;
}
</style>
