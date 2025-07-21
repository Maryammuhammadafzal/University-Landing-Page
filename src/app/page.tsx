import Image from "next/image";
import ContactPage from "./contact/page";
import QuickActionPage from "./QuickAction/page";
import TestimonialPage from "./testimonial/page";
import TeamPage from "./team/page";

export default function Home() {
  return (
    <div className="w-full h-auto overflow-hidden">
<TeamPage/>
<TestimonialPage/>
<QuickActionPage/>
<ContactPage/>

    </div>
  );
}
