const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover w-full h-full"
          src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
          alt=""
        />
      </div>
      <div className="p-4">
        <h1 className="text-lg font-medium text-gray-900">Nofilter</h1>
        <p className="mt-2 text-sm text-gray-500">
          Men solid pure cotton straight kurta
        </p>
      </div>
    </div>
  )
}
export default HomeSectionCard
