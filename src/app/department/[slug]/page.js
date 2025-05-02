import data from '../../../../public/data.json';
import Image from 'next/image';

export async function generateStaticParams() {
  return data.departments.map((department) => ({
    slug: department.slug,
  }));
}

export default function DepartmentPage({ params }) {
  const { slug } = params;

  const department = data.departments.find((dept) => dept.slug === slug);

  if (!department) {
    return <div>部门未找到。</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 顶部标题区域 */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-4">{department.name}</h1>
        <p className="text-xl">{department.description}</p>
      </div>

     

      {/* 部门介绍 */}
      <div className="mt-8 bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-4">部门介绍</h2>
        <p className="text-gray-800 leading-relaxed">{department.introduction}</p>
      </div>

      {/* 招新要求 */}
      {department.requirements && (
        <div className="mt-8 bg-gray-100 p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold mb-4">招新要求</h2>
          <ul className="list-disc list-inside text-gray-800 leading-relaxed">
            {department.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}