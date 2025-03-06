import { redirect } from "next/navigation"

const Redirect = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const lang = (await params).lang;

  return redirect(`/${lang}/docs`);
}

export default Redirect