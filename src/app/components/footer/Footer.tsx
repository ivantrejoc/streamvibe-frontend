import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerMainContainer}>
      <div className={styles.footerLinksContainer}>
        <div className={styles.footerSection}>
          <h5 className={styles.linksHeading}>Home</h5>
          <div className={styles.linksContainer}>
            <Link href={"/"} className={styles.link}>
              Categories
            </Link>
            <Link href={"/"} className={styles.link}>
              Devices
            </Link>
            <Link href={"/"} className={styles.link}>
              Pricing
            </Link>
            <Link href={"/"} className={styles.link}>
              FAQ
            </Link>
          </div>
        </div>
        <div className={styles.footerSection}>
          <h5 className={styles.linksHeading}>Movies</h5>
          <div className={styles.linksContainer}>
            <Link href={"/"} className={styles.link}>
              Genres
            </Link>
            <Link href={"/"} className={styles.link}>
              Trending
            </Link>
            <Link href={"/"} className={styles.link}>
              New Release
            </Link>
            <Link href={"/"} className={styles.link}>
              Popular
            </Link>
          </div>
        </div>
        <div className={styles.footerSection}>
          <h5 className={styles.linksHeading}>Shows</h5>
          <div className={styles.linksContainer}>
            <Link href={"/"} className={styles.link}>
              Genres
            </Link>
            <Link href={"/"} className={styles.link}>
              Trending
            </Link>
            <Link href={"/"} className={styles.link}>
              New Release
            </Link>
            <Link href={"/"} className={styles.link}>
              Popular
            </Link>
          </div>
        </div>
        <div className={styles.footerSection}>
          <h5 className={styles.linksHeading}>Support</h5>
          <div className={styles.linksContainer}>
            <Link href={"/"} className={styles.link}>
              Contact us
            </Link>
          </div>
        </div>
        <div className={styles.footerSection}>
          <h5 className={styles.linksHeading}>Subscription</h5>
          <div className={styles.linksContainer}>
            <Link href={"/"} className={styles.link}>
              Plans
            </Link>
            <Link href={"/"} className={styles.link}>
              Features
            </Link>
          </div>
        </div>
        <div className={styles.footerSection}>
          <h5 className={styles.linksHeading}>Connect with us</h5>
          <div className={styles.buttonsContainer}>
            <Link href={"/"} className={styles.socialMediaButton}>
              <Image
                width={24}
                height={24}
                loading="lazy"
                src={"/social-media-icons/fb-icon.png"}
                alt={"facebook-icon"}
              />
            </Link>
            <Link href={"/"} className={styles.socialMediaButton}>
              <Image
                width={24}
                height={24}
                loading="lazy"
                src={"/social-media-icons/tw-icon.png"}
                alt={"facebook-icon"}
              />
            </Link>
            <Link href={"/"} className={styles.socialMediaButton}>
              <Image
                width={24}
                height={24}
                loading="lazy"
                src={"/social-media-icons/linkedin-icon.png"}
                alt={"facebook-icon"}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <p>@2023 streamvib, All Rights Reserved</p>
        <div className={styles.bottomLinksContainer}>
          <Link href={"/"} className={styles.bottomLink}>
            Terms of Use
          </Link>
          <Link href={"/"} className={styles.bottomLink}>
            Privacy Policy
          </Link>
          <Link href={"/"} className={styles.bottomLink}>
            Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
