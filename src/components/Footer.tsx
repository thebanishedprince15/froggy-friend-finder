
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs">AV</span>
          </div>
          <span className="text-lg font-bold">Amphi Vision</span>
        </div>
        
        <p className="text-gray-300 mb-2">
          Revolutionizing amphibian identification through artificial intelligence
        </p>
        
        <div className="text-sm text-gray-400">
          <p>© 2024 Amphi Vision. Powered by Google Gemini AI.</p>
          <p className="mt-1">Making amphibian identification accessible to everyone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
