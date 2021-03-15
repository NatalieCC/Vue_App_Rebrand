<template>
  <div v-fi="settings">
    <section class="drawer" id="drawer-name" data-drawer-target>
      <div class="drawer__overlay" data-drawer-close tabindex="-1"></div>
      <div class="drawer__wrapper">
        <div class="drawer__header">
          <img src="../assets/pLogo.png" />
          <button
            class="drawer__close"
            data-drawer-close
            aria-label="Close Drawer"
            @click="closeClickHandler"
          ></button>
        </div>
        <div class="drawer__content">
          <h3>Who's it for</h3>
          <p>
            An assessment with a Polygon psychologist is appropriate for anyone
            age 8 or older.
          </p>
          <p>
            As soon as you suspect a learning or attention difference, you
            should consider an assessment. Interventions are most successful
            when learning differences are diagnosed early in life. Still, an
            evaluation at any age can be an important step toward receiving
            proper support.
          </p>
          <div style="padding: 50px 0"></div>
          <h3>How it works</h3>
          <p>Four simple steps to get the answers you need</p>
          <p>1. Consultation and intake</p>
          <p>2. Tele-assessments</p>
          <p>2. Report within a week</p>
          <p>2. Follow-up Support</p>
          <div style="padding: 50px 0"></div>
          <h3>What our custoemrs are saying</h3>
          <!-- <div style="padding: 100px 0"></div> -->
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut
            exercitationem laborum vero tenetur officiis facilis eveniet sunt
            quo voluptatibus sit reiciendis, iusto quia et quidem? Dolores dolor
            et necessitatibus.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "About",
  data: () => ({
    settings: {
      speedClose: 350,
      activeClass: "is-active",
      visibleClass: "is-visible",
      selectorTarget: "[data-drawer-target]",
      selectorTrigger: "[data-drawer-trigger]",
      selectorClose: "[data-drawer-close]",
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
    // Close Drawer
    closeDrawer(event) {
      // Find target
      var closestParent = event.closest(this.settings.selectorTarget),
        childrenTrigger = document.querySelector(
          '[aria-controls="' + closestParent.id + '"'
        );
      // Make it not visible
      closestParent.classList.remove(this.settings.visibleClass);
      // Remove body overflow hidden
      document.documentElement.style.overflow = "";
      // Toggle accessibility
      this.toggleAccessibility(childrenTrigger);
      // Make it not active
      setTimeout(function () {
        closestParent.classList.remove("is-active");
      }, this.settings.speedClose);
    },
    // Close Handler
    closeClickHandler(event) {
      var close = event.target;
      if (close) {
        this.closeDrawer(close);
        // Prevent default link behavior
        event.preventDefault();
      }
    },
  },
};
</script>

<style>
@import "./about.css";
</style>
