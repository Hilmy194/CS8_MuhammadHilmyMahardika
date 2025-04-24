import logo from '/src/assets/amd-logo.svg'; 

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white text-black sticky top-0 z-50 shadow-md">
      <img src={logo} alt="AMD Logo" className="h-8" />
      <ul className="flex gap-6 font-medium">
        {/* Menu Navigasi */}
        <li><a href="#hero" className="hover:text-amdRed">Overview</a></li>
        <li><a href="#enterprise-ai" className="hover:text-amdRed">Enterprise AI</a></li>
        <li><a href="#solutions" className="hover:text-amdRed">Solutions</a></li>
        <li><a href="#featured-products" className="hover:text-amdRed">Products</a></li>
      </ul>
    </nav>
  );
}