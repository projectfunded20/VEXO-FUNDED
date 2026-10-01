import { Headphones } from "lucide-react";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Tawk_API?: {
      onBeforeLoad?: () => void;
      onLoad?: () => void;
      onChatMaximized?: () => void;
      onChatMinimized?: () => void;
      onChatHidden?: () => void;
      showWidget?: () => void;
      hideWidget?: () => void;
      maximize?: () => void;
      minimize?: () => void;
      toggle?: () => void;
      isChatMinimized?: () => boolean;
      isChatHidden?: () => boolean;
      autoStart?: boolean;
      [key: string]: unknown;
    };
    Tawk_LoadStart?: Date;
    __vexoUserClickedChat?: boolean;
  }
}

export function openSupportChat() {
  if (typeof window === "undefined") return;
  window.__vexoUserClickedChat = true;

  if (window.Tawk_API && typeof window.Tawk_API.maximize === "function") {
    try {
      window.Tawk_API.showWidget?.();
      window.Tawk_API.maximize();
      return;
    } catch (e) {
      void e;
    }
  }

  if (window.Tawk_API) {
    const prev = window.Tawk_API.onLoad;
    window.Tawk_API.onLoad = () => {
      try {
        prev?.();
      } catch (e) {
        void e;
      }
      try {
        window.Tawk_API?.showWidget?.();
        window.Tawk_API?.maximize?.();
      } catch (e) {
        void e;
      }
    };
  }
}

export type LiveSupportAdapter = {
  onOpen?: () => void;
  onSend?: (message: string) => void;
};

export function LiveSupport({ adapter }: { adapter?: LiveSupportAdapter }) {
  const pendingClickRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Prevent default Tawk widget from appearing on initial load
    window.Tawk_API.onBeforeLoad = () => {
      try {
        window.Tawk_API?.hideWidget?.();
      } catch (e) {
        void e;
      }
    };

    window.Tawk_API.onLoad = () => {
      try {
        // If user already clicked while script was loading, maximize immediately
        if (window.__vexoUserClickedChat || pendingClickRef.current) {
          window.Tawk_API?.showWidget?.();
          window.Tawk_API?.maximize?.();
        } else {
          window.Tawk_API?.hideWidget?.();
        }
      } catch (e) {
        void e;
      }
    };

    // If any automated trigger / attention grabber attempts to pop up on visit, suppress it
    window.Tawk_API.onChatMaximized = () => {
      try {
        if (!window.__vexoUserClickedChat && !pendingClickRef.current) {
          window.Tawk_API?.minimize?.();
          window.Tawk_API?.hideWidget?.();
        }
      } catch (e) {
        void e;
      }
    };

    // Keep default Tawk floating icon hidden when user minimizes or closes the chat
    window.Tawk_API.onChatMinimized = () => {
      try {
        window.Tawk_API?.hideWidget?.();
      } catch (e) {
        void e;
      }
    };

    window.Tawk_API.onChatHidden = () => {
      try {
        window.Tawk_API?.hideWidget?.();
      } catch (e) {
        void e;
      }
    };

    // Inject Tawk.to script if not already present
    const scriptId = "tawk-to-script";
    if (!document.getElementById(scriptId)) {
      const s1 = document.createElement("script");
      s1.id = scriptId;
      s1.async = true;
      s1.src = "https://embed.tawk.to/6abec63f94972634491fef03/1k3sjcqp6";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      const s0 = document.getElementsByTagName("script")[0];
      if (s0 && s0.parentNode) {
        s0.parentNode.insertBefore(s1, s0);
      } else {
        document.head.appendChild(s1);
      }
    }
  }, []);

  const handleClick = () => {
    adapter?.onOpen?.();
    pendingClickRef.current = true;
    openSupportChat();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Customer Support"
      title="Customer Support"
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-action text-action-foreground shadow-action transition-transform duration-200 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-action"
    >
      <Headphones size={22} className="relative z-10" />
      <span
        aria-hidden="true"
        className="absolute top-1 right-1 h-3 w-3 rounded-full border-2 border-panel bg-success"
      />
    </button>
  );
}
