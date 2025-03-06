import '@/styles/global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { I18nProvider, type Translations } from 'fumadocs-ui/i18n';
 
const zhHans: Partial<Translations> = {
  search: '簡體中文',
  // other translations
};

const zhHant: Partial<Translations> = {
  search: '繁體中文',
  // other translations
};
 
// available languages that will be displayed on UI
// make sure `locale` is consistent with your i18n config
const locales = [
  {
    name: 'English',
    locale: 'en',
  },
  {
    name: 'Simplified Chinese',
    locale: 'zh-hans',
  },
  {
    name: 'Traditional Chinese',
    locale: 'zh-hant',
  },
];
 
export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}) {
  const lang = (await params).lang;
 
  return (
    <html lang={lang}>
      <body>
        <I18nProvider
          locale={lang}
          locales={locales}
          translations={{ zhHans,zhHant }[lang]}
        >
          <RootProvider>{children}</RootProvider>
        </I18nProvider>
      </body>
    </html>
  );
}