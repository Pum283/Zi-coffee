import { useEffect, useId, useMemo, useRef, useState } from 'react'
import type { MenuItem } from '../../types/menu'
import { MOTION } from '../../constants/motion'
import { UI_TEXT } from '../../constants/ui-text'
import { useI18n } from '../../i18n/i18n-context'
import { t } from '../../i18n/localized'
import { formatVnd } from '../../utils/money'

type Props = {
  item: MenuItem
  onClose: () => void
}

type Phase = 'entering' | 'entered' | 'exiting'

export function MenuItemModal({ item, onClose }: Props) {
  const { language } = useI18n()
  const titleId = useId()
  const cardRef = useRef<HTMLDivElement | null>(null)

  const [phase, setPhase] = useState<Phase>('entering')
  const [transform, setTransform] = useState<string>('translate3d(0, 10px, 0) scale(0.98)')
  const [opacity, setOpacity] = useState<number>(0)

  const durationMs = MOTION.modalDurationMs
  const easing = 'cubic-bezier(0.2, 0.8, 0.2, 1)'

  const handleClose = () => {
    setPhase('exiting')
    window.setTimeout(onClose, durationMs)
  }

  const overlayClassName = useMemo(() => {
    const base =
      'fixed inset-0 z-50 grid place-items-center px-4 py-8 md:px-8 md:py-10'
    return base
  }, [])

  const backdropClassName = useMemo(() => {
    const base = 'absolute inset-0 bg-black/30 transition-opacity'
    const opacity = phase === 'entering' ? 'opacity-0' : 'opacity-100'
    const exiting = phase === 'exiting' ? 'opacity-0' : opacity
    return `${base} ${exiting}`
  }, [phase])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    setTransform('translate3d(0, 10px, 0) scale(0.98)')
    setOpacity(0)

    const raf1 = window.requestAnimationFrame(() => {
      const raf2 = window.requestAnimationFrame(() => {
        setPhase('entered')
        setTransform('translate3d(0, 0, 0) scale(1)')
        setOpacity(1)
      })
      return () => window.cancelAnimationFrame(raf2)
    })

    return () => window.cancelAnimationFrame(raf1)
  }, [])

  useEffect(() => {
    if (phase !== 'exiting') return
    setTransform('translate3d(0, 10px, 0) scale(0.98)')
    setOpacity(0)
  }, [phase])

  return (
    <div className={overlayClassName} role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <div className={backdropClassName} onClick={handleClose} />

      <div
        ref={cardRef}
        className="relative w-full max-w-2xl overflow-hidden rounded-(--zi-radius) border border-[rgb(var(--zi-line))] bg-white shadow-[0_30px_90px_rgba(0,0,0,0.18)]"
        style={{
          transform,
          transformOrigin: 'center',
          opacity,
          transition: `transform ${durationMs}ms ${easing}, opacity ${durationMs}ms ${easing}`,
        }}
      >
        <div className="overflow-hidden bg-[rgb(var(--zi-surface))]">
          {item.imageSrc ? (
            <img src={item.imageSrc} alt={t(item.name, language)} className="h-auto w-full object-cover" loading="lazy" />
          ) : (
            <div className="aspect-video w-full bg-[radial-gradient(900px_260px_at_20%_20%,rgba(var(--zi-accent)/0.18),transparent_55%),radial-gradient(900px_260px_at_80%_55%,rgba(var(--zi-accent)/0.10),transparent_50%)]" />
          )}
        </div>

        <div className="px-5 pb-5 pt-4 md:px-6 md:pb-6 md:pt-5">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div id={titleId} className="zi-serif text-balance text-xl tracking-tight text-[rgb(var(--zi-text))]">
                {t(item.name, language)}
              </div>
              <p className="mt-2 text-sm leading-6 text-[rgb(var(--zi-muted))]">{t(item.description, language)}</p>
            </div>
            <button
              type="button"
              className="shrink-0 rounded-full border border-[rgb(var(--zi-line))] bg-white px-3 py-2 text-sm text-[rgb(var(--zi-text))] hover:bg-[rgb(var(--zi-surface))] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--zi-accent))]"
              onClick={handleClose}
            >
              {t(UI_TEXT.close, language)}
            </button>
          </div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <div className="text-sm font-medium tracking-[0.18em] text-[rgb(var(--zi-muted))] uppercase">
              {t(UI_TEXT.price, language)}
            </div>
            <div className="font-medium tracking-wide text-[rgb(var(--zi-text))]">{formatVnd(item.priceVnd)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

