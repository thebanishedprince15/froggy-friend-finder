
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-green-600 animate-gradient-x">
      <div className="min-h-screen bg-gradient-to-t from-blue-900/20 to-green-900/20">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                About Amphi Vision
              </h1>
              <p className="text-xl text-white/90">
                Revolutionizing amphibian identification through artificial intelligence
              </p>
            </div>

            <div className="space-y-8">
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    To make amphibian identification accessible to everyone, from herpetologists and researchers to nature enthusiasts and curious explorers. We believe that understanding our wetland and forest biodiversity is the first step toward protecting these vital ecosystems and their inhabitants.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Our Team
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Amphi Vision was created by a passionate team of herpetologists, AI researchers, and software developers who share a deep love for amphibians and their habitats. Our diverse expertise combines cutting-edge technology with amphibian science knowledge to create the most accurate identification system available.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Why Amphi Vision?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-semibold text-gray-800 mb-4">
                    Empowering wetland exploration through technology
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Accurate Identification</h4>
                      <p className="text-gray-700">
                        Advanced AI technology powered by Google Gemini provides highly accurate species identification from your photos of frogs, toads, salamanders, and other amphibians.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Comprehensive Database</h4>
                      <p className="text-gray-700">
                        Access detailed information about amphibian species including habitat preferences, diet, conservation status, and behavioral characteristics.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">User-Friendly</h4>
                      <p className="text-gray-700">
                        Simple, intuitive interface that works on any device. No registration required - just point, capture, and learn!
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Conservation Impact</h4>
                      <p className="text-gray-700">
                        Every identification helps build awareness about amphibian biodiversity. By making species identification accessible, we hope to inspire more people to appreciate and protect our wetlands, forests, and the amazing amphibians that call them home. Knowledge is the foundation of conservation, and Amphi Vision puts that knowledge at your fingertips.
                      </p>
                    </div>
                  </div>
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

export default About;
