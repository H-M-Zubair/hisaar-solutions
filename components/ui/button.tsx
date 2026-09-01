"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "btn inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        amber:
          "bg-amber text-[#1a0d04] shadow-cta hover:bg-amber hover:text-gray-100 hover:brightness-110",
        teal: "bg-teal text-[#04241c] hover:brightness-110",
        outline:
          "hairline bg-transparent text-paper hover:bg-transparent",
        ghost: "bg-transparent text-paper hover:bg-paper/5",
        paper: "bg-paper text-ink hover:brightness-95",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 px-3.5 text-xs",
        lg: "h-12 px-6 text-base",
        icon: "btn-square h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "amber",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      onPointerDown,
      onPointerUp,
      onPointerLeave,
      onPointerCancel,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    function press(e: React.PointerEvent<HTMLButtonElement>) {
      (e.currentTarget as HTMLElement).setAttribute("data-pressed", "");
      onPointerDown?.(e);
    }
    function release(e: React.PointerEvent<HTMLButtonElement>) {
      (e.currentTarget as HTMLElement).removeAttribute("data-pressed");
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        onPointerDown={press}
        onPointerUp={(e) => {
          release(e);
          onPointerUp?.(e);
        }}
        onPointerLeave={(e) => {
          release(e);
          onPointerLeave?.(e);
        }}
        onPointerCancel={(e) => {
          release(e);
          onPointerCancel?.(e);
        }}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
