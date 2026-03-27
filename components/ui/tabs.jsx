"use client"

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn("group/tabs flex gap-2 data-horizontal:flex-col", className)}
      {...props} />
  );
}

const tabsListVariants = cva(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-none p-[3px] text-muted-foreground group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn("inline flex h-auto rounded-md p-1 text-primary", className)}
      {...props} />
  );
}

function TabsTrigger({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex items-center w-full bg-[#27272c] justify-center whitespace-nowrap text-white rounded-lg p-3 text-balance font-medium ring-offset-white transtion-all disable:opacity-50 aria-selected:bg-accent aria-selected:text-primary aria-selected:font-bold aria-selected:shadow-sm ",
        className
      )}
      {...props} />
  );
}

function TabsContent({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn(" min-h-[480px] flex-1 text-xs/relaxed outline-none", className)}
      {...props} />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
