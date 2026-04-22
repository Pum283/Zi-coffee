import type { MenuCategory, MenuCategoryKey } from '../types/menu'
import baconSaladImage from '../assets/salad/bacon.png'
import chickenSaladImage from '../assets/salad/chicken.png'
import salmonSaladImage from '../assets/salad/salmon.png'
import shrimpSaladImage from '../assets/salad/shrimp.png'
import tunaSaladImage from '../assets/salad/tuna.png'
import veggieDelightSaladImage from '../assets/salad/veggie-delight.png'

export const MENU_ORDER: MenuCategoryKey[] = [
  'salad',
  'banh-mi',
  'brunch',
  'toast',
  'fresh-fruity',
  'vietnamese-coffee',
  'affogato-cold-brew',
  'coconut-matcha-chocolate',
  'coconut-water-fresh-tea',
  'fresh-juice-sugar-cane',
]

export const MENU_CATEGORIES: Record<MenuCategoryKey, Pick<MenuCategory, 'key' | 'label'>> = {
  salad: { key: 'salad', label: { vi: 'Salad', en: 'Salad' } },
  'banh-mi': { key: 'banh-mi', label: { vi: 'Bánh mì', en: 'Banh mi' } },
  brunch: { key: 'brunch', label: { vi: 'Brunch', en: 'Brunch' } },
  toast: { key: 'toast', label: { vi: 'Toast', en: 'Toast' } },
  'fresh-fruity': { key: 'fresh-fruity', label: { vi: 'Fresh & Fruity', en: 'Fresh & Fruity' } },
  'vietnamese-coffee': { key: 'vietnamese-coffee', label: { vi: 'Cà phê', en: 'Coffee' } },
  'affogato-cold-brew': { key: 'affogato-cold-brew', label: { vi: 'Cold Brew', en: 'Cold Brew' } },
  'coconut-matcha-chocolate': { key: 'coconut-matcha-chocolate', label: { vi: 'Matcha', en: 'Matcha' } },
  'coconut-water-fresh-tea': { key: 'coconut-water-fresh-tea', label: { vi: 'Trà', en: 'Tea' } },
  'fresh-juice-sugar-cane': { key: 'fresh-juice-sugar-cane', label: { vi: 'Nước ép', en: 'Juice' } },
} as const

