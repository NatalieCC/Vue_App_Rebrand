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
          <!-- Discover your difference, harness your strengths. -->
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
            <b-button v-b-modal.modal-multi-2 v-on:click="handleSubmit"
              >Comtinue</b-button
            >
          </b-modal>

          <b-modal
            id="modal-multi-2"
            title="What is your E-mail?"
            ok-only
            no-stacking
          >
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
            <b-button v-b-modal.modal-multi-3>Continue</b-button>
          </b-modal>
          <b-modal
            id="modal-multi-3"
            size="sm"
            title="And your number?"
            ok-only
          >
            <b-form-input
              id="number-input"
              v-model="number"
              :state="numberState"
              required
            ></b-form-input>
            <div id="space"></div>
            <b-button v-b-modal.modal-multi-3>Submit</b-button>
          </b-modal>
        </div>
        <!-- <button class="bt" id="show-modal" @click="showHello = true">
          Get Started
        </button> -->
        <!-- <hello v-if="showHello" @close="showHello = false" /> -->
      </v-col>
    </v-row>
    <v-container class="wrap">
      <div class="review-box">
        <v-img :src="require('../assets/a.png')" class="pic" />
        <p class="title">Learning differences assessment</p>
        <p>
          Comprehensive assessment for dyslexia, dyscalculia, and other learning
          differences in reading, math, and writing.
        </p>
        <div class="blah">
          <p>Licensed PhD/PsyD</p>
          <p>psychologist DSM-5 diagnosis</p>
          <p>Report within a week</p>
          <p>Optional giftedness report (+$95)</p>
        </div>
      </div>
      <div class="review-box">
        <v-img :src="require('../assets/b.png')" class="pic" />
        <h2 class="title">Attention differences assessment</h2>
        <p>
          Comprehensive assessment for ADHD. Available as an add-on to a
          specific learning differences assessment.
        </p>
        <div class="blah">
          <p>Same features as a learning differences assessment</p>
          <p>Conducted as a separate sitting</p>
          <p>
            Can be combined with your learning differences report
            retrospectively
          </p>
        </div>
      </div>
      <div class="review-box">
        <v-img :src="require('../assets/c.png')" class="pic" />
        <h2 class="title">Follow-up support</h2>
        <p>
          Ongoing support appointments with your psychologist. Available as an
          assessment add-on.
        </p>
        <ul class="blah">
          <li>50-minute session with your psychologist</li>
          <li>General follow-up appointments</li>
          <li>School IEP and learning plan advocacy</li>
        </ul>
      </div>
    </v-container>
  </v-container>
</template>

<script>
import typical from "vue-typical";
//import Hello from "./Hello";

export default {
  name: "HelloWorld",

  data() {
    return {
      name: "",
      nameState: null,
      submittedNames: [],
      modalDisabled: false,
    };
  },
  // define methods under the `methods` object
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
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
    handleSubmit(bvModalEvt) {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        this.modalDisabled = true;
        bvModalEvt.stopPropagation();
        return;
      }
    },
  },

  components: {
    typical,
    //Hello,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #f8f8f8;
}
#app > span {
  display: flex;
  flex-direction: row !important;
  justify-content: center;
}
.box {
  justify-content: center;
  background-color: f8f8f8;
  width: 30px;
  height: 30px;
  margin: 1rem;
}
#text {
  font-size: 22px;
  text-align: center;
  justify-content: center;
  color: rgb(172, 54, 74);
}

.btn-primary {
  opacity: 0 !important;
}
button.btn.btn-secondary {
  font-size: 23px;
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
.bt:hover {
  text-shadow: 0 0 2em rgba(255, 255, 255, 1);
  color: #ffffff;
  border-color: #ffffff;
}
#space {
  margin-top: 20px;
}
.wrap {
  display: flex;
  flex-direction: row;
  max-height: 592px;
}
.review-box {
  width: 33.33333%;
  max-width: 528px;
  min-height: 504px;
  margin-left: 12px;
  margin-right: 12px;
  padding: 32px;
  background-color: white;
  text-decoration: none;
  box-sizing: border-box;
  width: 332px;
  min-height: 322px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 12px;
  padding: 24px;
  background-color: #fff;
  border-radius: 18px;
  box-shadow: 0px 10px 16px -8px rgb(0 0 0 / 20%);
}
.title {
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  font-weight: 700;
  line-height: 1;
  overflow: hidden;
  margin-bottom: 24px;
  font-weight: 800;
}
.blah {
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: inherit;
  width: 100%;
}
.pic {
  display: block;
  width: 5.313rem;
  margin: 20px 20px 32px;
  min-height: 72px;
  max-height: 72px;
  max-width: 100%;
}
ul.blah {
  list-style-type: square;
}
</style>

