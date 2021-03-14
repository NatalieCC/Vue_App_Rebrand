<template>
  <v-app>
    <v-app-bar app color="#FFFFFF">
      <div>
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
      <v-btn target="_blank" text>
        <button
          href="#"
          data-drawer-trigger
          aria-controls="drawer-name"
          aria-expanded="false"
          @click="openClickHandler"
        >
          About Us
          <!--          <v-icon>mdi-open-in-new</v-icon>-->
        </button>
        <child-card :settings="settings"></child-card>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld />
      <About />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
// import Reviews from "./components/Reviews";
import About from "./components/About";
export default {
  name: "Appnew",

  components: {
    HelloWorld,
    About,
  },
  data: () => ({
    settings: {
      speedOpen: 50,
      activeClass: "is-active",
      visibleClass: "is-visible",
      selectorTarget: "[data-drawer-target]",
      selectorTrigger: "[data-drawer-trigger]",
    },
  }),
  methods: {
    // Toggle accessibility
    toggleAccessibility: function (event) {
      if (event.getAttribute("aria-expanded") === "true") {
        event.setAttribute("aria-expanded", false);
      } else {
        event.setAttribute("aria-expanded", true);
      }
    },
    // Open Drawer
    openDrawer(trigger) {
      // Find target
      var target = document.getElementById(
        trigger.getAttribute("aria-controls")
      );
      // Make it active
      target.classList.add(this.settings.activeClass);
      // Make body overflow hidden so it's not scrollable
      document.documentElement.style.overflow = "hidden";
      // Toggle accessibility
      this.toggleAccessibility(trigger);

      // Make it visible
      setTimeout(function () {
        target.classList.add("is-visible");
      }, this.settings.speedOpen);
    },

    // Open Handler
    openClickHandler(event) {
      var open = event.target;
      if (open) {
        this.openDrawer(open);

        // Prevent default link behavior
        event.preventDefault();
      }
    },

    // Keydown Handler, handle Escape button
    keydownHandler(event) {
      if (event.key === "Escape" || event.keyCode === 27) {
        // Find all possible drawers
        var drawers = document.querySelectorAll(this.settings.selectorTarget),
          i;
        // Find active drawers and close them when escape is clicked
        for (i = 0; i < drawers.length; ++i) {
          if (drawers[i].classList.contains(this.settings.activeClass)) {
            this.closeDrawer(drawers[i]);
          }
        }
      }
    },
  },
  // window.addEventListener('clickHandler')
};
</script>