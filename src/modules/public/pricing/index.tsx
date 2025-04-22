import { Navbar } from "../landing/components/navbar";
import { PricingCard } from "./components/pricingCard";

export const pricingOptions: Pricing[] = [
  {
    title: "Starter",
    price: "10",
    monthlyCalls: "100 API calls/month",
    features: [
      "Basic fund transfers",
      "Simple invoice generation",
      "View balance",
      "Sandbox access",
    ],
    isPopular: false,
    buttonText: "Start for Free",
    plan: "starter",
  },
  {
    title: "Pro",
    price: "29",
    monthlyCalls: "50,000 API calls/month",
    features: [
      "Advanced fund transfer features",
      "Custom branding on invoices",
      "Webhook support",
      "Email support",
      "Analytics dashboard",
    ],
    isPopular: true,
    buttonText: "Upgrade to Pro",
    plan: "pro",
  },
  {
    title: "Business",
    price: "99",
    monthlyCalls: "500,000 API calls/month",
    features: [
      "Multi-user access",
      "Priority email & chat support",
      "Detailed transaction logs",
      "SLA guarantees",
      "Dedicated account manager (optional add-on)",
    ],
    isPopular: false,
    buttonText: "Choose Business",
    plan: "business",
  },
  // {
  //   title: "Enterprise",
  //   price: "Custom",
  //   monthlyCalls: "Unlimited API calls",
  //   features: [
  //     "Custom endpoints and features",
  //     "Dedicated support team",
  //     "Onboarding assistance",
  //     "Compliance and audit reports",
  //   ],
  //   isPopular: false,
  //   buttonText: "Contact Sales",
  //   plan: "enterprise",
  // },
];

export const Pricing = () => {
  return (
    <main className="w-full   min-h-screen bg-surface-2">
      <div className="flex flex-col gap-8 max-w-[1110px] mx-auto w-full px-4">
        <Navbar />
        <div className="flex flex-col max-w-4xl w-full  mx-auto gap-8 py-6">
          <h2 className="text-[40px] leading-[40px] text-primary-text font-semibold">
            Pricing
          </h2>
          <div className="flex gap-6 flex-col md:flex-row md:flex-wrap">
            {pricingOptions.map((pricing: Pricing) => (
              <PricingCard
                title={pricing.title}
                monthlyCalls={pricing.monthlyCalls}
                isPopular={pricing.isPopular}
                buttonText={pricing.buttonText}
                plan={pricing.plan}
                price={pricing.price}
                features={pricing.features}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
