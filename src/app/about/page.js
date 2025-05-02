import data from '../../../public/data.json';
import Link from 'next/link';

export default function AboutPage() {
  const { departments, contact } = data;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">关于学生会</h1>
      <p className="text-lg mb-8">
        欢迎来到学生会招新平台！以下是各部门的详细介绍：
      </p>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map((dept, index) => (
          <Link href={`/department/${dept.slug}`} key={index}>
            <div
              className={`bg-white shadow-md rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow ${
                dept.name === '主席团' ? 'md:col-span-2' : ''
              }`}
            >
              <h2 className="text-2xl font-bold mb-2">{dept.name}</h2>
              <p className="text-gray-700 mb-4">{dept.description}</p>
            </div>
          </Link>
        ))}
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">联系我们</h2>
        <p>邮箱：{contact.email}</p>
        <p>电话：{contact.phone}</p>
      </section>
    </div>
  );
}