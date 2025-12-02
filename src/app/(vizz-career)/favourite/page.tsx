import { Metadata } from "next";
import PageFavourite from "@/components/pages/favourite/FavouritePage";

export const metadata: Metadata = {
  title: "TOP_お気に入り",
};

export default function Home() {
  return <PageFavourite />;
}
