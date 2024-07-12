import styles from "./page.module.css";
import Image from "next/image";

export default function Page() {
  return (
    <main className={styles.main}>
        <div className={styles.container}>
            <div className={styles.img}>
                <Image
                    src="/sipnplay_cropped.png"
                    alt="sipnplay logo"
                    width={100}
                    height={100}
                    priority
                />
            </div>

            <div className={styles.title}>
            <h1>Our Story</h1>
            </div>
            <p className={styles.description}>
            Founder, Jonathan Li, shares a passion for board games, boba, and delicious food, 
            so he combined them all to become Sip & Play, Park Slope’s first board game cafe.  
            It is a straightforward concept, come in with your friends and family to play any 
            board game from our library of 300+ games! We hope when you visit, you also enjoy 
            our coffee, espresso, boba, sandwiches, and snacks! 
            </p>

            <div className={styles.img}>
            <Image
                src="/about_img.jpg"
                alt="coffee and scrabble"
                width={900}
                height={600}
                priority
                // layout="responsive"
            />
            </div>

            
        </div>

    </main>
  );
}