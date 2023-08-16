<template>
  <div class="bg-white">
    <main class="mt-0 main-content">
      <section>
        <div class="page-header min-vh-100">
          <div class="container">
            <div class="row">
              <div
                class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto "
              >
                <div class="card card-plain">
                  <div class="pb-0 card-header bg-transparent mb-4">
                    <h4 class="font-weight-bolder text-danger"><i class="material-icons">warning</i> 404 Page not found</h4>
                    <p class="mb-0 text-danger">
                      Please contact admin for help or go back to home page
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
const body = document.getElementsByTagName("body")[0];
import { mapMutations } from "vuex";

export default {
  name: "ErrorPage",
  beforeMount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
    body.classList.add("bg-gray-100");
  },
  methods: {
    ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),
  },
};
</script>
