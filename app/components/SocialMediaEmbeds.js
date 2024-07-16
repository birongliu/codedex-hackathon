"use client"
import { useEffect } from "react";
import styles from "./SocialMediaEmbeds.module.css";

const SocialMediaEmbeds = () => {
  useEffect(() => {
    // Load Instagram script
    const instagramScript = document.createElement("script");
    instagramScript.async = true;
    instagramScript.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(instagramScript);

    // Ensure Instagram script is re-executed
    const instagramCallback = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    instagramScript.onload = instagramCallback;

    // Load Facebook script
    const facebookScript = document.createElement("script");
    facebookScript.async = true;
    facebookScript.defer = true;
    facebookScript.crossOrigin = "anonymous";
    facebookScript.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0";
    document.body.appendChild(facebookScript);

    return () => {
      // Clean up scripts
      document.body.removeChild(instagramScript);
      document.body.removeChild(facebookScript);
    };
  }, []);

  return (
    <section className={styles.socialMediaSection}>
      <h2>Check out our Socials</h2>
      <div className={styles.socialMediaPosts}>
        <div className={styles.instagramRow}>
          {/* Instagram Embed */}
          <div className={`${styles.post} ${styles.instagram}`}>
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/p/C9cnupdAEhg/?img_index=1"
              data-instgrm-version="12"
            >
              <a href="https://www.instagram.com/p/C9cnupdAEhg/?img_index=1">Instagram Post</a>
            </blockquote>
          </div>

          <div className={`${styles.post} ${styles.instagram}`}>
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/p/C2fNzMzgHAr/"
              data-instgrm-version="12"
            >
              <a href="https://www.instagram.com/p/C2fNzMzgHAr/">Instagram Post</a>
            </blockquote>
          </div>

          <div className={`${styles.post} ${styles.instagram}`}>
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/p/CjN53CiAHy1/"
              data-instgrm-version="12"
            >
              <a href="https://www.instagram.com/p/CjN53CiAHy1/">Instagram Post</a>
            </blockquote>
          </div>

          <div className={`${styles.post} ${styles.instagram}`}>
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/p/C9SsumKP9i-/"
              data-instgrm-version="12"
            >
              <a href="https://www.instagram.com/p/C9SsumKP9i-/">Instagram Post</a>
            </blockquote>
          </div>
        </div>
        
        <div className={styles.facebookRow}>
          {/* Facebook Embed */}
          <div className={`${styles.post} ${styles.facebook}`}>
            <div
              className="fb-post"
              data-href="https://www.facebook.com/photo/?fbid=816766773783329&set=pb.100063500412343.-2207520000"
              data-width="500"
            ></div>
          </div>

          <div className={`${styles.post} ${styles.facebook}`}>
            <div
              className="fb-post"
              data-href="https://www.facebook.com/photo/?fbid=935565868570085&set=pb.100063500412343.-2207520000"
              data-width="500"
            ></div>
          </div>

          <div className={`${styles.post} ${styles.facebook}`}>
            <div
              className="fb-post"
              data-href="https://www.facebook.com/photo.php?fbid=691005973026077&set=pb.100063500412343.-2207520000&type=3"
              data-width="500"
            ></div>
          </div>

          <div className={`${styles.post} ${styles.facebook}`}>
            <div
              className="fb-post"
              data-href="https://www.facebook.com/100063500412343/videos/261666879298906?__so__=permalink"
              data-width="500"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaEmbeds;
