import { FaqItem } from "../faqItem";
import styles from "./faqSection.module.css";

export default function FaqSection() {
  const faqData = [
    {
      id: 1,
      title: "What is StreamVibe?",
      content:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
    },
    {
      id: 2,
      title: "How much does StreamVibe cost?",
      content:
        "StreamVibe offers different pricing plans. Visit our website for details."
    },
    {
      id: 3,
      title: "What content is available on StreamVibe?",
      content:
        "You can watch movies, TV shows, and exclusive content on StreamVibe."
    },
    {
      id: 4,
      title: "How can I watch StreamVibe?",
      content: "StreamVibe is available on web, mobile apps, and smart TVs."
    },
    {
      id: 5,
      title: "How do I sign up for StreamVibe?",
      content:
        "You can sign up on our website by creating an account and choosing a plan."
    },
    {
      id: 6,
      title: "What is the StreamVibe free trial?",
      content:
        "StreamVibe offers a free trial for new users to explore the platform."
    },
    {
      id: 7,
      title: "How do I contact StreamVibe customer support?",
      content: "You can contact support through our website or via email."
    },
    {
      id: 8,
      title: "What are the StreamVibe payment methods?",
      content:
        "We accept credit cards, PayPal, and other online payment methods."
    }
  ];

  return (
    <section id="faq" className={styles.faqSectionContainer}>
      <div className={styles.headingContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
          <p className={styles.faqHeading}>
            Got questions? We&apos;ve got answers! Check out our FAQ section to
            find answers to the most common questions about StreamVibe.
          </p>
        </div>
        <button className={styles.faqButton}>Ask a Question</button>
      </div>
      <div className={styles.faqItemsContainer}>
        {faqData.map((item) => (
          <div key={item.id} className={styles.item}>
            <FaqItem {...item} />           
          </div>
        ))}
   
      </div>
    </section>
  );
}
