import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const footerNav = [
  {
    title: "Categories",
    links: [
      { name: "Web3", href: "#" },
      { name: "DeFi", href: "#" },
      { name: "NFT", href: "#" },
      { name: "New Tokens", href: "#" },
      { name: "Economy", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Our Team", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "#" },
      { name: "Guides", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Support", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms & Conditions", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  },
];

const NewsletterCard: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("space-y-4 sm:col-span-2 lg:col-span-1", className)}>
      <h3 className="text-base font-semibold text-gray-900 text-center md:text-start">Newsletter</h3>
      <p className="text-sm text-gray-600 text-center md:text-start">
        Get the latest news directly to your inbox.
      </p>
      <form className="flex flex-col sm:flex-row gap-2">
        <Input type="email" placeholder="Your Email" className="flex-1" />
        <Button type="submit" className="w-full sm:w-auto">
          Subscribe
        </Button>
      </form>
      <div className="flex gap-4 mt-2 justify-center">
        <Link
          href="#"
          aria-label="Facebook"
          className="text-gray-600 hover:text-primary transition-colors"
        >
          <Facebook className="h-5 w-5" />
        </Link>
        <Link
          href="#"
          aria-label="Twitter"
          className="text-gray-600 hover:text-primary transition-colors"
        >
          <Twitter className="h-5 w-5" />
        </Link>
        <Link
          href="#"
          aria-label="LinkedIn"
          className="text-gray-600 hover:text-primary transition-colors"
        >
          <Linkedin className="h-5 w-5" />
        </Link>
        <Link
          href="#"
          aria-label="Youtube"
          className="text-gray-600 hover:text-primary transition-colors"
        >
          <Youtube className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-4 md:py-12 px-4 md:px-6 space-y-4">
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-4">
        {footerNav.map((section, index) => (
          <div key={index} className="space-y-3 text-center md:text-base">
            <h3 className="text-base font-semibold text-gray-900">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <NewsletterCard className="hidden md:block" />
      </div>
      <NewsletterCard className="block md:hidden" />

      <Separator className="my-8 bg-gray-200" />
      <div className="text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Web3News. All rights reserved.
      </div>
    </footer>
  );
}
