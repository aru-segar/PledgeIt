import React from "react";

const About = () => {
  return (
    <div className="bg-[#f9eee7] text-gray-800 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#de362e]">About PledgeIt</h1>
          <p className="mt-4 text-lg">
            Connecting volunteers with meaningful opportunities to make a difference in the world.
          </p>
        </div>

        {/* Brand Story */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#de362e]">Our Story</h2>
          <p className="mt-4 text-lg leading-relaxed">
            PledgeIt was born from a vision to transform the way volunteering is perceived and experienced. 
            In today's fast-paced world, many individuals face challenges finding opportunities that align with their passions. 
            We wanted to change that by creating a platform where volunteers can not only contribute but feel valued for their impact.
          </p>
        </section>

        {/* Vision and Mission */}
        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#de362e]">Our Vision</h2>
            <p className="mt-4 text-lg leading-relaxed">
              To build a world where every individual can contribute to their community in meaningful ways,
              fostering a culture of recognition and shared purpose. At PledgeIt, we strive to empower
              volunteers and organizations to create a lasting impact.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#de362e]">Our Mission</h2>
            <p className="mt-4 text-lg leading-relaxed">
              Our mission is to connect passionate individuals with organizations that need their skills and energy,
              ensuring every effort is acknowledged and celebrated. Through personalized matching, gamification,
              and recognition, PledgeIt redefines the volunteer experience for the modern world.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-[#de362e]">Join Us in Making a Difference</h3>
          <p className="mt-4 text-lg">
            Together, we can bridge the gap between volunteers and organizations, creating a sustainable
            future for our communities. Be a part of the change.
          </p>
          <button className="mt-6 px-6 py-3 text-white bg-[#de362e] hover:bg-red-600 rounded-lg shadow-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
