import React from 'react';
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CpuChipIcon,
  ClipboardDocumentCheckIcon,
  PresentationChartBarIcon,
  CloudIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/solid';

function WhyAdventureLearning() {
  const features = [
    {
      text: "High engagement and outcome-centric learning",
      icon: ChartBarIcon,
    },
    {
      text: "Customized curriculum built with industry leaders",
      icon: PuzzlePieceIcon,
    },
    {
      text: "Hands-on exercises and industry use cases",
      icon: CpuChipIcon,
    },
    {
      text: "Project reviews and feedback from industry SMEs",
      icon: ClipboardDocumentCheckIcon,
    },
    {
      text: "Detailed reporting to track learning ROI",
      icon: PresentationChartBarIcon,
    },
    {
      text: "Pre-configured Cloud Labs for practice",
      icon: CloudIcon,
    },
    {
      text: "Day 1 production ready after training",
      icon: RocketLaunchIcon,
    },
  ];

  return (
    <div data-aos="fade-down" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-8 text-[#0057D3]">
            Why Top Companies Choose Adventure Learning
          </h2>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 md:space-y-0">
            {features.map((feature, index) => (
              <div key={feature.text} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-[#0057D3]">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    {feature.text}
                  </p>
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default WhyAdventureLearning;