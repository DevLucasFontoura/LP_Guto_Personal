'use client';

import Script from 'next/script';
import Link from 'next/link';
import { useEffect } from 'react';
import styles from './InstagramFeed.module.css';

export type InstagramFeedProps = {
  /** URLs dos posts do Instagram (ex: https://www.instagram.com/p/ABC123/) */
  postUrls: string[];
  /** URL do perfil (ex: https://www.instagram.com/gutemberg.personal) — exibe card do perfil */
  profileUrl?: string;
};

function getUsernameFromProfileUrl(url: string): string {
  try {
    const path = new URL(url).pathname.replace(/^\//, '').replace(/\/$/, '');
    return path && path !== 'p' ? path : 'perfil';
  } catch {
    return 'perfil';
  }
}

function processInstagramEmbeds(): void {
  if (typeof window === 'undefined') return;
  const w = window as Window & { instgrm?: { Embeds?: { process: () => void } } };
  w.instgrm?.Embeds?.process?.();
}

export default function InstagramFeed({ postUrls, profileUrl }: InstagramFeedProps) {
  useEffect(() => {
    processInstagramEmbeds();
  }, [postUrls]);

  const username = profileUrl ? getUsernameFromProfileUrl(profileUrl) : null;

  return (
    <div className={styles.wrapper}>
      {profileUrl && username && (
        <Link
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.profileCard}
        >
          <div className={styles.profileCardIcon}>
            <InstagramIcon />
          </div>
          <span className={styles.profileCardHandle}>@{username}</span>
          <span className={styles.profileCardCta}>Ver perfil</span>
        </Link>
      )}

      {postUrls.length === 0 ? (
        <p className={styles.placeholder}>
          Adicione as URLs dos seus 3 posts favoritos em <code>home.tsx</code> (const <code>INSTAGRAM_POST_URLS</code>) para exibir o feed aqui.
        </p>
      ) : (
        <>
          <Script
            src="https://www.instagram.com/embed.js"
            strategy="lazyOnload"
            onLoad={processInstagramEmbeds}
          />
          <div className={styles.feed}>
            {postUrls.map((url) => (
              <div key={url} className={styles.embedWrap}>
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={url}
                  data-instgrm-version="14"
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}
