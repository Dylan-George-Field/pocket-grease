<template>
  <div>
    <q-item>
      Toggles
    </q-item>
    <q-item>
        <q-toggle v-model="value" label="income" />
    </q-item>
    <q-item>
      <q-toggle v-model="value" label="expenses" />
    </q-item>
    <q-item>
      <q-toggle v-model="value" label="interest vs no interest" />
    </q-item>
    <q-item>
      <q-toggle v-model="value" label="interest vs no interest" />
    </q-item>
    <q-item>
      <q-toggle v-model="value" label="superannuation" />
    </q-item>
    <q-item>
      <q-toggle v-model="value" label="taxes" />
    </q-item>
  </q-item>
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
