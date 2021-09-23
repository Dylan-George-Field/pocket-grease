<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Pocket Grease
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
        <q-btn color="red" class="q-ml-md" @click="calculate()">Calculate</q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list padding>
        <q-item-section>
          <q-item-label header class="text-grey-8">
            Wominjeka (Welcome)
          </q-item-label>
          <q-item-label caption class="q-px-md q-pb-md">
            <p>
              Use this tool to model and plan your financial future.
            </p>
            <p>
              The graph will help visualise the path you're on and how/if
               you can meet your financial goals.
            </p>
            <p>
              Find out if you can afford a house, travel the world and retire comfortably!
            </p>
          </q-item-label>
          </q-item-section>
          <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
          <graph-toggles />
        <q-item-label header class="text-grey-8 absolute-bottom" caption>
          <p>I acknowledge the traditional owners of the land I stand 🦘</p>
        </q-item-label>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
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
]

import { Vue, Component } from 'vue-property-decorator'
import GraphToggles from 'src/components/graphToggles.vue'

@Component({
  components: { EssentialLink, GraphToggles }
})
export default class MainLayout extends Vue {
  leftDrawerOpen = false;
  essentialLinks = linksData;

  private calculate () {
    alert('calculate')
  }
}
</script>
