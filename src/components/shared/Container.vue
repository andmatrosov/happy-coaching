<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    width: 100%;
    margin: 0 auto;

    @include media-desktop-large{
      max-width: 1280px;
    }
  }
</style>