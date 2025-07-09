<template>
  <nav class="nav">
    <div class="nav_links">
      <router-link class="nav_link" :active-class="'nav--active'" to="/glav"
        ><img class="nav_link-img" src="@/assets/img/home.svg" alt=""
      /></router-link>
      <router-link class="nav_link" to="/"
        ><img class="nav_link-img" src="@/assets/img/analysis.svg" alt=""
      /></router-link>
    </div>
     <button class="nav_link-abs"
        ><img class="nav_link-img" src="@/assets/img/plus.svg" alt=""
      /></button>
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
  /* overflow: hidden; */
  border-radius: 40px 40px 0 0;
  --back-nav: #dff7e2;
  background-color: var(--back-nav);
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
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
  height: 85px;
  width: 85px;
}
.nav_link-abs {
  position: absolute;
  top: -45px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background-color: var(--main-green);
  z-index: 3;
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav_link-abs img {
  width: 40px;
}
.nav_links {
  display: flex;
  gap: 40px;
}
.nav_link {
 
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.nav--active {
   background-color: var(--main-green);
}
.nav_link-img {
  width: 30px;
}
</style>
