<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary px-3">
    <form @submit.prevent="searchByDate">
      <input v-model="date" type="date" name="date" max="" />
      <button class="rounded">GO!</button>
    </form>

    <b class="p-2 col-6 text-end fs-1">ASTRONOMY DAILY 🔭</b>
  </nav>
</template>

<script>
import { computed, ref } from "vue";
import { apodsService } from "../services/ApodsService";
export default {
  setup() {
    const date = ref("");
    return {
      date,
      searchByDate() {
        apodsService.searchByDate(date.value);
      },
    };
  },
};
</script>

<style scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link {
  text-transform: uppercase;
}
.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
