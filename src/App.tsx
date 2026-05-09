/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StickyHeader } from "./components/StickyHeader";
import { Hero } from "./components/Hero";
import { WhyJoin } from "./components/WhyJoin";
import { Eligibility } from "./components/Eligibility";
import { HowItWorks } from "./components/HowItWorks";
import { ReferralSystem } from "./components/ReferralSystem";
import { Rewards } from "./components/Rewards";
import { Urgency } from "./components/Urgency";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans antialiased text-text-brand bg-background-brand">
      <StickyHeader />
      <Hero />
      <WhyJoin />
      <Eligibility />
      <HowItWorks />
      <ReferralSystem />
      <Rewards />
      <Urgency />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
