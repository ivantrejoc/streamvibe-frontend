import Image from "next/image";
import styles from "./devicesSection.module.css";

export default function DevicesSection() {
  const devices = [
    {
      name: "Smartphones",
      url: "/devices-icons/mobile-icon.png",
      description:
        "Enjoy StreamVibe anywhere with our Android and iOS app. Seamless streaming at your fingertips."
    },
    {
      name: "Tablet",
      url: "/devices-icons/tablet-icon.png",
      description:
        "Experience immersive viewing on your tablet. Perfect for binge-watching your favorite shows and movies on a bigger screen."
    },
    {
      name: "Smart TV",
      url: "/devices-icons/smart-tv-icon.png",
      description:
        "Take entertainment to the next level with StreamVibe on your Smart TV. Enjoy HD and 4K streaming for a cinematic experience at home."
    },
    {
      name: "Laptops",
      url: "/devices-icons/laptop-icon.png",
      description:
        "Access StreamVibe directly from your browser on a laptop or PC. Smooth playback with no downloads required."
    },
    {
      name: "Gaming Consoles",
      url: "/devices-icons/gaming-icon.png",
      description:
        "StreamVibe is available on gaming consoles for a high-performance streaming experience. Enjoy movies and shows on your big screen."
    },
    {
      name: "VR Headsets",
      url: "/devices-icons/vr-icon.png",
      description:
        "Immerse yourself in a whole new world with StreamVibe on VR headsets. Enjoy 360° content like never before."
    }
  ];

  return (
    <section id="devices" className={styles.devicesMainContainer}>
      <div className={styles.textContainer}>
        <h2 className={styles.deviceTitle}>
          We Provide you streaming experience across various devices.
        </h2>
        <p className={styles.deviceHeading}>
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </p>
      </div>
      <div className={styles.deviceCardsContainer}>
        {devices?.map((device, index) => (
          <div key={index} className={styles.deviceCard}>
            <div className={styles.cardHeadingContainer}>
              <Image
                src={device.url}
                alt="device-icon"
                width={36}
                height={36}
              />
              <h3 className={styles.cardTitle}>{device.name}</h3>
            </div>
            <p className={styles.cardDescription}>{device.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
