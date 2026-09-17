import Image from "next/image";
import Link from "next/link";

/** The supplied reference preserves the exact brand artwork inside this crop. */
export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Revolt Healthcare Alliance home">
      <span className="brand-crop" aria-hidden="true">
        <Image src="/images/reference.png" alt="" width={1920} height={1080} sizes="100vw" loading="eager" className="brand-reference" />
      </span>
    </Link>
  );
}
