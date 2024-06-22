<template>
	<div class="subscribe">
		<UiContainer>
			<div class="subscribe__row">
				<div class="subscribe__text">
					<h2 class="subscribe__title">Get notified when I publish new articles</h2>
					<p class="subscribe__text">Stay up to date with the latest news, announcements, and articles.</p>
				</div>
				<form action="" method="post" class="subscribe__form">
					<input type="email" name="email" placeholder="Enter your email address" class="field">
					<UiButton type="submit" size="s" radius="m">Subscribe</UiButton>
				</form>
			</div>
		</UiContainer>
	</div>
	<div class="footer">
		<UiContainer>
			<div class="footer__nav">

				<div class="footer__nav-col">
					<UiLogo class="footer__logo" />

					<p class="footer__text">Design amazing digital experiences that create more happy in the world.</p>
				</div>

				<div class="footer__nav-col">
					<h4 class="footer__nav-title bold">
						Pages
					</h4>

					<nav>
						<ul class="footer__nav-list">
							<li v-for="item in menuItems" :key="item.title" class="footer__nav-item">
								<RouterLink :to="item.path" class="footer__nav-link">{{ item.title }}</RouterLink>
							</li>
						</ul>
					</nav>
				</div>

				<div class="footer__nav-col">
					<h4 class="footer__nav-title bold">
						Contacts
					</h4>

					<nav>
						<ul class="footer__nav-list">
							<li v-for="item in contactsItems" :key="item.title" class="footer__nav-item">
								<a :href="item.path" class="footer__nav-link">{{ item.title }}</a>
							</li>
						</ul>
					</nav>

				</div>
			</div>

			<div class="footer__copyright">
				<div class="footer__copyright-text">
					<span>Made with a</span>
					<IconVue class="footer__copyright-icon" />
					<span>by <a href="https://t.me/andrew_deweb" target="_blank">Andrei Matrosov</a></span>
				</div>

				<ul class="footer__copyright-socials">
					<li v-for="socialItem in socialsItems" :key="socialItem.path">
						<a :href="socialItem.path" class="social__link" target="_blank">
							<IconsSocial :name="socialItem.icon" />
						</a>
					</li>
				</ul>
			</div>
		</UiContainer>
	</div>

</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';

import UiContainer from '@/components/shared/UiContainer.vue';
import UiButton from '@/components/shared/UiButton.vue';
import UiLogo from '@/components/shared/UiLogo.vue';

import IconVue from '@/components/icons/IconVue.vue';
import IconsSocial from '@/components/icons/IconsSocial.vue';

import { useMenuStore } from '@/stores/menuStore';
import { useContactsStore } from '@/stores/contactsStore';
const menuStore = useMenuStore();
const constactsStore = useContactsStore();

const { menuItems } = menuStore;
const { contactsItems, socialsItems } = constactsStore;
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
		width: 32%;

		.field {
			width: 100%;
		}
	}

	&__title {
		font-size: 30px;
		line-height: 1.26;
		font-weight: 800;
		margin-bottom: 16px;
	}

	&__text {
		font-size: 20px;
		color: var(--color-gray-800);
		line-height: 1.5;
	}
}

.footer {
	&__nav {
		display: flex;
		padding: 64px 0;
		gap: 32px;

		&-col {
			display: flex;
			flex-direction: column;
			width: 32.5%;

			&:first-child {
				width: 25%;
				margin-right: 32px;
			}
		}

		&-title {
			margin-bottom: 16px;
		}

		&-list {
			list-style: none;
			padding-left: 0;
		}

		&-item {
			&:not(:last-child) {
				margin-bottom: 12px;
			}
		}

		&-link {
			color: var(--color-gray-800);
			opacity: .5;
			font-size: 16px;
			line-height: 1.5;
			font-weight: 400;
		}

	}

	&__logo {
		margin-bottom: 32px;
	}

	&__text {
		opacity: .5;
		line-height: 1;
	}

	&__copyright {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 32px;
		padding-bottom: 48px;
		border-top: 1px solid var(--color-gray-200);

		&-text {
			display: flex;
			align-items: center;
			gap: 8px;
			flex-wrap: nowrap;

			a {
				font-weight: 800;
			}
		}

		&-icon {
			width: 18px;
			height: 18px;
		}

		&-socials {
			display: flex;
			list-style: none;
			padding-left: 0;
			gap: 24px;
		}
	}

	&__copyright-socials {
		.social__link {
			$link: &;
			display: inline-block;

			&:deep(svg) {
				width: 24px;
				height: 24px;
			}

			&:deep(svg path) {
				transition: fill .3s ease-in-out;
			}

			&:hover:deep(svg path) {
				fill: var(--color-complementary);
			}
		}
	}
}
</style>