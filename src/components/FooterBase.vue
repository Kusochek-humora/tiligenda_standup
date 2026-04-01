<template>
  <footer class="footer">
    <div class="container footer__container">
      <p>
        &copy; {{ new Date().getFullYear() }} Тілеген Еркінбеков. Keep laughing!
      </p>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  padding: 15px 0;
  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
