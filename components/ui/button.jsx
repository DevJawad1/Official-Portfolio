"use client"

import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors ",
  // "group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding text-xs font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-accent text-primary hover:bg-accent-hover ",
        priary: "bg-primary text-white ",
        outline :"border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
      },
      size: {
        default:"h-[44px] px-6",
        
        // xs: "h-6 gap-1 rounded-none px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        // sm: "h-7 gap-1 rounded-none px-2.5 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",

        md: "h-[48px] px-6",
        lg: "h-[56px] px-8 text-sm uppercase tracking[2px]",
       
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
