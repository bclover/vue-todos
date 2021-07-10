<template>
  <div class="post">
    <div class="post--title">"{{ title }}"</div>
    <div>{{ priorityLabel }}{{ priority }}</div>
    <div>{{ assignedToLabel }}{{ assigned }}</div>

    <div class="post--info">
      <span>{{todoIdLabel}}{{ postId }}</span>
    </div>
  </div>
</template>

<script>
import pathOr from 'ramda/src/pathOr';

export default {
  name: 'ToDo',
  props: {
    todoData: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      assignedToLabel: 'Assigned to: ',
      todoIdLabel: 'Task ',
      priorityLabel: 'Priority: ',
    };
  },

  computed: {
    assigned() {
      return pathOr('N/A', ['todoData', 'assigned'], this);
    },

    postId() {
      return pathOr('N/A', ['todoData', 'id'], this);
    },

    priority() {
      return pathOr('N/A', ['todoData', 'priority'], this);
    },

    title() {
      return pathOr('N/A', ['todoData', 'title'], this);
    },
  },

};
</script>

<style scoped>
.post {
  background-color: whitesmoke;
  border-radius: 0.5rem;
  margin: 1rem 0;
  opacity: .75;
  padding: 0.5rem;
}

.post--info {
  color: grey;
  font-size: 0.75rem;
  margin: 1rem 0 0;
  text-align: right;
}

.post--title {
  font-style: italic;
  font-weight: bold;
  margin: 0.5rem 0;
}
</style>
