import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

export default function HelpSection({ className = '' }) {
  return (
    <section className="px-4 pt-16">
      <div
        className={clsx(
          'mx-auto max-w-7xl rounded-3xl bg-white p-4 py-10 text-black dark:bg-black dark:text-white lg:p-24 lg:py-20',
          className
        )}
      >
        <h2 className="mb-12 text-center lg:text-3xl">
          How can we help you today?
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <h3 className="my-3">Book a Demo</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Contact us for a demo. We are looking forward to connecting with
              you.
            </p>
            <Link
              href="https://getblox.ai/the-blox-product/"
              className="text-primary dark:text-primary-100"
            >
              Schedule a Call &rarr;
            </Link>
          </div>

          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <h3 className="my-3">Resources</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Explore our blogs, podcasts, case studies, expert POVs, analyst
              reports and more, and learn how AI can add value to your business.
            </p>
            <Link
              href="https://getblox.ai/resources/"
              className="text-primary dark:text-primary-100"
            >
              Visit Us &rarr;
            </Link>
          </div>

          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <h3 className="my-3">Privacy Policy</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              If you do not agree with this Privacy Policy Statement, do not
              access, use, or view our website.
            </p>
            <Link href="/faq" className="text-primary dark:text-primary-100">
              View Policy &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
