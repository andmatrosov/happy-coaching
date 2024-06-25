<template>
	<RouterLink to="/" class="logo__link">
		<UiIcons name="logo" />
		<span class="typography size_s bold">Happy Coaching</span>
	</RouterLink>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import UiIcons from '@/components/icons/UiIcons.vue';

</script>

<style lang="scss" scoped>
.logo__link {
	display: flex;
	align-items: center;
	gap: 10px;
}

@include media-mobile {
	.logo__link span {
		display: none;
	}
}
</style>