import { ColorMode, IAppInfo, ISeo } from '@/types/common';

export type { ColorMode, IAppInfo, ISeo };

//@typescript-eslint/ban-types
export type OptionalKeys<T> = {
  [K in keyof T]-?: object extends Pick<T, K> ? K : never;
}[keyof T];
export type Defaults<T> = Required<Pick<T, OptionalKeys<T>>>;
