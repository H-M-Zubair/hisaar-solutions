"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { waLink } from "@/lib/utils";

export function ContactForm() {
  const [name, setName] = React.useState("");
  const [shop, setShop] = React.useState("grocery");
  const [phone, setPhone] = React.useState("");
  const [note, setNote] = React.useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = [
      `Hi Hisaar — trial / demo request.`,
      `Name: ${name || "—"}`,
      `Shop type: ${shop}`,
      `Phone: ${phone || "—"}`,
      note ? `Note: ${note}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5"
      aria-label="Book an Omni Ledger trial or demo"
    >
      <div className="space-y-2">
        <Label htmlFor="name">Your name</Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shop">Shop type</Label>
        <select
          id="shop"
          name="shop"
          value={shop}
          onChange={(e) => setShop(e.target.value)}
          aria-label="Shop type"
          className="flex h-11 w-full rounded-lg border border-line bg-surface px-3.5 text-sm text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
        >
          <option value="grocery">Grocery / kirana</option>
          <option value="pharmacy">Pharmacy</option>
          <option value="restaurant">Restaurant</option>
          <option value="garments">Garments</option>
          <option value="general">General retail</option>
        </select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">WhatsApp number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="03xx…"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="note">What should we provision?</Label>
        <Textarea
          id="note"
          name="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Shop name, city, roughly how many SKUs, tables, or sizes."
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto"
        aria-label="Continue booking on WhatsApp (opens in a new tab)"
      >
        Continue on WhatsApp
      </Button>
      <p className="text-xs text-mute">
        This does not create an account. It opens WhatsApp to Hisaar with your
        details so we can provision a trial.
      </p>
    </form>
  );
}
