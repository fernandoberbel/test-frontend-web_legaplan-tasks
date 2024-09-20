import "./header.scss";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <Image src="/logo.svg" alt="FocalPoint Logo" width={150} height={36} />
      </Link>

      <h1>Bem-vindo de volta, Marcus</h1>

      <span>Segunda, 01 de dezembro de 2025</span>
    </header>
  );
}
