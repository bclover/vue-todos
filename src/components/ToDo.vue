<template>
  <v-container class="todo">
    <v-row>
      <v-col cols="12">
        <!-- title -->
        <div class="todo--title">
          To Do #{{ todoId }}: "{{ title }}"
          <v-btn
            icon
            color="red"
            @click="removeTodo()"
          >
            <v-icon>mdi-close-circle</v-icon>
          </v-btn>
        </div>

        <!-- priority -->
        <div>
          {{ priorityLabel }} <span :class="priorityClass">{{ priority }}</span>
        </div>


        <!-- assigned -->
        <div class="todo--info">
          <span>{{assignedToLabel}}{{ assigned }}</span>
        </div>
      </v-col>
    </v-row>

  </v-container>
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
      lifeChanging: 'Life Changing',
      todoIdLabel: 'Task ',
      priorityLabel: 'Priority: ',
    };
  },

  computed: {
    assigned() {
      return pathOr('N/A', ['todoData', 'assigned'], this);
    },

    todoId() {
      return pathOr('N/A', ['todoData', 'id'], this);
    },

    priority() {
      return pathOr('N/A', ['todoData', 'priority'], this);
    },

    priorityClass() {
      return {
        'error--text': this.priority === this.lifeChanging,
        'todo--priority': true,
      };
    },

    title() {
      return pathOr('N/A', ['todoData', 'title'], this);
    },

  },

  methods: {
    async removeTodo() {
      await this.$store.dispatch('removeTodo', this.todoData.id);
    },
  },
};
</script>

<style scoped>
.todo {
  background-color: whitesmoke;
  border-radius: 0.5rem;
  margin: 1rem 0;
  opacity: .75;
  padding: 0.5rem;
}

.todo--info {
  color: grey;
  font-size: 0.8rem;
  margin: 1rem 0 0;
  text-align: right;
}

.todo--priority {
  color: grey;
  font-size: 1rem;
  font-weight: bold;
  margin: 1rem 0 0;
  text-align: right;
}

.todo--title {
  display: flex;
  font-size: 1.25rem;
  font-weight: bold;
  justify-content: space-between;
  margin: 0.5rem 0;
}
</style>
