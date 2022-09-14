import Link from "next/link";

export default function Navigation() {
  return (
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <Link href="/" class="navbar-brand mb-0 h1">
          Navbar
        </Link>
      </div>
    </nav>
  );
}
