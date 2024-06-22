<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.container {
  --padding-x: 15px;
  width: 100%;
  margin: 0 auto;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);

  @include media-desktop {
    max-width: calc(1024px + (var(--padding-x) * 2)); // 1024px;
  }

  @include media-desktop-large {
    max-width: calc(1280px + (var(--padding-x) * 2)); // 1280px;
  }
}
</style>