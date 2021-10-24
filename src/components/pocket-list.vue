<template>
  <q-toolbar class="bg-primary text-white shadow-2">
    <q-toolbar-title>Pocket List</q-toolbar-title>
  </q-toolbar>
  <q-list v-if="tasks.length === 0">
    <q-item >
      There are no items yet
    </q-item>
  </q-list>
  <q-list v-for="task in tasks" :key="task.name" bordered>
    <q-item>
      <q-item-section>
        {{task.name}}
      </q-item-section>
      <q-item-section side>
        <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="deleteTask(task)" />
      </q-item-section>
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
    const deleteTask = function(task: Task): void {
      void store.dispatch('graph/deleteTask', task)
    }

    return {
      tasks,
      deleteTask
    }
  }
}
</script>
