import { defineStore } from 'pinia'
import { type ContactItems, type SocialsItems } from '@/types/ContactsTypes'

export const useContactsStore = defineStore('contacts', () => {
  const contactsItems: ContactItems[] = [
    { title: '+123 456 789', path: 'tel:+123456789' },
    { title: 'hello@happydigital.nl', path: 'mailto:hello@happydigital.nl' },
    { title: 'Instagram', path: 'https://instagram.com' },
    { title: 'LinkedIn', path: 'https://linkedin.com' }
  ]

  const socialsItems: SocialsItems[] = [
    { icon: 'linkedin', path: 'https://linkedin.com/' },
    { icon: 'facebook', path: 'https://facebook.com/' },
    { icon: 'dribbble', path: 'https://dribbble.com/' }
  ]

  return { contactsItems, socialsItems }
})
