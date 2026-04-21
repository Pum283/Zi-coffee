import { BRAND } from '../../constants/brand'
import ziLogo from '../../assets/zi-logo.png'
import { useI18n } from '../../i18n/i18n-context'
import { t } from '../../i18n/localized'

export function BrandHeader() {
  const { language } = useI18n()
  return (
    <header className="flex flex-col items-center text-center">
      <div className="flex flex-col items-center">
        <div className="grid size-14 place-items-center overflow-hidden rounded-full border border-[rgb(var(--zi-line))] bg-white md:size-16">
          <img src={ziLogo} alt="Zi Coffee & Roastery" className="h-full w-full object-cover" />
        </div>

        <div className="zi-serif mt-4 text-balance text-2xl tracking-tight text-[rgb(var(--zi-text))] md:text-3xl">
          {t(BRAND.name, language)}
        </div>
        <div className="mt-1 text-sm tracking-[0.18em] text-[rgb(var(--zi-muted))] uppercase">
          {t(BRAND.tagline, language)}
        </div>
      </div>

      <div className="mt-6 h-px w-full bg-[rgb(var(--zi-line))]" />
      <p className="mt-5 max-w-2xl text-pretty text-sm leading-6 text-[rgb(var(--zi-muted))]">
        {t(BRAND.note, language)}
      </p>
    </header>
  )
}

