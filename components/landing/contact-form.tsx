"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "sending" | "sent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));

    setStatus("sending");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error ?? "Something went wrong.");
      }

      form.reset();
      setStatus("sent");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Something went wrong.");
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-lg border border-client-lab-secondary/30 bg-client-lab-secondary/5 px-6 py-12 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-client-lab-secondary/15">
          <Check className="h-6 w-6 text-client-lab-secondary" />
        </div>
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            Thanks — we have your request.
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Someone from the team will get back to you within 24 hours.
          </p>
        </div>
        <Button
          variant="outline"
          className="mt-2"
          onClick={() => setStatus("idle")}
        >
          Send another request
        </Button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            required
            maxLength={100}
            autoComplete="name"
            placeholder="Ada Lovelace"
            className="h-11"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Work email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            placeholder="ada@university.edu"
            className="h-11"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="company">
          Company or institution{" "}
          <span className="font-normal text-slate-500">(optional)</span>
        </Label>
        <Input
          id="company"
          name="company"
          maxLength={100}
          autoComplete="organization"
          placeholder="Analytical Engine Lab"
          className="h-11"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          rows={5}
          placeholder="Tell us what you're working on and what you'd like to see in the demo."
        />
      </div>

      {/* Honeypot — hidden from humans, irresistible to bots. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {error && (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}

      <div className="flex justify-center">
        <Button
          type="submit"
          size="lg"
          disabled={sending}
          className="bg-client-lab-secondary font-bold text-white hover:bg-client-lab-secondary/70 w-full px-10 sm:w-auto"
        >
          {sending ? (
            <>
              <Loader2 className="animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send request
              <ArrowRight />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
