function HeroImage( {title, imageUrl, subtitle} ) {
  return (
     <div className="relative w-full max-w-screen overflow-hidden">
      <div className="w-full h-[450px] relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl">{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

export default HeroImage
