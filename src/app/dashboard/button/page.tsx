import { Button } from "@/components/ui/button"
import { ChevronRight, Mail } from "lucide-react"
import { Loader2 } from "lucide-react"


export default function Page() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Button>Default</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="outline">outline</Button>
      <Button variant="link">link</Button>
      <Button disabled>disabled</Button>
      <Button variant="success">success</Button>
      <Button variant="default" capitalize={false}>capitalize false</Button>
      <Button variant="outline" size="icon">
        <ChevronRight className="h-4 w-4" />
      </Button>
      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    </div>
  );
}