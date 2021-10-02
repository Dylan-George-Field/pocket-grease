<template>
  <q-layout view="hHh lpR lff">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Pocket Grease
        </q-toolbar-title>

        <q-btn color="red" class="q-ml-md">Calculate</q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list padding>
        <q-item-section>
          <q-item-label header class="text-grey-8">
            Wominjeka (Welcome)
          </q-item-label>
          <q-item-label caption class="q-px-md q-pb-md">
            <p>
              Use this tool to model and plan your financial life.
            </p>
            <p>
              It will help you visualise a path to help achieve your goals. Perhaps you
              would like to buy a house or start a family and are unsure if you can afford to.
            </p>
            <p>
              Fill in the form and hit calculate!
            </p>
          </q-item-label>
          </q-item-section>
          <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
          <!-- <graph-toggles /> -->
        <q-item-label header class="text-grey-8 absolute-bottom" caption>
          <p>I acknowledge the traditional owners of the land I stand 🦘</p>
        </q-item-label>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <q-toolbar class="justify-center">
        <div>
        <p>
          2021 - Quasar v{{ $q.version }}<br />
        </p>
        </div>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Made with quasar',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Hosted on github',
    caption: 'github.com/pocket-grease',
    icon: 'code',
    link: 'https://github.com/dylan-george-field/pocket-grease'
  },
  {
    title: 'Feedback',
    caption: 'dylan.george.field@gmail.com',
    icon: 'chat',
    link: 'mailto:dylan.george.field+pocket-gease@gmail.com'
  }

];

import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    const $store = useStore()

    console.log('accessing store')
    console.log($store.state.graph.calculate)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style scoped lang="sass">
footer
  background-color: white
  color: $input-label-color
  font-size: $tooltip-fontsize
</style>
