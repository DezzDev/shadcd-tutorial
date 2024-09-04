import * as React from "react"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"


export default function CardWithForm() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 ">
      {
        "123456789".split("").map((item) => (
          <Card key={item}>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost"> ghost</Button>
              <Button> más</Button>
            </CardFooter>
          </Card>
        )
      )}

    </div>
  )
}
