import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { Loader } from "@/components/site/Loader";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-noir px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-gold">404</h1>
        <h2 className="mt-4 font-display text-2xl text-ivory">Page not found</h2>
        <p className="mt-2 text-sm text-ivory/55">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-[11px] uppercase tracking-luxe text-noir font-semibold hover:bg-gold-soft transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-noir px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-ivory">Something went wrong</h1>
        <p className="mt-2 text-sm text-ivory/55">Try refreshing or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-gold px-6 py-3 text-[11px] uppercase tracking-luxe text-noir font-semibold hover:bg-gold-soft transition-colors"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-ivory/30 px-6 py-3 text-[11px] uppercase tracking-luxe text-ivory hover:border-gold hover:text-gold transition-colors">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Maruthi Fashions — Style That Defines You" },
      { name: "description", content: "Maruthi Fashions — quietly luxurious menswear. Premium shirts, denim, hoodies, ethnic wear and accessories, tailored in India." },
      { name: "author", content: "Maruthi Fashions" },
      { property: "og:title", content: "Maruthi Fashions — Style That Defines You" },
      { property: "og:description", content: "Maruthi Fashions — quietly luxurious menswear. Premium shirts, denim, hoodies, ethnic wear and accessories, tailored in India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Maruthi Fashions — Style That Defines You" },
      { name: "twitter:description", content: "Maruthi Fashions — quietly luxurious menswear. Premium shirts, denim, hoodies, ethnic wear and accessories, tailored in India." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/fe52eae3-a01f-4f75-98d9-5fe15833bdfe" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/fe52eae3-a01f-4f75-98d9-5fe15833bdfe" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-noir text-ivory antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Loader />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
    </QueryClientProvider>
  );
}
