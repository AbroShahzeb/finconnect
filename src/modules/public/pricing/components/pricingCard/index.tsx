import { Button } from "../../../../../generalComponents";

export const PricingCard = ({
  title,
  features,
  monthlyCalls,
  isPopular,
  buttonText,
  price,
}: Pricing) => {
  return (
    <div
      className={`p-6 flex-1 flex flex-col gap-8 rounded-xl bg-neutral-50 dark:bg-neutral-900 border  ${
        isPopular
          ? "border-blue-200 dark:border-blue-900/25 shadow-2xl shadow-blue-200 dark:shadow-blue-900/25"
          : "border-neutral-100 dark:border-neutral-800"
      }`}
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-preset-1 text-primary-text font">
          {title}{" "}
          {isPopular && (
            <span className="text-preset-4 font-medium text-blue-500">
              (Popular)
            </span>
          )}
        </h2>
        <p className="text-[32px] leading-[32px] font-semibold text-primary-text">
          {price}
        </p>
      </div>

      <div className="w-full h-[1px] bg-neutral-200 dark:bg-neutral-700"></div>

      <div className="flex-1 flex flex-col gap-4">
        <div className="text-preset-3 font-medium">Features</div>
        <div className="flex flex-col gap-3 text-secondary-text">
          <div>{monthlyCalls}</div>
          {features.map((feature: string) => (
            <p>{feature}</p>
          ))}
        </div>
      </div>

      <div className="w-full h-[1px] bg-neutral-200 dark:bg-neutral-700"></div>

      <Button label={buttonText} variant="outlined" />
    </div>
  );
};
