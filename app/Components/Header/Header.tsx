import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-blue-500">
      <div className="flex justify-between items-center gap-4">
        <Link href="/" className="text-black text-2xl font-bold hover:text-white">Home</Link>
        <Link href="/services" className="text-black text-2xl font-bold hover:text-white">Services</Link>
        <Link href="/about" className="text-black text-2xl font-bold hover:text-white">About</Link>
        <Link href="/contact" className="text-black text-2xl font-bold hover:text-white">Contact</Link>
      </div>
      <div className="flex justify-between items-center gap-4">
        <Link href="/login" className="text-black text-2xl font-bold hover:text-white">Login</Link>
        <Link href="/register" className="text-black text-2xl font-bold hover:text-white">Register</Link>
      </div>
    </div>
  );
}
