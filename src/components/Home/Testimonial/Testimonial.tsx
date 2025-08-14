// components/Testimonial.tsx
import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="pt-20 lg:pt-30 px-4 bg-white relative text-center">
      <div className="max-w-screen-xl mx-auto relative">
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto pt-10">
          {/* Customer Image */}
          <div className="relative">
            <div className="overflow-hidden w-56 h-72">
              <Image
                src="/images/customer.png"
                alt="Customer"
                width={350}
                height={350}
                className="object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -right-6 -top-6 text-orange-400 text-3xl font-bold">
              <Image src='/images/sun-image-right.png' width={50} height={50} alt="right" />
            </div>
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
        <div className="absolute top-0 left-0 lg:top-35 lg:left-40 z-10">
          <Image src="/images/pata.png" width={70} height={70} alt='pata' />
        </div>
        <div className="absolute top-0 right-0 lg:top-50 lg:right-50 z-10 ">
          <Image src="/images/pata.png" width={70} height={70} alt='pata' />
        </div>
      </div>
    </section>
  );
}
