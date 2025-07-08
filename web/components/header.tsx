import Link from "next/link"
import SearchInput from "./search-input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { getUserSession, signOut } from "@/app/actions/auth" // Import auth actions
import { Button } from "@/components/ui/button" // Import Button component

export default async function Header() {
  const session = await getUserSession() // Get user session

  const mainNavLinks = [
    { name: "Home", href: "/" },
    { name: "ICO Presales", href: "/ico-presale" },
    { name: "Airdrops", href: "/airdrops" },
  ]

  const dropdownLinks = [
    { name: "Articles", href: "/articles" },
    { name: "Guides", href: "/guides" },
    { name: "Predictions", href: "/predictions" },
    { name: "Web3 Tools", href: "/web3-tools" },
  ]

  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Trixnews.com
        </Link>
      </div>
      <nav className="flex-1 flex justify-center">
        <ul className="flex space-x-6">
          {mainNavLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-gray-600 hover:text-primary transition-colors whitespace-nowrap uppercase"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-600 hover:text-primary transition-colors whitespace-nowrap focus:outline-none uppercase">
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {dropdownLinks.map((link) => (
                  <DropdownMenuItem key={link.name} asChild>
                    <Link href={link.href} className="uppercase">
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>
      </nav>
      <div className="flex-shrink-0 flex items-center gap-4">
        <SearchInput />
        {session ? (
          <form action={signOut}>
            <Button type="submit" variant="outline">
              Logout
            </Button>
          </form>
        ) : (
          <Button>
            <Link href="/login">Login</Link>
          </Button>
        )}
      </div>
    </header>
  )
}
