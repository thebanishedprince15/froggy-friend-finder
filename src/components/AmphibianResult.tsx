
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AmphibianData {
  commonName: string;
  scientificName: string;
  family: string;
  habitat: string;
  diet: string;
  conservationStatus: string;
  geographicRange: string;
  size: string;
  behavior: string;
}

interface AmphibianResultProps {
  data: AmphibianData;
  confidence?: number;
  image: string;
}

const AmphibianResult = ({ data, confidence, image }: AmphibianResultProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Image Display */}
      <Card className="bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <img
            src={image}
            alt={data.commonName}
            className="w-full rounded-lg shadow-lg max-h-96 object-cover"
          />
        </CardContent>
      </Card>

      {/* Identification Results */}
      <Card className="bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Identification Results
          </CardTitle>
          {confidence && (
            <p className="text-center text-gray-600">
              Confidence: {Math.round(confidence)}%
            </p>
          )}
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold text-gray-700 bg-green-50">
                    Common Name
                  </td>
                  <td className="py-3 px-4 text-gray-900">{data.commonName}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold text-gray-700 bg-blue-50">
                    Scientific Name
                  </td>
                  <td className="py-3 px-4 text-gray-900 italic">{data.scientificName}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold text-gray-700 bg-green-50">
                    Family
                  </td>
                  <td className="py-3 px-4 text-gray-900">{data.family}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold text-gray-700 bg-blue-50">
                    Habitat
                  </td>
                  <td className="py-3 px-4 text-gray-900">{data.habitat}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold text-gray-700 bg-green-50">
                    Diet
                  </td>
                  <td className="py-3 px-4 text-gray-900">{data.diet}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold text-gray-700 bg-blue-50">
                    Conservation Status
                  </td>
                  <td className="py-3 px-4 text-gray-900">{data.conservationStatus}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold text-gray-700 bg-green-50">
                    Geographic Range
                  </td>
                  <td className="py-3 px-4 text-gray-900">{data.geographicRange}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold text-gray-700 bg-blue-50">
                    Size
                  </td>
                  <td className="py-3 px-4 text-gray-900">{data.size}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-gray-700 bg-green-50">
                    Behavior
                  </td>
                  <td className="py-3 px-4 text-gray-900">{data.behavior}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AmphibianResult;
