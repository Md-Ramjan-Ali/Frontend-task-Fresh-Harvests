// components/Testimonial.tsx
import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="py-16 px-6 bg-white relative text-center">
      {/* Top Label */}
      <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
        Testimonial
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        What Our Customers Say
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-12">
        Don’t just take our word for it—here’s what some of our customers have to
        say about their experience with Fresh Harvest:
      </p>

      {/* Testimonial Card */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
        {/* Customer Image */}
        <div className="relative">
          <div className="overflow-hidden w-56 h-64">
            <Image
              src="/images/customer.png"
              alt="Customer"
              width={192}
              height={192}
              className="object-cover"
            />
          </div>
          {/* Decorative Element */}
          {/* <div className="absolute -right-6 top-6 text-orange-400 text-3xl font-bold">
            〃
          </div> */}
        </div>

        {/* Quote */}
        <div className="bg-gray-100 rounded-2xl p-6 text-left shadow-sm">
          <p className="text-gray-700 mb-4">
            &quot;I absolutely love Fresh Harvest! The quality of their produce is
            outstanding. It&apos;s always fresh, flavorful, and delicious. The
            convenience of ordering online and having it delivered to my
            doorstep saves me so much time. Fresh Harvest has become my go-to for
            all my fruit and vegetable needs.&quot;
          </p>
          <p className="font-bold text-gray-800">
            Jane Doe <span className="font-normal text-gray-600">- Professional chef</span>
          </p>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <span className="w-3 h-3 rounded-full bg-gray-300"></span>
        <span className="w-3 h-3 rounded-full bg-gray-300"></span>
      </div>
    </section>
  );
}
