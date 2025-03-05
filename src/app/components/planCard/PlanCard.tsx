// import Link from "next/link";
// import styles from "./planCard.module.css";

// interface Plan {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
// }
// export default function PlanCard({name, description, price}: Plan) {
//   return (
//     <div className={styles.mainCardContainer}>
//       <div className={styles.textContainer}>
//         <h3 className={styles.cardTitle}>{name}</h3>
//         <p className={styles.cardParagraph}>
//           {description}
//         </p>
//       </div>
//       <div className={styles.priceContainer}>
//         <p className={styles.price}>{`$${price}`}</p>
//         <p className={styles.period}>/month</p>
//       </div>
//       <div className={styles.buttonsContainer}>
//         <Link className={styles.trialButton} href={""}>
//           Start Free Trial
//         </Link>
//         <Link href={""} className={styles.selectPlanButton}>
//           Choose Plan
//         </Link>
//       </div>
//     </div>
//   );
// }


import Link from "next/link";
import styles from "./planCard.module.css";

interface Plan {
  id: number;
  name: string;
  description: string;
  price: number;
  period: "month" | "year";
}

export default function PlanCard({ name, description, price, period }: Plan) {
  return (
    <div className={styles.mainCardContainer}>
      <div className={styles.textContainer}>
        <h3 className={styles.cardTitle}>{name}</h3>
        <p className={styles.cardParagraph}>{description}</p>
      </div>
      <div className={styles.priceContainer}>
        <p className={styles.price}>${price}</p>
        <p className={styles.period}>/{period}</p>
      </div>
      <div className={styles.buttonsContainer}>
        <Link className={styles.trialButton} href={""}>
          Start Free Trial
        </Link>
        <Link href={""} className={styles.selectPlanButton}>
          Choose Plan
        </Link>
      </div>
    </div>
  );
}
