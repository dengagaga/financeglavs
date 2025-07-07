<template>
  <nav class="nav">
    <div class="nav_links">
      <router-link class="nav_link" to="/glav"
        ><img class="nav_link-img" src="@/assets/img/home.svg" alt=""
      /></router-link>
      <router-link class="nav_link" to="/"
        ><img class="nav_link-img" src="@/assets/img/analysis.svg" alt=""
      /></router-link>
    </div>

    <div class="nav_links">
      <router-link class="nav_link" to="/setting"
        ><img class="nav_link-img" src="@/assets/img/setting.svg" alt=""
      /></router-link>
      <router-link class="nav_link" to="/"
        ><img class="nav_link-img" src="@/assets/img/profile.svg" alt=""
      /></router-link>
    </div>
  </nav>
</template>
<script setup></script>
<style>
.nav {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  border-radius: 40px 40px 0 0;
  --back-nav: #dff7e2;
  background-color: var(--back-nav);
  display: flex;
  justify-content: space-between;
  padding: 30px 20px;
}
.nav::after {
  content: '';
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background-color: var(--back-green);
  z-index: 2;
  height: 90px;
  width: 90px;
}
.nav_links {
  display: flex;
  gap: 50px;
}
.nav_link {
}
.nav_link-img {
  width: 30px;
}
</style>
