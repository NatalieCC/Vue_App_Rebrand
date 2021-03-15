<template>
  <v-app>
    <v-app-bar app color="#FFFFFF">
      <v-spacer></v-spacer>
      <button
        href="#"
        data-drawer-trigger
        aria-controls="drawer-name"
        aria-expanded="false"
        @click="openClickHandler"
        class="about"
      >
        About Us
        <!--          <v-icon>mdi-open-in-new</v-icon>-->
      </button>
      <!-- <child-card :settings="settings"></child-card> -->
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
  name: "App",

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

<style>
.about {
  font-size: 20px;
  background-color: coral;
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
}
</style>