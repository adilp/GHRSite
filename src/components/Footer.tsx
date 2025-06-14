export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-6 py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Rotary Club of [Your City]. All Rights Reserved.</p>
        <p className="text-sm text-gray-400">Part of Rotary International</p>
      </div>
    </footer>
  );
}