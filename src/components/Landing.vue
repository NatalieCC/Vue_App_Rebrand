<template>
  <v-container>
    <v-img
      :src="require('../assets/group.png')"
      class="my-3"
      contain
      height="150"
    />
    <h1 id="app">
      <sequential-entrance>
        <div class="box" v-for="index in 1" :key="index">P</div>
        <div class="box" v-for="index in 1" :key="'A' + index">O</div>
        <div class="box" v-for="index in 1" :key="'B' + index">L</div>
        <div class="box" v-for="index in 1" :key="'C' + index">Y</div>
        <div class="box" v-for="index in 1" :key="'D' + index">G</div>
        <div class="box" v-for="index in 1" :key="'E' + index">O</div>
        <div class="box" v-for="index in 1" :key="'G' + index">N</div>
      </sequential-entrance>
    </h1>
    <v-row>
      <v-col class="mb-4">
        <!-- <typical
          :steps="['Welcome', 1000, 'Welcome to Polygon', 500]"
          :wrapper="'h1'"
        ></typical> -->
        <typical
          class="typicalWrapper"
          :steps="[
            'Discover your difference',
            1000,
            'harness your strengths',
            500,
            'Discover your difference, harness your strengths.',
            1000,
          ]"
          :loop="Infinity"
          :wrapper="'h1'"
        ></typical>

        <h2 class="subheading font-weight-regular">
          <br />Tele-assessments and support for learning differences.
        </h2>
        <br />
        <div>
          <b-button v-b-modal.modal-multi-1>Get Started</b-button>

          <b-modal
            id="modal-multi-1"
            size="lg"
            title="Hello! Let's get you started with a free consultation."
            ok-only
            no-stacking
            @show="resetModal"
            @hidden="resetModal"
            @ok="handleContinue"
          >
            <p class="my-2">What is your name?</p>
            <form ref="form">
              <b-form-group
                label-for="name-input"
                invalid-feedback="Name is required"
                :state="nameState"
              >
                <b-form-input
                  id="name-input"
                  v-model="name"
                  :state="nameState"
                  required
                ></b-form-input>
              </b-form-group>
            </form>
            <!-- <b-button
              v-b-modal.modal-multi-2
              v-on:click="handleSubmit"
              id="ct-bt"
              >Comtinue</b-button
            > -->
          </b-modal>

          <b-modal
            id="modal-multi-2"
            title="What is your E-mail?"
            ok-only
            no-stacking
            @ok="handleContinue"
          >
            <form ref="form">
              <b-form-group
                label-for="email-input"
                invalid-feedback="Email is required"
                :state="emailState"
              >
                <b-form-input
                  id="email-input"
                  v-model="email"
                  :state="emailState"
                  required
                ></b-form-input>
              </b-form-group>
            </form>
            <!-- <b-button v-b-modal.modal-multi-3>Continue</b-button> -->
          </b-modal>

          <b-modal
            id="modal-prevent-closing"
            size="sm"
            title="And your number?"
            ok-only
            @ok="handleContinue"
          >
            <form ref="form">
              <b-form-group
                label-for="number-input"
                invalid-feedback="Please input your number"
                :state="numberState"
              >
                <b-form-input
                  id="number-input"
                  v-model="number"
                  :state="numberState"
                  required
                ></b-form-input>
              </b-form-group>
            </form>
          </b-modal>
        </div>
        <!-- <button class="bt" id="show-modal" @click="showHello = true">
          Get Started
        </button> -->
        <!-- <hello v-if="showHello" @close="showHello = false" /> -->
        <div class="space"></div>
        <a href="https://www.trustpilot.com/review/hellopolygon.com">
          <p class="badge-link__rating-wrap">
            <span class="badge-link__rating__star">★</span
            ><span class="badge-link__rating__star">★</span
            ><span class="badge-link__rating__star">★</span
            ><span class="badge-link__rating__star">★</span>
            <span class="badge-link__rating__star">★</span>
            <span>Rated 5/5</span>
          </p>
        </a>
      </v-col>
    </v-row>
    <v-container class="wrapper">
      <div class="review-box">
        <v-img :src="require('../assets/a.png')" class="pic" />
        <p class="title">Learning differences assessment</p>

        <div class="blah">
          <div>
            Comprehensive assessment for dyslexia, dyscalculia, and other
            learning differences in reading, math, and writing.
          </div>
          <li>Licensed PhD/PsyD</li>
          <li>psychologist DSM-5 diagnosis</li>
          <li>Report within a week</li>
          <li>Optional giftedness report (+$95)</li>
        </div>
      </div>
      <div class="review-box">
        <v-img :src="require('../assets/b.png')" class="pic" />
        <div class="title">Attention differences assessment</div>

        <div class="blah">
          <div>
            Comprehensive assessment for ADHD. Available as an add-on to a
            specific learning differences assessment.
          </div>
          <li>Same features as a learning differences assessment</li>
          <li>Conducted as a separate sitting</li>
          <li>
            Can be combined with your learning differences report
            retrospectively
          </li>
        </div>
      </div>
      <div class="review-box">
        <v-img :src="require('../assets/c.png')" class="pic" />
        <div class="title">Follow-up support</div>

        <div class="blah">
          <div>
            Ongoing support appointments with your psychologist. Available as an
            assessment add-on.
          </div>
          <li>50-minute session with your psychologist</li>
          <li>General follow-up appointments</li>
          <li>School IEP and learning plan advocacy</li>
        </div>
      </div>
    </v-container>
  </v-container>
</template>

<script>
import typical from "vue-typical";

export default {
  name: "Landing",

  data() {
    return {
      name: "",
      nameState: null,
      email: "",
      emailState: null,
      number: "",
      numberState: null,
    };
  },
  // define methods under the `methods` object
  methods: {
    checkFormValidity() {
      //console.log(this.$refs.form);
      const valid = this.$refs.form.checkValidity();
      if (document.getElementById("name-input")) {
        this.nameState = valid;
      }
      if (document.getElementById("email-input")) {
        this.emailState = valid;
      }
      if (document.getElementById("number-input")) {
        this.numberState = valid;
      }
      //console.log(valid);
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleContinue(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        // this.modalDisabled = true;
        // bvModalEvt.stopPropagation();
        return;
      }
      this.$nextTick(() => {
        if (document.getElementById("name-input")) {
          this.$bvModal.show("modal-multi-2");
        }
        if (document.getElementById("email-input")) {
          this.$bvModal.show("modal-prevent-closing");
        }
        if (document.getElementById("number-input")) {
          this.$bvModal.hide("modal-prevent-closing");
        }
      });
    },
  },

  components: {
    typical,
  },
};
</script>

<style>
@import "./landing.css";
</style>

