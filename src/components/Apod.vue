<template>
  <div class="bg-dark">
    <div class="row p-5 img-fluid justify-content-center bg-dark">
      <img
        class="col-12 p-3 rounded img-fluid border border-light"
        style=""
        :src="apod.img"
        alt="broken image"
      />
      <p>{{ apod.author }} | {{ apod.date }}</p>
      <p class="col-12">
        {{ apod.desc }}
      </p>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
export default {
  setup() {
    return {
      apod: computed(() => AppState.apod),
    };
  },
};
</script>

<style>
</style>