import BoxClassIg from "../components/BoxClassIg"
import BoxOldWeb from "../components/BoxOldWeb"
import BoxTextAnonim from "../components/BoxTextAnonim"
import Navbar from "../components/Navbar"

const Home = () => {
	return (
		<div className="text-white px-[10%]" id="Home">
			<Navbar />
			<div className="lg:hidden">
				<div className="font-bold text-5xl text-center py-20 ">XI RPL 1</div>
				<div
					className="border-2 flex justify-between px-10 text-4xl font-bold py-2 relative"
					id="TotalSiswa">
					<div id="AngkaGradientBlue" className="flex items-center justify-center ">
						25
					</div>
					<div className="">
						<span id="AngkaGradientBlue" className="text-5xl">
							3
						</span>
						<span id="AngkaGradientBlue" className="text-5xl">
							7
						</span>
					</div>
					<div id="AngkaGradientBlue" className="flex items-center justify-center">
						12
					</div>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-2 gap-7 md:gap-5">
					<div className="grid gap-2 md:gap-0 md:grid-cols-1">
						<BoxClassIg />
					</div>
					<div className="grid gap-2 md:gap-0 md:grid-cols-1">
						<BoxOldWeb />
						<BoxTextAnonim />
					</div>
				</div>
			</div>

			{/* Dekstop */}
			<div className="hidden lg:block">
				<div className="flex justify-center items-center flex-col h-[100vh]">
					<img src="Zopsat1.png" className="w-15" alt="" />
				</div>
			</div>
		</div>
	)
}

export default Home
