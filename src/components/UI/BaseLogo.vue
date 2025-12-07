!
<script lang="ts" setup></script>

<template>
  <section>
    <a href="/" class="logo">
      <img src="../../assets/images/logo.svg" alt="">
    </a>
  </section>
</template>

<style scoped lang="scss">
.logo {
  width: 200px;
  position: relative;
  height: 22px;
  display: block;
@media screen and (max-width:1024px){
  width: 170px;
  height: 18px;
margin-right: 20px;
}
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
