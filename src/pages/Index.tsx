
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageUpload from "@/components/ImageUpload";
import AmphibianResult from "@/components/AmphibianResult";
import UsageGuide from "@/components/UsageGuide";
import { identifyAmphibian, AmphibianData } from "@/services/geminiService";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AmphibianData | null>(null);

  const handleImageSelect = (file: File) => {
    setSelectedFile(file);
    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
    setResult(null);
  };

  const handleClearImage = () => {
    setSelectedImage(null);
    setSelectedFile(null);
    setResult(null);
  };

  const handleIdentify = async () => {
    if (!selectedFile) {
      toast.error("Please select an image first");
      return;
    }

    setIsLoading(true);
    try {
      const amphibianData = await identifyAmphibian(selectedFile);
      setResult(amphibianData);
      toast.success("Amphibian identified successfully!");
    } catch (error) {
      console.error("Identification failed:", error);
      toast.error("Failed to identify amphibian. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-green-600 animate-gradient-x">
      <div className="min-h-screen bg-gradient-to-t from-blue-900/20 to-green-900/20">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Amphi Vision
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-2">
              AI-Powered Amphibian Identification
            </p>
            <p className="text-lg text-white/80">
              Discover and learn about amphibians through advanced artificial intelligence
            </p>
          </div>

          {/* Image Upload Section */}
          <div className="mb-12">
            <ImageUpload
              onImageSelect={handleImageSelect}
              selectedImage={selectedImage}
              onClearImage={handleClearImage}
            />
            
            {selectedImage && !result && (
              <div className="text-center mt-6">
                <Button
                  onClick={handleIdentify}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 text-lg"
                >
                  {isLoading ? "Identifying..." : "Identify Amphibian"}
                </Button>
              </div>
            )}
          </div>

          {/* Results Section */}
          {result && selectedImage && (
            <div className="mb-12">
              <AmphibianResult
                data={result}
                image={selectedImage}
              />
              
              <div className="text-center mt-6">
                <Button
                  onClick={handleClearImage}
                  variant="outline"
                  className="bg-white/80 hover:bg-white"
                >
                  Identify Another Amphibian
                </Button>
              </div>
            </div>
          )}

          {/* Usage Guide */}
          {!result && (
            <UsageGuide />
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
