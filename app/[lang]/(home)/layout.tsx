// import { redirect } from "next/navigation"

// export default async function Layout({
//   params,
// }: {
//   params: Promise<{ lang: string }>;
// }) {
//   const lang = (await params).lang;
  
//   return redirect(`/${lang}/docs`);
// }

import type { ReactNode } from 'react';

export default async function Layout({ children }: { children: ReactNode }) {
  return children
}
