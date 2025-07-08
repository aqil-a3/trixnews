import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
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
  ]

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {footerNav.map((section, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link href={link.href} className="text-gray-600 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="space-y-4 lg:col-span-1">
          <h3 className="text-lg font-semibold text-gray-900">Newsletter</h3>
          <p className="text-sm text-gray-600">Get the latest news directly to your inbox.</p>
          <form className="flex gap-2">
            <Input type="email" placeholder="Your Email" className="flex-1" />
            <Button type="submit">Subscribe</Button>
          </form>
          <div className="flex space-x-4 mt-4">
            <Link href="#" aria-label="Facebook" className="text-gray-600 hover:text-primary transition-colors">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-gray-600 hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Youtube" className="text-gray-600 hover:text-primary transition-colors">
              <Youtube className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <Separator className="my-8 bg-gray-200" />
      <div className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Web3News. All rights reserved.
      </div>
    </footer>
  )
}
