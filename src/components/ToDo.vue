<template>
  <v-container class="mx-0 my-4 pa-0 todo">
    <v-row class="ma-0 pa-2">

      <v-col class="ma-0 pa-0 pr-0" cols="12">

        <!-- TITLE OF TO DO -->
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

        <!-- PRIORITY -->
        <div>
          {{ priorityLabel }} <span :class="priorityClass">{{ priority }}</span>
        </div>


        <!-- ASSIGNED TO -->
        <div class="todo--info">
          <span>{{assignedToLabel}}{{ assigned }}</span>
        </div>

      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import pathOr from 'ramda/src/pathOr';
import propOr from 'ramda/src/propOr';
import { REMOVE_TODO } from '../store/constants/actions';

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
      const todoToRemove = propOr(null, 'id', this.todoData);
      if (todoToRemove) {
        await this.$store.dispatch(REMOVE_TODO, this.todoData.id);
      }
    },
  },
};
</script>

<style scoped>
.todo {
  background-color: whitesmoke;
  border-radius: 0.5rem;
  opacity: .75;
}

.todo--info {
  color: grey;
  font-size: 0.8rem;
  text-align: right;
}

.todo--priority {
  color: grey;
  font-size: 1rem;
  font-weight: bold;
  text-align: right;
}

.todo--title {
  display: flex;
  font-size: 1.25rem;
  font-weight: bold;
  justify-content: space-between;
}
</style>
