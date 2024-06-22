import { defineStore } from 'pinia'
import { type MenuItem } from '@/types/MenuTypes'

export const useMenuStore = defineStore('menu', () => {
  const menuItems: MenuItem[] = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
    { title: 'About us', path: '/about' },
    { title: 'Extra Salespage', path: '/sales' },
    { title: 'Free guide', path: '#freeguide' }
  ]

  return { menuItems }
})
