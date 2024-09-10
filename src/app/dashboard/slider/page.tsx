'use client'

import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

type SliderProps = React.ComponentProps<typeof Slider>

export default function Page({ className, ...props }: SliderProps) {

	const [sliderValue, setSliderValue] = useState(10)
	const [rangeValue, setRangeValue] = useState([10, 20])

	return (
		<div className="flex flex-col gap-8">
			<span>Slider value: {sliderValue}</span>
			<Slider
				defaultValue={[sliderValue]}
				max={100}
				step={1}
				onValueChange={(value) => setSliderValue(value[0])}
			/>

			<span>Slider value: {rangeValue.join(",")} </span>
			<Slider
				defaultValue={rangeValue}
				max={100}
				step={1}
				onValueChange={setRangeValue}
			/>
		</div>
	)
}
