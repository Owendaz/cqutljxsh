import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">学生会招新平台</h1>
        <div>
          <Link href="/" className="mx-4 hover:underline">
            首页
          </Link>
          <Link href="/about" className="mx-4 hover:underline">
            关于我们
          </Link>
        </div>
      </div>
    </nav>
  );
}