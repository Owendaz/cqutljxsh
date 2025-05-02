import './globals.css';
import Navbar from './components/Navbar'; // 确保路径正确
import { ReactNode } from 'react';

export const metadata = {
  title: '学生会招新平台',
  description: '学生会部门介绍与招新申请平台',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}