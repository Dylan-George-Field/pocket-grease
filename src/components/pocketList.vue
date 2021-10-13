<template>
  <div>
    Pocket List
  </div>
  <q-list v-for="task in tasks" :key="task.name">
    <q-item clickable>
      {{task.name}}
    </q-item>
  </q-list>
</template>

<script lang="ts">
import Task from 'src/models/task'
import { useStore } from 'vuex'

export default {
  name: 'PocketList',
  setup () {
    const store = useStore()

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const tasks = store.state.graph.tasks as Task[]

    console.log(tasks)

    const setTask = function(task: Task): void {
      void store.dispatch('graph/setTask', task)
    }

    const deleteTask = function(task: Task): void {
      void store.dispatch('graph/deleteTask', task)
    }

    return {
      tasks
    }
  }
}
</script>
