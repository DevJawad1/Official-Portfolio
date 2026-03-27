"use client"

import * as React from "react"
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { XIcon } from "@phosphor-icons/react"

import {IoMdClose} from "react-icons/io"
function Sheet(props) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger(props) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose(props) {
  return <SheetPrimitive.Close data-slot="sheet-clo  se" {...props} />
}

function SheetPortal(props) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({ className, ...props }) {
  return (
    <SheetPrimitive.Backdrop
      keepMounted
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-opacity duration-300",
        "opacity-0 data-[open]:opacity-100",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}) {
  return (
    <SheetPortal>
      <SheetOverlay className={cn(
        "fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-opacity duration-300",
        "opacity-0 data-[open]:opacity-100",
        className
      )} />

      <SheetPrimitive.Popup
        keepMounted
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "fixed z-50 flex flex-col bg-primary shadow-lg transition-transform duration-500 ease-in-out",

          // RIGHT
          "  data-[side=right]:right-0 data-[side=right]:top-0 data-[side=right]:h-full data-[side=right]:w-3/4 sm:max-w-sm",
          "data-[side=right]:translate-x-full",
          "data-[side=right]:data-[open]:translate-x-0",

          // LEFT
          "data-[side=left]:left-0 data-[side=left]:top-0 data-[side=left]:h-full data-[side=left]:w-3/4 sm:max-w-sm",
          "data-[side=left]:-translate-x-full",
          "data-[side=left]:data-[open]:translate-x-0",

          // TOP
          "data-[side=top]:top-0 data-[side=top]:left-0 data-[side=top]:w-full",
          "data-[side=top]:-translate-y-full",
          "data-[side=top]:data-[open]:translate-y-0",

          // BOTTOM
          "data-[side=bottom]:bottom-0 data-[side=bottom]:left-0 data-[side=bottom]:w-full",
          "data-[side=bottom]:translate-y-full",
          "data-[side=bottom]:data-[open]:translate-y-0",

          className
        )}
        {...props}
      >
        {children}

        {showCloseButton && (
          <SheetPrimitive.Close
            className="absolute  right-8 top-8 transition-opacity outline-none"
            data-slot="sheet-close" 
            render={
              // <Button
              //   variant="ghost"
              //   className="text-black absolute right-3 top-3"
              //   size="icon-sm"
              // />

            <IoMdClose className="text-3xl absolute right-5 top-5 text-accent" />

            }
          >
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Popup>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1 p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-sm font-medium", className)}
      {...props}
    />
  )
}

function SheetDescription({ className, ...props }) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-xs text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}