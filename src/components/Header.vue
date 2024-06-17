<template>
  <header class="header">
    <Container class="header__row">
      <Logo />
      <div class="header__menu">
        <nav class="header__nav">
          <ul class="menu__list">
            <li class="menu__item" v-for="item in menuItems" :key="item.title">
              <RouterLink :to="item.path" class="menu__link">{{ item.title }}</RouterLink>
            </li>
          </ul>
          <Button tagName="button">Get your free guide now</Button>
        </nav>
      </div>
    </Container>
  </header>
</template>

<script lang="ts" setup>
	import Container from '@/components/shared/Container.vue'
	import Logo from '@/components/shared/Logo.vue'
	import Button from '@/components/shared/Button.vue'

	type MenuItem = { title: string, path: string };

	const menuItems: MenuItem[] = [
		{ title: 'Home', path: '/' },
		{ title: 'Services', path: '/services' },
		{ title: 'About us', path: '/about' },
		{ title: 'Extra Salespage', path: '/salespage' },
	];
</script>

<style lang="scss" scoped>
.header {
  background-color: var(--color-white);

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 9px 0;
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