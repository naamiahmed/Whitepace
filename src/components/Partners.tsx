import React from 'react';

const Partners = () => {
  const partners = [
    { name: 'Microsoft', logo: '🏢' },
    { name: 'Google', logo: '🔍' },
    { name: 'Slack', logo: '💬' },
    { name: 'Zoom', logo: '📹' },
    { name: 'Dropbox', logo: '📦' },
    { name: 'Spotify', logo: '🎵' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by 1000+ companies worldwide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of teams who have chosen Whitepace to streamline their workflow and boost productivity.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-3 p-6 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
            >
              <div className="text-4xl transform group-hover:scale-110 transition-transform">
                {partner.logo}
              </div>
              <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-blue-600">10M+</span>
              <span>Active users</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-green-600">99.9%</span>
              <span>Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-purple-600">50+</span>
              <span>Countries</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;