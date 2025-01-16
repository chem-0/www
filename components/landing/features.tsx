import Scaffold from "../shared/scaffold";
import TitleBadge from "../shared/title-badge";

export default function Features() {
  return (
    <Scaffold>
      <div className="text-center mb-12">
        <TitleBadge title="Features" />
        <h2 className="text-4xl font-bold mb-4">Why Choose ClientLabs</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Learn, experiment, and innovate with immersive AI-driven simulations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-8 gap-6">
        {/* First row - full width cards */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border col-span-4">
          <h3 className="text-xl font-bold mb-3">AI-Guided Experiments</h3>
          <p className="text-gray-600">
            Get personalized learning experiences with AI suggestions tailored to your skill level and goals.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border col-span-4">
          <h3 className="text-xl font-bold mb-3">Instant Feedback System</h3>
          <p className="text-gray-600">
            Improve faster with real-time corrections and insights into your experiments.
          </p>
        </div>

        {/* Second row - half width cards */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border col-span-3">
          <h3 className="text-xl font-bold mb-3">Immersive 3D Labs</h3>
          <p className="text-gray-600">
            Realistic, hands-on simulations in lifelike 3D environments. Practice experiments safely and interactively.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border col-span-5">
          <h3 className="text-xl font-bold mb-3">Scalable & Safe</h3>
          <p className="text-gray-600">
            Perfect for students, educators, and researchers. Accessible, secure, and designed to grow with you.
          </p>
        </div>
      </div>
    </Scaffold>
  )
}
