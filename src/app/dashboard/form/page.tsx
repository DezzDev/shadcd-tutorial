"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"


const formSchema = z.object({
	username: z.string().min(2).max(20),
	email: z.string().email(),
	gender: z.enum(["male", "female", "other"], {
		required_error: "You need to select a gender.",
	}),
	dob: z.date({
		required_error: "A date of birth is required.",
	}),
})

export default function Page() {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			email: ""
		},
	})

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(values, null, 2)}</code>
				</pre>
			),
		})
	}

	return (
		<div className="flex flex-col gap-y-10">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
					{/* username */}
					<FormField
						control={form.control}
						name="username"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input placeholder="shadcn" {...field} />
								</FormControl>
								<FormDescription>
									This is your public display name.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* email */}
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input type="email" {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					{/* radio group */}
					<FormField
						control={form.control}
						name="gender"
						render={({ field }) => (
							<FormItem className="space-y-3">
								<FormLabel>choose gender</FormLabel>
								<FormControl>
									<RadioGroup
										onValueChange={field.onChange}
										defaultValue={field.value}
										className="flex flex-col space-y-1"
									>
										<FormItem className="flex items-center space-x-3 space-y-0">
											<FormControl>
												<RadioGroupItem value="male" />
											</FormControl>
											<FormLabel className="font-normal">
												Male
											</FormLabel>
										</FormItem>
										<FormItem className="flex items-center space-x-3 space-y-0">
											<FormControl>
												<RadioGroupItem value="female" />
											</FormControl>
											<FormLabel className="font-normal">
												Female
											</FormLabel>
										</FormItem>
										<FormItem className="flex items-center space-x-3 space-y-0">
											<FormControl>
												<RadioGroupItem value="other" />
											</FormControl>
											<FormLabel className="font-normal">Other</FormLabel>
										</FormItem>
									</RadioGroup>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* datepicker */}

					<FormField
						control={form.control}
						name="dob"
						render={({ field }) => (
							<FormItem className="flex flex-col">
								<FormLabel>Date of birth</FormLabel>
								<Popover>
									<PopoverTrigger asChild>
										<FormControl>
											<Button
												variant={"outline"}
												className={cn(
													"w-[240px] pl-3 text-left font-normal",
													!field.value && "text-muted-foreground"
												)}
											>
												{field.value ? (
													format(field.value, "PPP")
												) : (
													<span>Pick a date</span>
												)}
												<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
											</Button>
										</FormControl>
									</PopoverTrigger>
									<PopoverContent className="w-auto p-0" align="start">
										<Calendar
											mode="single"
											selected={field.value}
											onSelect={field.onChange}
											disabled={(date) =>
												date > new Date() || date < new Date("1900-01-01")
											}
											initialFocus
										/>
									</PopoverContent>
								</Popover>
								<FormDescription>
									Your date of birth is used to calculate your age.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* submit */}
					<Button type="submit">Submit</Button>
				</form>
			</Form>

		
		</div>
	)
}