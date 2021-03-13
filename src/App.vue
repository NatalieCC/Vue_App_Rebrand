<template>
  <v-app>
    <v-app-bar app color="#FFFFFF">
      <div>
        <!-- <v-img
          alt="Polygon Logo"
          class="shrink mr-2"
          contain
          src="https://hellopolygon.com/img/logo.abde79e7.svg"
          transition="scale-transition"
          width="100"
        /> -->
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn target="_blank" text @click="showMenu">
        <span class="mr-2">Services</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld />
      <!-- <Menu /> -->
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
//import Menu from "./components/Menu";
export default {
  name: "App",

  components: {
    HelloWorld,
    //Menu,
  },

  data: () => ({
    showMenu: false,
  }),
  methods: {
    showMenu() {
      //console.log(88);
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