export const MENU_DATA: Record<MenuCategoryKey, MenuCategory> = {
  salad: {
    key: 'salad',
    label: MENU_CATEGORIES.salad.label,
    heading: { vi: 'SALAD', en: 'SALAD' },
    sections: [
      {
        id: 'salad',
        title: { vi: 'Salad', en: 'Salad' },
        items: [
          {
            id: 'veggie-delight-salad',
            name: { vi: 'Salad rau củ', en: 'Veggie Delight Salad' },
            description: {
              vi: 'Rau củ, nấm mỡ, hạt điều, sốt mù tạt, bơ, phô mai Parmesan',
              en: 'Vegetables, button mushroom, cashew nuts, mustard sauce, avocado, Parmesan cheese',
            },
            priceVnd: 120_000,
            imageSrc: veggieDelightSaladImage,
            imageSources: [veggieDelightSaladImage, salmonSaladImage, chickenSaladImage],
          },
          {
            id: 'salmon-salad',
            name: { vi: 'Salad cá hồi', en: 'Salmon Salad' },
            description: {
              vi: 'Rau củ, cá hồi áp chảo, hạt điều, sốt mù tạt, trứng luộc, phô mai Parmesan',
              en: 'Vegetables, seared salmon, cashew nuts, mustard sauce, boiled egg, Parmesan cheese',
            },
            priceVnd: 140_000,
            imageSrc: salmonSaladImage,
          },
          {
            id: 'chicken-salad',
            name: { vi: 'Salad gà', en: 'Chicken Salad' },
            description: {
              vi: 'Rau củ, gà, hạt điều, sốt mù tạt, trứng luộc, phô mai Parmesan',
              en: 'Vegetables, chicken, cashew nuts, mustard sauce, boiled egg, Parmesan cheese',
            },
            priceVnd: 120_000,
            imageSrc: chickenSaladImage,
          },
          {
            id: 'shrimp-salad',
            name: { vi: 'Salad tôm', en: 'Shrimp Salad' },
            description: {
              vi: 'Rau củ, tôm, hạt điều, sốt mù tạt, trứng luộc, phô mai Parmesan',
              en: 'Vegetables, shrimp, cashew nuts, mustard sauce, boiled egg, Parmesan cheese',
            },
            priceVnd: 120_000,
            imageSrc: shrimpSaladImage,
          },
          {
            id: 'bacon-salad',
            name: { vi: 'Salad bacon', en: 'Bacon Salad' },
            description: {
              vi: 'Rau củ, bacon xông khói, hạt điều, sốt mù tạt, trứng luộc, phô mai Parmesan',
              en: 'Vegetables, smoked bacon, cashew nuts, mustard sauce, boiled egg, Parmesan cheese',
            },
            priceVnd: 120_000,
            imageSrc: baconSaladImage,
          },
          {
            id: 'tuna-salad',
            name: { vi: 'Salad cá ngừ', en: 'Tuna Salad' },
            description: {
              vi: 'Rau củ, cá ngừ, hạt điều, sốt mù tạt, trứng luộc, phô mai Parmesan',
              en: 'Vegetables, tuna, cashew nuts, mustard sauce, boiled egg, Parmesan cheese',
            },
            priceVnd: 120_000,
            imageSrc: tunaSaladImage,
          },
        ],
      },
    ],
  },
  'banh-mi': {
    key: 'banh-mi',
    label: MENU_CATEGORIES['banh-mi'].label,
    heading: { vi: 'BÁNH MÌ', en: 'BANH MI' },
    sections: [
      {
        id: 'banh-mi',
        title: { vi: 'Bánh mì', en: 'Banh mi' },
        items: [
          {
            id: 'vietnamese-breakfast',
            name: { vi: 'Bữa sáng kiểu Việt', en: 'Vietnamese breakfast' },
            description: {
              vi: 'Bánh mì chảo: beefsteak, bò viên, xúc xích, pate, trứng ốp la, bánh mì',
              en: 'Banh mi chao: beefsteak, beef meatballs, sausage, pork pate, fried egg, banh mi',
            },
            priceVnd: 220_000,
          },
          {
            id: 'traditional-banh-mi',
            name: { vi: 'Bánh mì truyền thống', en: 'Traditional Banh mi' },
            description: {
              vi: 'Pate, chả, ham, chà bông, đồ chua, sốt trứng, rau',
              en: 'Pork pate, pork roll, ham, pork floss, pickles, egg sauce, vegetables',
            },
            priceVnd: 65_000,
          },
          {
            id: 'spicy-pork-banh-mi',
            name: { vi: 'Bánh mì heo cay', en: 'Spicy Pork Banh mi' },
            description: {
              vi: 'Pate, heo kho cay, đồ chua, sốt trứng, rau',
              en: 'Pork pate, spicy braised pork, pickles, egg sauce, vegetables',
            },
            priceVnd: 65_000,
          },
          {
            id: 'chicken-banh-mi',
            name: { vi: 'Bánh mì gà', en: 'Chicken Banh mi' },
            description: {
              vi: 'Pate, gà sốt teriyaki, đồ chua, sốt trứng, rau',
              en: 'Pork pate, chicken teriyaki sauce, pickles, egg sauce, vegetables',
            },
            priceVnd: 65_000,
          },
          {
            id: 'beef-meatballs-banh-mi',
            name: { vi: 'Bánh mì xíu mại bò viên', en: 'Beef Meatballs Banh mi' },
            description: {
              vi: 'Pate, bò viên, đồ chua, sốt trứng, rau',
              en: 'Pork pate, beef meatballs, pickles, egg sauce, vegetables',
            },
            priceVnd: 65_000,
          },
        ],
      },
    ],
  },
  brunch: {
    key: 'brunch',
    label: MENU_CATEGORIES.brunch.label,
    heading: { vi: 'BRUNCH', en: 'BRUNCH' },
    sections: [
      {
        id: 'brunch',
        title: { vi: 'Brunch', en: 'Brunch' },
        items: [
          /*
          {
            id: 'syrniki',
            name: { vi: 'Syrniki', en: 'Syrniki' },
            description: {
              vi: 'Cottage cheese, sour cream, mứt berry, dâu, xoài, sữa đặc',
              en: 'Cottage cheese, sour cream, berry jam, strawberry, mango, condensed milk',
            },
            priceVnd: 150_000,
          },
          {
            id: 'ommelet',
            name: { vi: 'Omelet', en: 'Ommelet' },
            description: {
              vi: 'Nấm mỡ, trứng, bơ, rau củ, toast',
              en: 'Button mushrooms, eggs, avocado, vegetables, toast',
            },
            priceVnd: 90_000,
          },
          {
            id: 'banana-peanut-toast',
            name: { vi: 'Toast chuối bơ đậu', en: 'Banana peanut Toast' },
            description: {
              vi: 'Bánh mì nguyên cám, bơ đậu phộng, chuối, bột quế, mật ong',
              en: 'Wholemeal bread, peanut butter, banana, cinnamon powder, honey',
            },
            priceVnd: 90_000,
          },
          {
            id: 'british-breakfast',
            name: { vi: 'Bữa sáng kiểu Anh', en: 'British Breakfast' },
            description: {
              vi: 'Bacon xông khói, trứng, nấm mỡ, xúc xích, cải bó xôi, cà chua nướng, đậu hầm, bánh mì sourdough',
              en: 'Smoked bacon, egg, button mushrooms, sausages, spinach, grilled tomatoes, baked beans, sliced sourdough bread',
            },
            priceVnd: 150_000,
          },
          { id: 'extra-bacon', name: { vi: 'Thêm bacon', en: 'Extra Bacon' }, description: { vi: '', en: '' }, priceVnd: 40_000 },
          { id: 'extra-sausage', name: { vi: 'Thêm xúc xích', en: 'Extra Sausage' }, description: { vi: '', en: '' }, priceVnd: 50_000 },
          { id: 'extra-wholemeal-bread', name: { vi: 'Thêm bánh mì nguyên cám', en: 'Wholemeal bread' }, description: { vi: '', en: '' }, priceVnd: 25_000 },
          { id: 'extra-avocado', name: { vi: 'Thêm bơ', en: 'Avocado' }, description: { vi: '', en: '' }, priceVnd: 30_000 },
          { id: 'extra-egg', name: { vi: 'Thêm trứng', en: 'Egg' }, description: { vi: '', en: '' }, priceVnd: 25_000 },
          { id: 'extra-baked-beans', name: { vi: 'Thêm đậu hầm', en: 'Baked beans' }, description: { vi: '', en: '' }, priceVnd: 25_000 },
          */
        ],
      },
    ],
  },
  toast: {
    key: 'toast',
    label: MENU_CATEGORIES.toast.label,
    heading: { vi: 'TOAST', en: 'TOAST' },
    sections: [
      {
        id: 'toast',
        title: { vi: 'Toast', en: 'Toast' },
        items: [
          /*
          {
            id: 'avocado-poached-egg-toast',
            name: { vi: 'Toast bơ & trứng chần', en: 'Avocado & Poached Egg Toast' },
            description: {
              vi: 'Bánh mì nguyên cám, trứng chần, bơ nghiền gia vị, cream cheese, rau trộn',
              en: 'Wholemeal bread, poached egg, seasoned smashed avocado, cream cheese, mixed greens',
            },
            priceVnd: 110_000,
          },
          {
            id: 'shrimp-avocado-toast',
            name: { vi: 'Toast tôm & bơ', en: 'Shrimp & Avocado Toast' },
            description: {
              vi: 'Bánh mì nguyên cám, tôm, trứng scrambled, bơ nghiền gia vị',
              en: 'Wholemeal bread, shrimp, scrambled egg, seasoned smashed avocado',
            },
            priceVnd: 130_000,
          },
          {
            id: 'bacon-avocado-toast',
            name: { vi: 'Toast bacon & bơ', en: 'Bacon & Avocado Toast' },
            description: {
              vi: 'Bánh mì nguyên cám, bacon, trứng scrambled, bơ nghiền gia vị',
              en: 'Wholemeal bread, bacon, scrambled egg, seasoned smashed avocado',
            },
            priceVnd: 120_000,
          },
          {
            id: 'creamy-mushroom-toast',
            name: { vi: 'Toast nấm sốt kem', en: 'Creamy mushroom Toast' },
            description: {
              vi: 'Bánh mì nguyên cám, nấm mỡ, arugula, cream cheese, ớt khô',
              en: 'Wholemeal bread, button mushrooms, arugula, cream cheese, chili flakes',
            },
            priceVnd: 130_000,
          },
          {
            id: 'chicken-bell-pepper-toast',
            name: { vi: 'Toast gà & ớt chuông', en: 'Chicken & Bell Pepper Toast' },
            description: {
              vi: 'Bánh mì nguyên cám, gà, ớt chuông, arugula',
              en: 'Wholemeal bread, chicken, bell pepper, arugula',
            },
            priceVnd: 120_000,
          },
          */
        ],
      },
    ],
  },
  'fresh-fruity': {
    key: 'fresh-fruity',
    label: MENU_CATEGORIES['fresh-fruity'].label,
    heading: { vi: 'FRESH & FRUITY', en: 'FRESH & FRUITY' },
    sections: [
      {
        id: 'fresh-fruity',
        title: { vi: 'Fresh & Fruity', en: 'Fresh & Fruity' },
        items: [
          /*
          {
            id: 'tropical-smoothie-bowl',
            name: { vi: 'Smoothie bowl trái cây', en: 'Tropical Smoothie Bowl' },
            description: {
              vi: 'Trái cây theo mùa, coconut cream, granola',
              en: 'Seasonal fruits, coconut cream, crunchy granola',
            },
            priceVnd: 120_000,
          },
          {
            id: 'yogurt-bowl',
            name: { vi: 'Yogurt bowl', en: 'Yogurt Bowl' },
            description: {
              vi: 'Yogurt, trái cây theo mùa, granola',
              en: 'Yogurt, seasonal fruits, crunchy granola',
            },
            priceVnd: 120_000,
          },
          {
            id: 'pork-spring-rolls',
            name: { vi: 'Chả giò', en: 'Pork Spring rolls with dipping sauce' },
            description: {
              vi: 'Heo, cà rốt, khoai môn, nấm mèo, miến',
              en: 'Pork, carrot, taro, wood ear mushrooms, glass noodles',
            },
            priceVnd: 90_000,
          },
          */
        ],
      },
    ],
  },
  'vietnamese-coffee': {
    key: 'vietnamese-coffee',
    label: MENU_CATEGORIES['vietnamese-coffee'].label,
    heading: { vi: 'VIETNAMESE COFFEE', en: 'VIETNAMESE COFFEE' },
    sections: [
      {
        id: 'vietnamese-coffee',
        title: { vi: 'Cà phê Việt Nam', en: 'Vietnamese Coffee' },
        items: [
          /*
          { id: 'black-coffee-hot', name: { vi: 'Cà phê đen', en: 'Black Coffee' }, description: { vi: 'Nóng', en: 'Hot' }, priceVnd: 40_000 },
          { id: 'condensed-milk-coffee-hot', name: { vi: 'Cà phê sữa', en: 'Condensed Milk Coffee' }, description: { vi: 'Nóng', en: 'Hot' }, priceVnd: 45_000 },
          { id: 'white-coffee-hot', name: { vi: 'Bạc xỉu', en: 'White Coffee' }, description: { vi: 'Nóng', en: 'Hot' }, priceVnd: 50_000 },
          { id: 'salted-cream-coffee', name: { vi: 'Cà phê muối', en: 'Salted Cream Coffee' }, description: { vi: '', en: '' }, priceVnd: 60_000 },
          { id: 'egg-coffee', name: { vi: 'Cà phê trứng', en: 'Egg Coffee' }, description: { vi: '', en: '' }, priceVnd: 60_000 },
          { id: 'black-coffee-iced', name: { vi: 'Cà phê đen', en: 'Black Coffee' }, description: { vi: 'Đá', en: 'Iced' }, priceVnd: 40_000 },
          { id: 'condensed-milk-coffee-iced', name: { vi: 'Cà phê sữa', en: 'Condensed Milk Coffee' }, description: { vi: 'Đá', en: 'Iced' }, priceVnd: 45_000 },
          { id: 'white-coffee-iced', name: { vi: 'Bạc xỉu', en: 'White Coffee' }, description: { vi: 'Đá', en: 'Iced' }, priceVnd: 50_000 },
          { id: 'blended-coffee', name: { vi: 'Cà phê đá xay', en: 'Blended Coffee' }, description: { vi: '', en: '' }, priceVnd: 70_000 },
          */
        ],
      },
      {
        id: 'espresso',
        title: { vi: 'ESPRESSO', en: 'ESPRESSO' },
        items: [
          /*
          { id: 'espresso', name: { vi: 'Espresso', en: 'Espresso' }, description: { vi: '', en: '' }, priceVnd: 50_000 },
          { id: 'americano-hot', name: { vi: 'Americano', en: 'Americano' }, description: { vi: 'Nóng', en: 'Hot' }, priceVnd: 50_000 },
          { id: 'mocha', name: { vi: 'Mocha', en: 'Mocha' }, description: { vi: 'Cafe, sữa tươi, socola', en: 'Coffee, fresh milk, chocolate' }, priceVnd: 75_000 },
          { id: 'cappuccino', name: { vi: 'Cappuccino', en: 'Cappuccino' }, description: { vi: 'Cafe, sữa tươi', en: 'Coffee, fresh milk' }, priceVnd: 65_000 },
          { id: 'latte-hot', name: { vi: 'Latte', en: 'Latte' }, description: { vi: 'Nóng', en: 'Hot' }, priceVnd: 70_000 },
          { id: 'caramel-macchiato', name: { vi: 'Caramel Macchiato', en: 'Caramel Macchiato' }, description: { vi: 'Cafe, caramel, sữa tươi', en: 'Coffee, caramel, fresh milk' }, priceVnd: 75_000 },
          { id: 'americano-iced', name: { vi: 'Americano', en: 'Americano' }, description: { vi: 'Đá', en: 'Iced' }, priceVnd: 50_000 },
          { id: 'espresso-tonic', name: { vi: 'Espresso Tonic', en: 'Espresso Tonic' }, description: { vi: 'Cafe, tonic', en: 'Coffee, tonic' }, priceVnd: 70_000 },
          { id: 'iced-mocha', name: { vi: 'Iced Mocha', en: 'Iced Mocha' }, description: { vi: 'Cafe, sữa tươi, socola', en: 'Coffee, fresh milk, chocolate' }, priceVnd: 75_000 },
          { id: 'latte-iced', name: { vi: 'Latte', en: 'Latte' }, description: { vi: 'Đá', en: 'Iced' }, priceVnd: 70_000 },
          { id: 'iced-caramel-macchiato', name: { vi: 'Iced Caramel Macchiato', en: 'Iced Caramel Macchiato' }, description: { vi: 'Cafe, caramel, sữa tươi', en: 'Coffee, caramel, fresh milk' }, priceVnd: 75_000 },
          */
        ],
      },
    ],
  },
  'affogato-cold-brew': {
    key: 'affogato-cold-brew',
    label: MENU_CATEGORIES['affogato-cold-brew'].label,
    heading: { vi: 'AFFOGATO & COLD BREW', en: 'AFFOGATO & COLD BREW' },
    sections: [
      {
        id: 'affogato',
        title: { vi: 'Affogato', en: 'Affogato' },
        items: [
          /*
          { id: 'affogato', name: { vi: 'Affogato', en: 'Affogato' }, description: { vi: '', en: '' }, priceVnd: 120_000 },
          { id: 'matcha-affogato', name: { vi: 'Affogato matcha', en: 'Matcha Affogato' }, description: { vi: '', en: '' }, priceVnd: 120_000 },
          { id: 'cocoa-affogato', name: { vi: 'Affogato cacao', en: 'Cocoa Affogato' }, description: { vi: '', en: '' }, priceVnd: 120_000 },
          */
        ],
      },
      {
        id: 'cold-foam-series',
        title: { vi: 'Cold Foam Series', en: 'Cold Foam Series' },
        items: [
          /*
          { id: 'silky-salted-caramel-latte', name: { vi: 'Silky Salted Caramel Latte', en: 'Silky Salted Caramel Latte' }, description: { vi: 'Cafe, sữa tươi, kem lạnh', en: 'Coffee, fresh milk, cold cream' }, priceVnd: 70_000 },
          { id: 'dark-sesame-latte', name: { vi: 'Dark Sesame Latte', en: 'Dark Sesame Latte' }, description: { vi: 'Mè đen, cafe, sữa tươi, kem lạnh', en: 'Black sesame, coffee, fresh milk, cold cream' }, priceVnd: 70_000 },
          { id: 'cold-brew-cloud', name: { vi: 'Cold Brew Cloud', en: 'Cold Brew Cloud' }, description: { vi: 'Cafe, kem lạnh', en: 'Coffee, cold cream' }, priceVnd: 70_000 },
          { id: 'matcha-cream-top', name: { vi: 'Matcha Cream Top', en: 'Matcha Cream Top' }, description: { vi: 'Matcha, sữa tươi, kem lạnh', en: 'Matcha, fresh milk, cold cream' }, priceVnd: 70_000 },
          */
        ],
      },
      {
        id: 'cold-brew',
        title: { vi: 'Cold Brew', en: 'Cold Brew' },
        items: [
          /*
          { id: 'original-cold-brew', name: { vi: 'Cold Brew nguyên bản', en: 'Original Cold Brew' }, description: { vi: 'Cafe', en: 'Coffee' }, priceVnd: 60_000 },
          { id: 'red-grape-yuzu-cold-brew', name: { vi: 'Cold Brew bưởi', en: 'Red Grape Yuyu Cold Brew' }, description: { vi: 'Cafe, bưởi', en: 'Coffee, grapefruit' }, priceVnd: 75_000 },
          { id: 'orange-cold-brew', name: { vi: 'Cold Brew cam', en: 'Orange Cold Brew' }, description: { vi: 'Cafe, cam', en: 'Coffee, orange' }, priceVnd: 75_000 },
          { id: 'lychee-cold-brew', name: { vi: 'Cold Brew vải', en: 'Lychee Cold Brew' }, description: { vi: 'Cafe, vải', en: 'Coffee, lychee' }, priceVnd: 75_000 },
          */
        ],
      },
    ],
  },
  'coconut-matcha-chocolate': {
    key: 'coconut-matcha-chocolate',
    label: MENU_CATEGORIES['coconut-matcha-chocolate'].label,
    heading: { vi: 'COCONUT CREAM & MATCHA', en: 'COCONUT CREAM & MATCHA' },
    sections: [
      {
        id: 'coconut-cream-specials',
        title: { vi: 'Coconut Cream Specials', en: 'Coconut Cream Specials' },
        items: [
          /*
          { id: 'coconut-coffee', name: { vi: 'Cà phê dừa', en: 'Coconut Coffee' }, description: { vi: 'Dừa, cafe', en: 'Coconut, coffee' }, priceVnd: 70_000 },
          { id: 'coconut-cocoa', name: { vi: 'Cacao dừa', en: 'Coconut Cocoa' }, description: { vi: 'Dừa, cacao', en: 'Coconut, cocoa' }, priceVnd: 70_000 },
          { id: 'coconut-matcha', name: { vi: 'Matcha dừa', en: 'Coconut Matcha' }, description: { vi: 'Dừa, matcha', en: 'Coconut, matcha' }, priceVnd: 70_000 },
          { id: 'coconut-black-sesame', name: { vi: 'Mè đen dừa', en: 'Coconut Black Sesame' }, description: { vi: 'Dừa, mè đen', en: 'Coconut, black sesame' }, priceVnd: 70_000 },
          */
        ],
      },
      {
        id: 'matcha-chocolate',
        title: { vi: 'Matcha & Chocolate', en: 'Matcha & Chocolate' },
        items: [
          /*
          { id: 'matcha-latte-hot', name: { vi: 'Matcha latte', en: 'Matcha Latte' }, description: { vi: 'Nóng', en: 'Hot' }, priceVnd: 70_000 },
          { id: 'matcha-latte-iced', name: { vi: 'Matcha latte', en: 'Matcha Latte' }, description: { vi: 'Đá', en: 'Iced' }, priceVnd: 70_000 },
          { id: 'blended-matcha', name: { vi: 'Matcha đá xay', en: 'Blended Matcha' }, description: { vi: 'Đá xay', en: 'Blended' }, priceVnd: 70_000 },
          { id: 'matcha-espresso-latte', name: { vi: 'Matcha espresso latte', en: 'Matcha Espresso Latte' }, description: { vi: 'Matcha, cafe, sữa tươi', en: 'Matcha, coffee, fresh milk' }, priceVnd: 85_000 },
          { id: 'strawberry-matcha', name: { vi: 'Strawberry Matcha', en: 'Strawberry Matcha' }, description: { vi: 'Matcha dâu', en: 'Strawberry matcha' }, priceVnd: 85_000 },
          { id: 'coco-matcha-cloud', name: { vi: 'Matcha nước dừa', en: 'Coco Matcha Cloud' }, description: { vi: 'Matcha nước dừa', en: 'Matcha coconut water' }, priceVnd: 70_000 },
          { id: 'chocolate-hot', name: { vi: 'Socola', en: 'Chocolate' }, description: { vi: 'Nóng', en: 'Hot' }, priceVnd: 70_000 },
          { id: 'chocolate-iced', name: { vi: 'Socola', en: 'Chocolate' }, description: { vi: 'Đá viên', en: 'Iced' }, priceVnd: 70_000 },
          { id: 'chocolate-blended', name: { vi: 'Socola đá xay', en: 'Chocolate' }, description: { vi: 'Đá xay', en: 'Blended' }, priceVnd: 70_000 },
          */
        ],
      },
    ],
  },
  'coconut-water-fresh-tea': {
    key: 'coconut-water-fresh-tea',
    label: MENU_CATEGORIES['coconut-water-fresh-tea'].label,
    heading: { vi: 'COCONUT WATER & TEA', en: 'COCONUT WATER & TEA' },
    sections: [
      {
        id: 'coconut-water',
        title: { vi: 'Nước dừa', en: 'Coconut Water' },
        items: [
          /*
          { id: 'coconut-mango', name: { vi: 'Nước dừa & Xoài', en: 'Coconut & Mango' }, description: { vi: '', en: '' }, priceVnd: 60_000 },
          { id: 'coconut-pineapple', name: { vi: 'Nước dừa & Dứa', en: 'Coconut & Pineapple' }, description: { vi: '', en: '' }, priceVnd: 60_000 },
          { id: 'coconut-kumquat', name: { vi: 'Nước dừa & Tắc', en: 'Coconut & Kumquat' }, description: { vi: '', en: '' }, priceVnd: 60_000 },
          */
        ],
      },
      {
        id: 'fresh-tea',
        title: { vi: 'Trà', en: 'Fresh Tea' },
        items: [
          /*
          { id: 'tropical-fruit-tea', name: { vi: 'Trà trái cây', en: 'Tropical Fruit Tea' }, description: { vi: '', en: '' }, priceVnd: 75_000 },
          { id: 'peach-orange-tea', name: { vi: 'Trà đào cam', en: 'Peach Orange Tea' }, description: { vi: '', en: '' }, priceVnd: 65_000 },
          { id: 'hibiscus-tea', name: { vi: 'Trà Hibiscus', en: 'Hibiscus Tea' }, description: { vi: '', en: '' }, priceVnd: 65_000 },
          { id: 'yuyu-grapefruit-tea', name: { vi: 'Trà bưởi YuYu', en: 'YuYu Grapefruit Tea' }, description: { vi: '', en: '' }, priceVnd: 65_000 },
          { id: 'ginger-tea', name: { vi: 'Trà gừng', en: 'Ginger Tea' }, description: { vi: '', en: '' }, priceVnd: 75_000 },
          { id: 'herbal-tea', name: { vi: 'Trà thảo mộc', en: 'Herbal Tea' }, description: { vi: '', en: '' }, priceVnd: 60_000 },
          { id: 'golden-turmeric-milk', name: { vi: 'Sữa nghệ mật ong', en: 'Golden Turmeric Milk' }, description: { vi: '', en: '' }, priceVnd: 70_000 },
          */
        ],
      },
    ],
  },
  'fresh-juice-sugar-cane': {
    key: 'fresh-juice-sugar-cane',
    label: MENU_CATEGORIES['fresh-juice-sugar-cane'].label,
    heading: { vi: 'FRESH JUICE & SUGAR CANE', en: 'FRESH JUICE & SUGAR CANE' },
    sections: [
      {
        id: 'fresh-juice-smoothies',
        title: { vi: 'Nước ép & Sinh tố', en: 'Fresh Juice & Smoothies' },
        items: [
          /*
          { id: 'lime-juice', name: { vi: 'Nước chanh', en: 'Lime Juice' }, description: { vi: '', en: '' }, priceVnd: 50_000 },
          { id: 'orange-juice', name: { vi: 'Nước cam', en: 'Orange Juice' }, description: { vi: '', en: '' }, priceVnd: 65_000 },
          { id: 'watermelon-pineapple-juice', name: { vi: 'Dưa hấu & Dứa', en: 'Watermelon & Pineapple Juice' }, description: { vi: '', en: '' }, priceVnd: 65_000 },
          { id: 'orange-pineapple-carrot-juice', name: { vi: 'Cà rốt, cam, dứa', en: 'Orange pineapple carrot juice' }, description: { vi: '', en: '' }, priceVnd: 65_000 },
          { id: 'strawberry-lime-snow', name: { vi: 'Chanh dâu tuyết', en: 'Strawberry Lime Snow' }, description: { vi: '', en: '' }, priceVnd: 70_000 },
          { id: 'mango-smoothie', name: { vi: 'Sinh tố xoài', en: 'Mango Smoothie' }, description: { vi: '', en: '' }, priceVnd: 65_000 },
          { id: 'tropical-smoothie', name: { vi: 'Sinh tố trái cây', en: 'Tropical Smoothie' }, description: { vi: '', en: '' }, priceVnd: 70_000 },
          */
        ],
      },
      {
        id: 'sugar-cane',
        title: { vi: 'Nước mía', en: 'Sugar Cane' },
        items: [
          /*
          { id: 'sugar-cane-coconut-cream', name: { vi: 'Nước mía cốt dừa', en: 'Sugar Cane with coconut cream' }, description: { vi: '', en: '' }, priceVnd: 60_000 },
          { id: 'sugar-cane-lemongrass-kumquat', name: { vi: 'Nước mía sả tắc', en: 'Sugar Cane with Lemongrass, Kumquat' }, description: { vi: '', en: '' }, priceVnd: 55_000 },
          { id: 'sugar-cane-strawberry', name: { vi: 'Nước mía dâu', en: 'Sugar Cane with Strawberry' }, description: { vi: '', en: '' }, priceVnd: 55_000 },
          { id: 'sugar-cane-pineapple', name: { vi: 'Nước mía dứa', en: 'Sugar Cane with Pineapple' }, description: { vi: '', en: '' }, priceVnd: 55_000 },
          */
        ],
      },
    ],
  },
} as const

