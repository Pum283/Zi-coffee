import type { LocalizedString } from './i18n'

export type MenuCategoryKey =
  | 'salad'
  | 'banh-mi'
  | 'brunch'
  | 'toast'
  | 'fresh-fruity'
  | 'vietnamese-coffee'
  | 'affogato-cold-brew'
  | 'coconut-matcha-chocolate'
  | 'coconut-water-fresh-tea'
  | 'fresh-juice-sugar-cane'

export type MenuItem = {
  id: string
  name: LocalizedString
  description: LocalizedString
  priceVnd: number
  imageSrc?: string
  imageSources?: string[]
}

export type MenuSection = {
  id: string
  title: LocalizedString
  items: MenuItem[]
}

export type MenuCategory = {
  key: MenuCategoryKey
  label: LocalizedString
  heading: LocalizedString
  sections: MenuSection[]
}

