import { useState } from "react";
import { PlanCard } from "../planCard";
import styles from "./pricingSection.module.css";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const periodHandler = (isAnnual: boolean) => {
    setIsYearly(isAnnual);
  };

  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      description:
        "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
      monthlyPrice: 9.99,
      yearlyPrice: 99.99
    },
    {
      id: 2,
      name: "Standard Plan",
      description:
        "Access to a wider selection of movies and shows, including most new releases and exclusive content",
      monthlyPrice: 12.99,
      yearlyPrice: 129.99
    },
    {
      id: 3,
      name: "Premium Plan",
      description:
        "Access to the widest selection of movies and shows, including all new releases and Offline Viewing",
      monthlyPrice: 14.99,
      yearlyPrice: 149.99
    }
  ];

  return (
    <section id="pricing" className={styles.pricingMainContainer}>
      <div className={styles.headingContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            Choose the plan that&apos;s right for you
          </h2>
          <p className={styles.paragraph}>
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </p>
        </div>
        <div className={styles.tabsContainer}>
          <button
            className={`${styles.tabButton} ${
              !isYearly ? styles.isActive : ""
            }`}
            onClick={() => periodHandler(false)}
          >
            Monthly
          </button>
          <button
            className={`${styles.tabButton} ${isYearly ? styles.isActive : ""}`}
            onClick={() => periodHandler(true)}
          >
            Yearly
          </button>
        </div>
      </div>
      <div className={styles.plansContainer}>
        {plans?.map((plan) => (
          <PlanCard
            key={plan.id}
            {...plan}
            price={isYearly ? plan.yearlyPrice : plan.monthlyPrice}
            period={isYearly ? "year" : "month"}
          />
        ))}
      </div>
    </section>
  );
}
