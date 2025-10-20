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
      <HeroSection
        title={"Wicked"}
        rating={"6.9"}
        description={
          "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. "
        }
      />
      <UpcomingList />
      <PopularList />
      <TopRatedList />
      <Footer />
    </div>
  );
}
