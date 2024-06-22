<template>
  <header class="header">
    <UiContainer class="header__row">
      <UiLogo />
      <div class="header__menu">
        <nav class="header__nav">
          <ul class="menu__list">
            <li class="menu__item" v-for="item in menuHeaderItems" :key="item.title">
              <RouterLink :to="item.path" class="menu__link">{{ item.title }}</RouterLink>
            </li>
          </ul>
          <UiButton type="button">Get your free guide now</UiButton>
        </nav>
      </div>
    </UiContainer>
  </header>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import UiContainer from '@/components/shared/UiContainer.vue';
import UiLogo from '@/components/shared/UiLogo.vue';
import UiButton from '@/components/shared/UiButton.vue';
import { useMenuStore } from '@/stores/menuStore';
const menuStore = useMenuStore();

const { menuItems } = menuStore;

const menuHeaderItems = computed(() => {
  return menuItems.slice(0, 4)
})
</script>

<style lang="scss" scoped>
.header {
  background-color: var(--color-white);

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 9px;
    padding-bottom: 9px;
  }

  &__nav {
    display: flex;
    aice-items: center;
    gap: 30px;
  }
}

.menu {
  &__list {
    display: flex;
    align-items: center;
    gap: 30px;
    list-style: none;
  }
}
</style>