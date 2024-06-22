<template>
	<!-- Button -->
	<button v-if="!isLink" :type="type" :class="[size ? `size_${size}` : 'size', radius ? `radius_${radius}` : '']"
		class="button">
		<slot></slot>
	</button>

	<!-- Link -->
	<RouterLink v-else :to="path ? path : ''" class="button"
		:class="[size ? `size_${size}` : 'size', radius ? `radius_${radius}` : '']">
		<slot></slot>
	</RouterLink>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'

type Props = {
	isLink?: boolean,
	path?: string,
	size?: 's' | 'm',
	type?: 'button' | 'submit'
	radius?: 's' | 'm',
}

const props = defineProps<Props>();
const { path, isLink, type = 'button', size, radius = "s" } = props;
</script>

<style lang="scss" scoped>
.button {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 9px 16px;
	background-color: var(--color-complementary);
	color: var(--color-white);
	cursor: pointer;
	border: 1px solid var(--color-complementary);
	font-weight: 600;
	transition: all .2s ease-in-out;

	&:hover {
		background-color: var(--color-white);
		color: var(--color-complementary);
	}

	&:active {
		transform: scale(.98);
	}
}

.radius {
	&_s {
		border-radius: var(--border-radius-s);
	}

	&_m {
		border-radius: var(--border-radius-m);
	}
}

.size {
	width: max-content;

	&_s {
		width: 150px;
	}

	&_m {
		width: 250px;
	}
}
</style>