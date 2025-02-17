/*
 * This file is automatically generated.
 * Run 'pnpm run generate:locales' to update.
 */

import { Faker } from '../faker';
import base from '../locales/base';
import en from '../locales/en';
import en_BORK from '../locales/en_BORK';

/**
 * The faker instance for the `en_BORK` locale.
 *
 * - Language: English (Bork)
 * - Endonym: English (Bork)
 *
 * This instance uses the following locales internally (in descending precedence):
 *
 * - `en_BORK`
 * - `en`
 * - `base`
 */
export const faker = new Faker({
  locale: [en_BORK, en, base],
});
