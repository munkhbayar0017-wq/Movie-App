import { Header } from "./_features/Header";
import { HeroSection } from "./_features/home/HeroSection";
import { UpcomingList } from "./_features/home/UpcomingList";
import { PopularList } from "./_features/home/PopularList";
import { TopRatedList } from "./_features/home/TopRatedList";
import { Footer } from "./_features/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center box-border">
      <Header />
      <HeroSection />
      <UpcomingList />
      <PopularList />
      <TopRatedList />
      <Footer />
    </div>
  );
}
