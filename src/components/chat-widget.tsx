import { useEffect, useState } from "react";
import { X, Phone, Mail, MessageCircle } from "lucide-react";

import { CONTACT, WHATSAPP_URL } from "@/lib/site-contact";
import { WhatsAppIcon } from "./whatsapp-icon";

const SESSION_KEY = "mtc-chat-dismissed";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem(SESSION_KEY) === "1") return;
    const t = setTimeout(() => setOpen(true), 3500);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  const close = () => {
    setOpen(false);
    sessionStorage.setItem(SESSION_KEY, "1");
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 print:hidden">
      {open && (
        <div className="w-[19rem] max-w-[calc(100vw-2.5rem)] border border-border bg-card shadow-2xl">
          <div className="flex items-start justify-between gap-3 border-b border-border bg-secondary px-4 py-3">
            <div>
              <p className="label-eyebrow">Talk to an engineer</p>
              <p className="mt-1 font-display text-sm font-bold">
                Merjan Tooling Craft — Support
              </p>
            </div>
            <button onClick={close} aria-label="Close chat" className="mt-0.5 text-muted-foreground hover:text-foreground">
              <X className="size-4" />
            </button>
          </div>

          <div className="space-y-3 p-4">
            <p className="text-sm text-muted-foreground">
              Send us your drawing, CAD model or sample details — we typically reply within one
              working hour.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              <WhatsAppIcon className="size-4" /> Chat on WhatsApp
            </a>
            <a href={CONTACT.phoneHref} className="btn-ghost w-full text-xs">
              <Phone className="size-4" /> {CONTACT.phoneDisplay}
            </a>
            <a href={CONTACT.emailHref} className="btn-ghost w-full text-xs normal-case tracking-normal">
              <Mail className="size-4" /> {CONTACT.email}
            </a>
            <p className="text-center font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
              {CONTACT.hours}
            </p>
          </div>
        </div>
      )}

      <div className="flex items-center gap-3">
        {!open && (
          <button
            onClick={() => setOpen(true)}
            aria-label="Open chat"
            className="flex size-12 items-center justify-center border border-border bg-card text-foreground shadow-lg transition-colors hover:border-primary hover:text-primary"
          >
            <MessageCircle className="size-5" />
          </button>
        )}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform hover:-translate-y-0.5"
        >
          <WhatsAppIcon className="size-7" />
        </a>
      </div>
    </div>
  );
}
