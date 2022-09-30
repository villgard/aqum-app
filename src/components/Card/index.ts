export { default as Card } from './Card.vue';

export enum CardSizes {
  large = 'large',
  default = 'default',
  small = 'small',
}

export enum CardTitleAlign {
  left = 'left',
  center = 'center',
  right = 'right',
}

export interface CardProps {
  title?: string;
  titleAlign?: CardTitleAlign;
  caption?: string;
  size?: CardSizes;
}

export const cardTitleAlign = [CardTitleAlign.left, CardTitleAlign.center, CardTitleAlign.right];
export const cardSizes = [CardSizes.large, CardSizes.default, CardSizes.small];
