
import { AmphibianData } from "@/services/geminiService";
import ShareButton from "./ShareButton";

interface AmphibianResultProps {
  data: AmphibianData;
  image: string;
}

const AmphibianResult = ({ data, image }: AmphibianResultProps) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto animate-fade-in">
      {/* Header with image and basic info */}
      <div className="relative">
        <img
          src={image}
          alt={data.commonName}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                {data.commonName}
              </h2>
              <p className="text-white/90 italic text-lg">
                {data.scientificName}
              </p>
            </div>
            <ShareButton data={data} image={image} />
          </div>
        </div>
      </div>

      {/* Details Table */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Amphibian Details
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Family */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
            <div className="text-sm font-medium text-gray-600">Family</div>
            <div className="text-lg text-gray-800">{data.family}</div>
          </div>

          {/* Habitat */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg">
            <div className="text-sm font-medium text-gray-600">Habitat</div>
            <div className="text-lg text-gray-800">{data.habitat}</div>
          </div>

          {/* Diet */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
            <div className="text-sm font-medium text-gray-600">Diet</div>
            <div className="text-lg text-gray-800">{data.diet}</div>
          </div>

          {/* Conservation Status */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg">
            <div className="text-sm font-medium text-gray-600">Conservation Status</div>
            <div className="text-lg text-gray-800">{data.conservationStatus}</div>
          </div>

          {/* Geographic Range */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
            <div className="text-sm font-medium text-gray-600">Geographic Range</div>
            <div className="text-lg text-gray-800">{data.geographicRange}</div>
          </div>

          {/* Size */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg">
            <div className="text-sm font-medium text-gray-600">Size</div>
            <div className="text-lg text-gray-800">{data.size}</div>
          </div>
        </div>

        {/* Behavior - Full Width */}
        <div className="mt-4 bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
          <div className="text-sm font-medium text-gray-600">Behavior</div>
          <div className="text-lg text-gray-800">{data.behavior}</div>
        </div>
      </div>
    </div>
  );
};

export default AmphibianResult;
