// src/components/Partners.jsx
export default function Partners() {
  const logos = [
    "/images/partner1.png",
    "/images/partner2.png",
    "/images/partner3.png",
    "/images/partner4.png",
  ]

  return (
    <section className="p-10 bg-[#04091E]">
      <h2 className="text-3xl font-semibold text-gray-100 mb-6">
        Partners
      </h2>
      <div className="flex space-x-6">
        {logos.map((logo, idx) => (
          <img key={idx} src={logo} alt="Partner logo" className="h-16" />
        ))}
      </div>
    </section>
  )
}
