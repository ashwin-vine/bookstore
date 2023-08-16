<template>
  <div
    class="page-header align-items-start min-vh-100"
  >
    <span class="mask bg-gradient-dark opacity-6"></span>
    <div class="container my-auto">
      <div class="row">
        <div class="col-lg-4 col-md-8 col-12 mx-auto">
          <div class="card z-index-0 fadeIn3 fadeInBottom">
            <div class="card-body">
              <form
                role="form"
                class="text-start mt-3"
                @submit="onLogin"
              >
                <div class="mb-3">
                  <MaterialInput
                    id="email"
                    type="email"
                    label="Email"
                    v-model="email"
                    name="email"
                  />
                </div>
                <div class="mb-3">
                  <MaterialInput
                    id="password"
                    type="password"
                    v-model="password"
                    label="Password"
                    name="password"
                  />
                </div>
                <div class="text-center">
                  <material-button
                    class="my-4 mb-2"
                    variant="gradient"
                    color="success"
                    fullWidth
                    >Sign in</material-button
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MaterialInput from "@/components/MaterialInput";
import MaterialButton from "@/components/MaterialButton";
import { mapMutations, mapActions } from "vuex";

export default {
  name: "sign-in",
  components: {
    MaterialInput,
    MaterialButton,
  },
  data() {
    return {
      email: null,
      password: null,
    };
  },
  beforeMount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
  },
  beforeUnmount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
  },
  methods: {
    ...mapActions(["loginUser", "logoutUser"]),
    ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),
    onLogin() {
      let data = {
        user: {
          email: this.email,
          password: this.password,
        },
      };
      this.loginUser(data);
      this.resetData();
    },
    resetData() {
      this.signUpEmail = "";
      this.signUpPassword = "";
      this.loginEmail = "";
      this.loginPassword = "";
    },
  },
};
</script>
