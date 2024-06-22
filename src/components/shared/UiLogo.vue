<template>
	<RouterLink to="/" class="logo__link">
		<IconLogo />
		<span class="typography size_s bold">Happy Coaching</span>
	</RouterLink>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import IconLogo from '@/components/icons/IconLogo.vue';

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