<template>
  <div>
    Graph Toggles:
    <q-toggle v-model="value" label="income" />
    <q-toggle v-model="value" label="expenses" />
    <q-toggle v-model="value" label="interest vs no interest" />
    <q-toggle v-model="value" label="interest vs no interest" />
    <q-toggle v-model="value" label="superannuation" />
    <q-toggle v-model="value" label="taxes" />
  </div>
</template>

<script>
export default {
  name: 'GraphToggles',
  data () {
    return {
      value: true
    }
  }
}
</script>
