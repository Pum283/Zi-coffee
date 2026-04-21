import { Navigate, useParams } from 'react-router-dom'
import { MenuCategoryView } from '../components/menu/menu-category-view'
import { ROUTES } from '../constants/routes'
import { MENU_DATA } from '../data/menu'
import type { MenuCategoryKey } from '../types/menu'

function isMenuCategoryKey(value: string | undefined): value is MenuCategoryKey {
  return (
    value === 'salad' ||
    value === 'banh-mi' ||
    value === 'brunch' ||
    value === 'toast' ||
    value === 'fresh-fruity' ||
    value === 'vietnamese-coffee' ||
    value === 'affogato-cold-brew' ||
    value === 'coconut-matcha-chocolate' ||
    value === 'coconut-water-fresh-tea' ||
    value === 'fresh-juice-sugar-cane'
  )
}

export function CategoryPage() {
  const { categoryKey } = useParams()

  if (!isMenuCategoryKey(categoryKey)) {
    return <Navigate to={ROUTES.all} replace />
  }

  return <MenuCategoryView category={MENU_DATA[categoryKey]} />
}

