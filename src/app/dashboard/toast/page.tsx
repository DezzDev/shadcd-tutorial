"use client"

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"

export default function ToastSimple() {
	const { toast } = useToast()

	return (

		<div className="flex flex-wrap gap-5">
			<Button
				variant="outline"
				onClick={() => {
					toast({
						description: "Your message has been sent.",
					})
				}}
			>
				Show Toast
			</Button>

			<Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        })
      }}
    >
      with title
    </Button>

		<Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action:( 
						<ToastAction 
							altText="Try again"
							onClick={()=>console.log("try again")}
						>
							try again
						</ToastAction>
					),
        })
      }}
    >
      with action
    </Button>

		<Button
      variant="destructive"

      onClick={() => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
      }}
    >
      destructive
    </Button>

		<Button
     className="bg-green-500 text-white hover:bg-green-500/90"

      onClick={() => {
        toast({
          variant: "success",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
      }}
    >
      success
    </Button>

		</div>


	)
}
