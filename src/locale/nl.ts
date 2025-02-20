/*
 * This file is automatically generated.
 * Run 'pnpm run generate:locales' to update.
 */

import { Faker } from '../faker';
import base from '../locales/base';
import en from '../locales/en';
import nl from '../locales/nl';

/**
 * The faker instance for the `nl` locale.
 *
 * - Language: Dutch
 * - Endonym: Nederlands
 *
 * This instance uses the following locales internally (in descending precedence):
 *
 * - `nl`
 * - `en`
 * - `base`
 */
export const faker = new Faker({
  locale: [nl, en, base],
});
