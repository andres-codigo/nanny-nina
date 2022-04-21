<template>
	<div class="mt-10 mx-10 text-center">
		<div class="flex items-center text-slate-900">
			<button type="button" class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-slate-900 hover:text-gray-500">
				<span class="sr-only">Previous month</span>
				<ChevronLeftIcon class="w-5 h-5 text-slate-900" aria-hidden="true" />
			</button>
			<div class="flex-auto font-medium antialiased">February 2022</div>
			<button type="button" class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-slate-900 hover:text-gray-500">
				<span class="sr-only">Next month</span>
				<ChevronRightIcon class="w-5 h-5 text-slate-900" aria-hidden="true" />
			</button>
		</div>
		<div class="grid grid-cols-7 text-purple-500 font-bold antialiased leading-6 mt-6 ">
			<div>M</div>
			<div>T</div>
			<div>W</div>
			<div>T</div>
			<div>F</div>
			<div>S</div>
			<div>S</div>
		</div>
		<div class="isolate mt-2 grid grid-cols-7 gap-px">
			<!--
			Always include: "py-1.5 hover:bg-gray-100 focus:z-10"
			Is current month, include: "[to be confirmed]"
			Is not current month, include: "text-gray-400"
			Is selected or is today, include: "[font-semibold to be confirmed]"
			Is selected, include: "[text-white to be confirmed]"
			Is not selected, is not today, and is current month, include: "text-purple-900"
			Is not selected, is not today, and is not current month, include: "text-gray-400"
			Is today and is not selected, include: "[text-lilac-600 to be confirmed]"
			-->
			<button type="button" class="py-1.5 font-thin text-gray-400 hover:bg-gray-100 focus:z-10">
			<!--
				Always include: "mx-auto flex h-7 w-7 items-center justify-center"
				Is selected and is today, include: "[bg-lilac-600 to be confirmed]"
				Is selected and is not today, include: "[bg-gray-900 to be confirmed]"
			-->
				<time datetime="2021-12-27" class="mx-auto flex h-7 w-7 items-center justify-center">27</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-gray-400 hover:bg-gray-100 focus:z-10">
				<time datetime="2021-12-28" class="mx-auto flex h-7 w-7 items-center justify-center">28</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-gray-400 hover:bg-gray-100 focus:z-10">
				<time datetime="2021-12-29" class="mx-auto flex h-7 w-7 items-center justify-center">29</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-gray-400 hover:bg-gray-100 focus:z-10">
				<time datetime="2021-12-30" class="mx-auto flex h-7 w-7 items-center justify-center">30</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-gray-400 hover:bg-gray-100 focus:z-10">
				<time datetime="2021-12-31" class="mx-auto flex h-7 w-7 items-center justify-center">31</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-01" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full border border-black">1</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-01" class="mx-auto flex h-7 w-7 items-center justify-center">2</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-02" class="mx-auto flex h-7 w-7 items-center justify-center">3</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-04" class="mx-auto flex h-7 w-7 items-center justify-center">4</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-05" class="mx-auto flex h-7 w-7 items-center justify-center">5</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-06" class="mx-auto flex h-7 w-7 items-center justify-center">6</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-07" class="mx-auto flex h-7 w-7 items-center justify-center">7</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-08" class="mx-auto flex h-7 w-7 items-center justify-center">8</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-09" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-lilac-50">9</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-10" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-purple-500 text-white font-bold">10</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-11" class="mx-auto flex h-7 w-7 items-center justify-center">11</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-12" class="mx-auto flex h-7 w-7 items-center justify-center">12</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-13" class="mx-auto flex h-7 w-7 items-center justify-center">13</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-14" class="mx-auto flex h-7 w-7 items-center justify-center">14</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-15" class="mx-auto flex h-7 w-7 items-center justify-center">15</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-16" class="mx-auto flex h-7 w-7 items-center justify-center">16</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-17" class="mx-auto flex h-7 w-7 items-center justify-center">17</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-18" class="mx-auto flex h-7 w-7 items-center justify-center">18</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-19" class="mx-auto flex h-7 w-7 items-center justify-center">19</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-20" class="mx-auto flex h-7 w-7 items-center justify-center">20</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-21" class="mx-auto flex h-7 w-7 items-center justify-center">21</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-22" class="mx-auto flex h-7 w-7 items-center justify-center">22</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-23" class="mx-auto flex h-7 w-7 items-center justify-center">23</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-24" class="mx-auto flex h-7 w-7 items-center justify-center">24</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-25" class="mx-auto flex h-7 w-7 items-center justify-center">25</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-26" class="mx-auto flex h-7 w-7 items-center justify-center">26</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-27" class="mx-auto flex h-7 w-7 items-center justify-center">27</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-28" class="mx-auto flex h-7 w-7 items-center justify-center">28</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-29" class="mx-auto flex h-7 w-7 items-center justify-center">29</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-30" class="mx-auto flex h-7 w-7 items-center justify-center">30</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-purple-900 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-01-31" class="mx-auto flex h-7 w-7 items-center justify-center">31</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-gray-400 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-02-01" class="mx-auto flex h-7 w-7 items-center justify-center">1</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-gray-400 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-02-02" class="mx-auto flex h-7 w-7 items-center justify-center">2</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-gray-400 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-02-03" class="mx-auto flex h-7 w-7 items-center justify-center">3</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-gray-400 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-02-04" class="mx-auto flex h-7 w-7 items-center justify-center">4</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-gray-400 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-02-05" class="mx-auto flex h-7 w-7 items-center justify-center">5</time>
			</button>
			<button type="button" class="py-1.5 font-thin text-gray-400 hover:bg-gray-100 focus:z-10">
				<time datetime="2022-02-06" class="mx-auto flex h-7 w-7 items-center justify-center">6</time>
			</button>
		</div>

		<div class="flex mt-8">
			<div class="flex-1"><ButtonGhost text="Cancel" class="text-xl w-28 py-2" /></div>
			<div class="flex-1"><ButtonPrimary text="Done" class="text-xl w-28 py-2" /></div>
		</div>
	</div>
</template>

<script>
import ButtonGhost from '..//buttons/ButtonGhost.vue'
import ButtonPrimary from '../buttons/ButtonPrimary.vue'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid'

export default {
	components: {
		ButtonGhost,
		ButtonPrimary,
		ChevronLeftIcon,
		ChevronRightIcon
	}
}
</script>