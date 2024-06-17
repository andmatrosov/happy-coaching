<template>
	<div class="subscribe">
		<Container>
			<div class="subscribe__row">
				<div class="subscribe__text">
					<h2 class="subscribe__title">Get notified when I publish new articles</h2>
					<p class="subscribe__text">Stay up to date with the latest news, announcements, and articles.</p>
				</div>
				<form action="" method="post" class="subscribe__form">
					<input type="email" name="email" placeholder="Enter your email address" class="field">
					<Button type="submit" size="s" radius="m" tagName="button">Subscribe</Button>
				</form>
			</div>
		</Container>
	</div>
	<div class="footer">
		<Container>
			Footer
		</Container>
	</div>

</template>

<script lang="ts" setup>
	import Container from '@/components/shared/Container.vue';
	import Button from '@/components/shared/Button.vue';
</script>

<style lang="scss" scoped>
.subscribe {
	padding: 48px 0;
	background-color: var(--color-accent-bg);

	&__row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 30px;
	}

	&__form {
		display: flex;
		gap: 16px;
		align-items: stretch;
	}

	&__title {
		font-size: 30px;
		line-height: 1.26;
		font-weight: 800;
	}
}
</style>