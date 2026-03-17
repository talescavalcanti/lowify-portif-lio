import { CartoonButton } from "@/components/ui/cartoon-button"

export function Demo(){
    return(
        <div className="flex flex-row gap-4 p-8 bg-[#0044cc] min-h-[200px] items-center justify-center">
            <CartoonButton label="Click me!" onClick={() => alert('Button clicked!')}/>
            <CartoonButton label="Disabled" color="bg-purple-400" hasHighlight={false} disabled onClick={() => alert('Button clicked!')}/>
        </div>
    )
}
