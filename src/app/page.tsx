import Image from "next/image";
import ContactPage from "./contact/page";
import QuickActionPage from "./QuickAction/page";
import TestimonialPage from "./testimonial/page";

export default function Home() {
  return (
    <div className="w-full h-auto overflow-hidden">
<TestimonialPage/>
<QuickActionPage/>
<ContactPage/>
    </div>
  );
}
