
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Info } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-green-600 animate-gradient-x">
      <div className="min-h-screen bg-gradient-to-t from-blue-900/20 to-green-900/20">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-white/90">
                We'd love to hear from you!
              </p>
            </div>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent text-center">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center mb-8">
                  Whether you have questions, feedback, or suggestions for improvement, we're here to help.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">General Support</h3>
                      <p className="text-gray-600">support@amphivision.app</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <Info className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Research Inquiries</h3>
                      <p className="text-gray-600">research@amphivision.app</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Technical Support</h3>
                      <p className="text-gray-600">tech@amphivision.app</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
                  <p className="text-sm text-gray-700 text-center">
                    We typically respond to all inquiries within 24 hours. For urgent technical issues, please include details about your device and the specific problem you're experiencing.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
