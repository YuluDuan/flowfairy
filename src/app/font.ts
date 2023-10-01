import { Quicksand, Roboto, Inter, Days_One} from "next/font/google";

export const quicksand = Quicksand({
  weight: ['400', '700', '500', '300', '600'],
  subsets: ["latin"],
  display: "swap",
});

export const roboto = Roboto({
  weight: ['400', '700', '500'],
  subsets: ['latin'],
  display: "swap",
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const days_one = Days_One({
  weight: ['400'],
  subsets: ['latin'],
  display: "swap",
})