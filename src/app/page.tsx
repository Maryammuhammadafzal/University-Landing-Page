import Image from "next/image";
import ContactPage from "./contact/page";
import QuickActionPage from "./QuickAction/page";
import TestimonialPage from "./testimonial/page";
import TeamPage from "./team/page";
import BannerPage from "./banner/page";
import HowToApply from "./howtoapply/page";

export default function Home() {
  return (
    <div className="w-full h-auto overflow-hidden">
<HowToApply/>
<BannerPage/>
<TeamPage/>
<TestimonialPage/>
<QuickActionPage/>
<ContactPage/>

    </div>
  );
}
