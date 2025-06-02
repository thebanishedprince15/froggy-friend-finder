
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Upload, Info, BookOpen } from "lucide-react";

const Guide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-green-600 animate-gradient-x">
      <div className="min-h-screen bg-gradient-to-t from-blue-900/20 to-green-900/20">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                User Guide
              </h1>
              <p className="text-xl text-white/90">
                Everything you need to know about using Amphi Vision
              </p>
            </div>

            <div className="space-y-8">
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Getting Started
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Follow these simple steps to identify amphibians with high accuracy using our AI-powered system:
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">Taking Great Photos</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Ensure good lighting (natural light works best)</li>
                    <li>• Get as close as possible while maintaining focus</li>
                    <li>• Include the entire amphibian in the frame</li>
                    <li>• Keep the background simple and uncluttered</li>
                    <li>• Hold the camera steady to avoid blur</li>
                    <li>• Try to capture distinctive features like skin texture and coloration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <Info className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">Best Results Tips</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Photograph live amphibians in their natural habitat when possible</li>
                    <li>• Capture multiple angles if the amphibian cooperates</li>
                    <li>• Include scale references (like coins or hands) for size context</li>
                    <li>• Note the location and habitat where found (wetland, forest, etc.)</li>
                    <li>• Document time of day and weather conditions</li>
                    <li>• Focus on unique markings, patterns, or colorations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">Understanding Results</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our AI provides comprehensive identification results along with detailed information about each amphibian species. Results include:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Common and scientific names for accurate identification</li>
                    <li>• Family classification and taxonomic information</li>
                    <li>• Habitat preferences and geographic distribution</li>
                    <li>• Diet and feeding behaviors</li>
                    <li>• Conservation status and protection needs</li>
                    <li>• Physical characteristics and behavioral traits</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <Upload className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">Amphibian Photography Ethics</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Always prioritize the amphibian's welfare over getting the perfect photo</li>
                    <li>• Avoid handling amphibians with bare hands (their skin is sensitive)</li>
                    <li>• Don't move amphibians from their natural locations</li>
                    <li>• Be quiet and move slowly to avoid stressing the animals</li>
                    <li>• Respect breeding sites and nesting areas</li>
                    <li>• Follow local regulations and protected area guidelines</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Guide;
