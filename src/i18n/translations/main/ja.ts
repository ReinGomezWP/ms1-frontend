import { i18nMainEn } from './en'

export const i18nMainJa: Record<
  keyof typeof i18nMainEn,
  string | { [key in string]: string }
> = {
  main: {
    title: 'MS1へよこそう',
    subtitle: '学習は、知識への渇望と同じくらい素晴らしいものです',
  },
}
