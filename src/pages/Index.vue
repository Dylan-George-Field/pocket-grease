<template>
  <q-page>
      <graph
        title="Example component"
        active
        :todos="todos"
        :meta="meta"
      ></graph>
      <div class="q-pa-lg">
        <earnings></earnings>
      </div>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models'
import graph from 'components/graph.vue'
import earnings from 'components/earnings.vue'
import { Vue, Component } from 'vue-property-decorator'
import Earnings from 'src/components/earnings.vue';

@Component({
  components: { graph, Earnings }
})
export default class PageIndex extends Vue {
  todos: Todo[] = [
    {
      id: 1,
      content: 'ct1'
    },
    {
      id: 2,
      content: 'ct2'
    },
    {
      id: 3,
      content: 'ct3'
    },
    {
      id: 4,
      content: 'ct4'
    },
    {
      id: 5,
      content: 'ct5'
    }
  ];

  meta: Meta = {
    totalCount: 1200
  };
}
</script>
