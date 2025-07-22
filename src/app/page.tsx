
import ContactPage from "./contact/page";
import QuickActionPage from "./QuickAction/page";
import TestimonialPage from "./testimonial/page";
import TeamPage from "./team/page";
import BannerPage from "./banner/page";
import HowToApply from "./howtoapply/page";
import ChoosePage from "./choose/page";
import ProgramsPage from "./programs/page";


export default function Home() {
  return (
    <div className="w-full h-auto overflow-hidden">
     
      <ProgramsPage />
      <ChoosePage />
      <HowToApply />
      <BannerPage />
      <TeamPage />
      <TestimonialPage />
      <QuickActionPage />
      <ContactPage />

    </div>
  );
}
