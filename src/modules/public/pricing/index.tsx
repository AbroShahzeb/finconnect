import { useQuery } from "@tanstack/react-query";
import { getSubscription } from "../../../api/subscription";
import { Navbar } from "../landing/components/navbar";
import { PricingCard } from "./components/pricingCard";
import { Link } from "react-router-dom";
import ROUTES from "../../../constants/routes";

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
    buttonText: "Subscribe",
    plan: "starter",
  },
  {
    title: "Pro",
    price: "20",
    monthlyCalls: "50,000 API calls/month",
    features: [
      "Advanced fund transfer features",
      "Custom branding on invoices",
      "Webhook support",
      "Email support",
      "Analytics dashboard",
    ],
    isPopular: true,
    buttonText: "Subscribe",
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
    buttonText: "Subscribe",
    plan: "business",
  },
];

type Subscription = {
  name: string;
  price: number;
  status: "active" | "cancelled" | "expired";
};

export const Pricing = () => {
  const { data } = useQuery({
    queryKey: ["subscription"],
    queryFn: getSubscription,
  });

  const subscription = data?.data as Subscription;

  return (
    <main className="w-full   min-h-screen bg-surface-2">
      <div className="flex flex-col gap-8 max-w-[1110px] mx-auto w-full px-4">
        <Navbar />
        <div className="flex flex-col max-w-4xl w-full  mx-auto gap-8 py-6">
          <h2 className="text-[40px] leading-[40px] text-primary-text font-semibold">
            Pricing
          </h2>
          {subscription && subscription.status === "active" && (
            <p className="text-primary-text text-preset-3 mt-1 mb-3">
              You already have an active{" "}
              <span className="text-blue-500 font-semibold">
                {subscription.name}
              </span>{" "}
              subscription. Please go to{" "}
              <Link
                to={ROUTES.DASHBOARD}
                className="text-blue-500 font-semibold underline"
              >
                dashboard
              </Link>{" "}
              to use our awesome APIs.
            </p>
          )}
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
                subscriptionName={subscription?.name}
                subscriptionPrice={subscription?.price}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
