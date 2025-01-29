'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto text-center">
        <p>© {new Date().getFullYear()} FashionTrend. All Rights Reserved.</p>
      </div>
    </footer>
  );
}