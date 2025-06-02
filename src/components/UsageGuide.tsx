
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Upload, Info, BookOpen } from "lucide-react";

const UsageGuide = () => {
  const guideItems = [
    {
      icon: Camera,
      title: "Take Photo",
      description: "Use your device camera to capture amphibians in their natural habitat. Ensure good lighting and focus for best results."
    },
    {
      icon: Upload,
      title: "Upload Image",
      description: "Upload existing photos from your gallery. High-quality images with clear details work best for identification."
    },
    {
      icon: Info,
      title: "AI Analysis",
      description: "Our advanced AI analyzes your image using Google Gemini to identify the amphibian species with detailed information."
    },
    {
      icon: BookOpen,
      title: "Learn More",
      description: "Discover comprehensive details about habitat, diet, behavior, and conservation status of identified amphibians."
    }
  ];

  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
          How to Use Amphi Vision
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Follow these simple steps to identify amphibians with high accuracy using our AI-powered identification system.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {guideItems.map((item, index) => (
          <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg text-gray-800">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm text-center">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UsageGuide;
